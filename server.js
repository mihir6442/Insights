const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'your-domain.com' : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://mihir6442_db_user:jP9Iv9A7atLvnpZX@insights.8w34nwj.mongodb.net/it_insights_blog?retryWrites=true&w=majority&appName=Insights';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    console.log('📊 Database: it_insights_blog');
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
});

// Mongoose Schemas
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['admin', 'editor', 'author'], default: 'author' },
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String,
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    color: { type: String, default: '#3B82F6' },
    icon: { type: String, default: '📁' },
    postCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
    featured: { type: Boolean, default: false },
    tags: [String],
    metaTitle: String,
    metaDescription: String,
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    publishedAt: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

// Models
const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Middleware for authentication
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

// Middleware for admin authorization
const requireAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
};

// Helper function to generate slug
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
};

// ====================
// AUTHENTICATION ROUTES
// ====================

// Register user
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email or username already exists' });
        }

        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user
        const user = new User({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role: 'author' // Default role
        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login user
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Find user by username or email
        const user = await User.findOne({
            $or: [{ username }, { email: username }],
            isActive: true
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// POSTS ROUTES
// ====================

// Get all posts
app.get('/api/posts', async (req, res) => {
    try {
        const { status, category, limit = 10, page = 1, search } = req.query;
        
        let query = {};
        
        // Filter by status (default to published for public access)
        if (status) {
            query.status = status;
        } else {
            query.status = 'published';
        }
        
        // Filter by category
        if (category) {
            const categoryDoc = await Category.findOne({ slug: category });
            if (categoryDoc) {
                query.category = categoryDoc._id;
            }
        }
        
        // Search functionality
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } }
            ];
        }

        const posts = await Post.find(query)
            .populate('category', 'name slug color icon')
            .populate('author', 'username firstName lastName')
            .sort({ publishedAt: -1, createdAt: -1 })
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));

        const total = await Post.countDocuments(query);

        res.json({
            posts,
            pagination: {
                current: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Get posts error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get single post
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('category', 'name slug color icon')
            .populate('author', 'username firstName lastName');

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Increment view count
        post.views += 1;
        await post.save();

        res.json(post);
    } catch (error) {
        console.error('Get post error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create post (admin/editor only)
app.post('/api/posts', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin' && req.user.role !== 'editor') {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }

        const { title, content, excerpt, categoryId, status, featured, tags, metaTitle, metaDescription } = req.body;

        if (!title || !content || !categoryId) {
            return res.status(400).json({ error: 'Title, content, and category are required' });
        }

        // Generate slug
        const slug = generateSlug(title);

        // Check if slug already exists
        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            return res.status(400).json({ error: 'A post with this title already exists' });
        }

        // Create post
        const post = new Post({
            title,
            slug,
            content,
            excerpt: excerpt || content.substring(0, 200) + '...',
            category: categoryId,
            author: req.user.userId,
            status: status || 'draft',
            featured: featured || false,
            tags: tags || [],
            metaTitle: metaTitle || title,
            metaDescription: metaDescription || excerpt,
            publishedAt: status === 'published' ? new Date() : null
        });

        await post.save();

        // Update category post count
        await Category.findByIdAndUpdate(categoryId, { $inc: { postCount: 1 } });

        const populatedPost = await Post.findById(post._id)
            .populate('category', 'name slug color icon')
            .populate('author', 'username firstName lastName');

        res.status(201).json({
            message: 'Post created successfully',
            post: populatedPost
        });
    } catch (error) {
        console.error('Create post error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update post
app.put('/api/posts/:id', authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Check permissions
        if (req.user.role !== 'admin' && post.author.toString() !== req.user.userId) {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }

        const updates = req.body;
        updates.updatedAt = new Date();

        // If changing to published, set publishedAt
        if (updates.status === 'published' && post.status !== 'published') {
            updates.publishedAt = new Date();
        }

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, updates, { new: true })
            .populate('category', 'name slug color icon')
            .populate('author', 'username firstName lastName');

        res.json({
            message: 'Post updated successfully',
            post: updatedPost
        });
    } catch (error) {
        console.error('Update post error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete post
app.delete('/api/posts/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Update category post count
        await Category.findByIdAndUpdate(post.category, { $inc: { postCount: -1 } });

        await Post.findByIdAndDelete(req.params.id);

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Delete post error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// CATEGORIES ROUTES
// ====================

// Get all categories
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true }).sort({ name: 1 });
        res.json(categories);
    } catch (error) {
        console.error('Get categories error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create category
app.post('/api/categories', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { name, description, color, icon } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Category name is required' });
        }

        const slug = generateSlug(name);

        // Check if category already exists
        const existingCategory = await Category.findOne({ $or: [{ name }, { slug }] });
        if (existingCategory) {
            return res.status(400).json({ error: 'Category with this name already exists' });
        }

        const category = new Category({
            name,
            slug,
            description,
            color: color || '#3B82F6',
            icon: icon || '📁'
        });

        await category.save();

        res.status(201).json({
            message: 'Category created successfully',
            category
        });
    } catch (error) {
        console.error('Create category error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update category
app.put('/api/categories/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const updates = req.body;
        
        if (updates.name) {
            updates.slug = generateSlug(updates.name);
        }

        const category = await Category.findByIdAndUpdate(req.params.id, updates, { new: true });
        
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json({
            message: 'Category updated successfully',
            category
        });
    } catch (error) {
        console.error('Update category error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete category
app.delete('/api/categories/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Check if category has posts
        const postCount = await Post.countDocuments({ category: req.params.id });
        if (postCount > 0) {
            return res.status(400).json({ error: 'Cannot delete category with existing posts' });
        }

        await Category.findByIdAndDelete(req.params.id);

        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Delete category error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// USERS ROUTES
// ====================

// Get all users (admin only)
app.get('/api/users', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const users = await User.find({ isActive: true })
            .select('-password')
            .sort({ createdAt: -1 });
        
        res.json(users);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create user (admin only)
app.post('/api/users', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { username, email, password, role, firstName, lastName, bio } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email or username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'author',
            firstName,
            lastName,
            bio
        });

        await user.save();

        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'User created successfully',
            user: userResponse
        });
    } catch (error) {
        console.error('Create user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update user
app.put('/api/users/:id', authenticateToken, async (req, res) => {
    try {
        // Users can update their own profile, admins can update any user
        if (req.user.role !== 'admin' && req.params.id !== req.user.userId) {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }

        const updates = req.body;
        delete updates.password; // Handle password updates separately
        updates.updatedAt = new Date();

        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true })
            .select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            message: 'User updated successfully',
            user
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete user (admin only)
app.delete('/api/users/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Don't allow deletion of the last admin
        if (user.role === 'admin') {
            const adminCount = await User.countDocuments({ role: 'admin', isActive: true });
            if (adminCount <= 1) {
                return res.status(400).json({ error: 'Cannot delete the last admin user' });
            }
        }

        // Soft delete by setting isActive to false
        user.isActive = false;
        await user.save();

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// COMMENTS ROUTES
// ====================

// Get comments for a post
app.get('/api/posts/:postId/comments', async (req, res) => {
    try {
        const comments = await Comment.find({ 
            post: req.params.postId, 
            status: 'approved' 
        })
        .populate('parentComment')
        .sort({ createdAt: -1 });

        res.json(comments);
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create comment
app.post('/api/posts/:postId/comments', async (req, res) => {
    try {
        const { content, author, parentCommentId } = req.body;

        if (!content || !author || !author.name || !author.email) {
            return res.status(400).json({ error: 'Content and author information are required' });
        }

        const comment = new Comment({
            content,
            author,
            post: req.params.postId,
            parentComment: parentCommentId || null,
            status: 'pending' // Comments require approval
        });

        await comment.save();

        res.status(201).json({
            message: 'Comment submitted for approval',
            comment
        });
    } catch (error) {
        console.error('Create comment error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all comments for moderation (admin only)
app.get('/api/comments', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { status } = req.query;
        let query = {};
        
        if (status) {
            query.status = status;
        }

        const comments = await Comment.find(query)
            .populate('post', 'title slug')
            .sort({ createdAt: -1 });

        res.json(comments);
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update comment status (admin only)
app.put('/api/comments/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const comment = await Comment.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true }
        ).populate('post', 'title slug');

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.json({
            message: 'Comment updated successfully',
            comment
        });
    } catch (error) {
        console.error('Update comment error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// ANALYTICS ROUTES
// ====================

app.get('/api/analytics', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const totalPosts = await Post.countDocuments();
        const publishedPosts = await Post.countDocuments({ status: 'published' });
        const totalUsers = await User.countDocuments({ isActive: true });
        const totalComments = await Comment.countDocuments();
        const pendingComments = await Comment.countDocuments({ status: 'pending' });

        // Get popular posts
        const popularPosts = await Post.find({ status: 'published' })
            .select('title views createdAt')
            .sort({ views: -1 })
            .limit(5);

        // Get recent activity (simplified)
        const recentPosts = await Post.find()
            .populate('author', 'username')
            .sort({ createdAt: -1 })
            .limit(10);

        res.json({
            stats: {
                totalPosts,
                publishedPosts,
                totalUsers,
                totalComments,
                pendingComments
            },
            popularPosts,
            recentActivity: recentPosts
        });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ====================
// INITIALIZATION ROUTE
// ====================

// Initialize default data
app.post('/api/init', async (req, res) => {
    try {
        // Check if admin user exists
        const adminExists = await User.findOne({ role: 'admin' });
        
        if (!adminExists) {
            // Create default admin user
            const hashedPassword = await bcrypt.hash('admin123', 12);
            const admin = new User({
                username: 'admin',
                email: 'admin@itinsights.com',
                password: hashedPassword,
                role: 'admin',
                firstName: 'Admin',
                lastName: 'User'
            });
            await admin.save();
            console.log('✅ Default admin user created');
        }

        // Check if categories exist
        const categoryCount = await Category.countDocuments();
        
        if (categoryCount === 0) {
            const defaultCategories = [
                {
                    name: 'IT Security',
                    slug: 'it-security',
                    description: 'Cybersecurity threats, protection strategies, and security best practices',
                    color: '#DC2626',
                    icon: '🔒'
                },
                {
                    name: 'Microsoft Updates',
                    slug: 'microsoft-updates',
                    description: 'Latest Microsoft technology updates including Windows, Office 365, Azure',
                    color: '#2563EB',
                    icon: '🏢'
                },
                {
                    name: 'Tech Tips',
                    slug: 'tech-tips',
                    description: 'Practical tutorials, automation scripts, and troubleshooting guides',
                    color: '#059669',
                    icon: '⚡'
                },
                {
                    name: 'Reviews',
                    slug: 'reviews',
                    description: 'In-depth reviews and comparisons of software tools and IT solutions',
                    color: '#7C3AED',
                    icon: '⭐'
                }
            ];

            await Category.insertMany(defaultCategories);
            console.log('✅ Default categories created');
        }

        res.json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error('Initialization error:', error);
        res.status(500).json({ error: 'Initialization failed' });
    }
});

// ====================
// CATCH ALL ROUTE
// ====================

// Serve the frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`🔌 API: http://localhost:${PORT}/api`);
    
    // Initialize default data
    setTimeout(async () => {
        try {
            const response = await fetch(`http://localhost:${PORT}/api/init`, {
                method: 'POST'
            });
            const result = await response.json();
            console.log('📊', result.message);
        } catch (error) {
            console.log('⚠️ Manual initialization may be required');
        }
    }, 2000);
});

module.exports = app;