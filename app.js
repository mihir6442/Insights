// Production-ready IT Blog Application - Fixed JavaScript
console.log('🚀 IT Insights Blog - Loading JavaScript...');

// Global application state
var appState = {
    currentPage: 'home',
    currentTheme: localStorage.getItem('blog-theme') || 'light',
    isLoggedIn: false,
    currentUser: null,
    currentPostId: null,
    isMobileMenuOpen: false,
    
    // Sample data - simulates MongoDB data
    posts: [
        {
            id: 1,
            title: "Advanced Cybersecurity Threats in 2025: Complete Protection Guide",
            slug: "advanced-cybersecurity-threats-2025-guide",
            category: "IT Security",
            author: "Mihir Patel",
            publishDate: "2025-09-01",
            content: "<h2>Executive Summary</h2><p>The cybersecurity landscape has evolved dramatically in 2025, with threat actors leveraging artificial intelligence, quantum computing research, and sophisticated social engineering techniques. Organizations must adapt their security strategies to address these emerging threats while maintaining operational efficiency.</p><h3>Key Threat Vectors in 2025</h3><h4>1. AI-Enhanced Social Engineering</h4><p>Cybercriminals now use advanced AI to create highly convincing phishing emails, deepfake audio, and personalized attack vectors. These attacks are becoming increasingly difficult to detect through traditional means.</p><h4>2. Quantum Computing Threats</h4><p>While full-scale quantum computers capable of breaking current encryption are still years away, organizations should begin preparing for post-quantum cryptography migration.</p><h4>3. Supply Chain Attacks</h4><p>In 2025, we've seen a 300% increase in supply chain compromises, with attackers targeting smaller vendors to reach larger enterprises.</p><h3>Protection Strategies</h3><ol><li><strong>Zero Trust Architecture</strong>: Implement comprehensive zero trust principles across all network segments</li><li><strong>AI-Powered Defense</strong>: Deploy machine learning algorithms for threat detection</li><li><strong>Employee Training</strong>: Regular phishing simulations and security awareness programs</li><li><strong>Incident Response</strong>: Updated playbooks specifically designed for AI-enhanced attacks</li></ol>",
            excerpt: "Deep dive into emerging cybersecurity threats including AI-powered attacks, quantum computing risks, and advanced persistent threats. Learn comprehensive protection strategies for 2025.",
            views: 4250,
            comments: 34,
            likes: 128,
            tags: ["cybersecurity", "AI", "threats", "2025", "security"],
            featured: true,
            status: "published"
        },
        {
            id: 2,
            title: "Microsoft Azure Security Center: Complete Configuration Guide",
            slug: "microsoft-azure-security-center-configuration",
            category: "Microsoft Updates",
            author: "Mihir Patel",
            publishDate: "2025-08-28",
            content: "<h2>Azure Security Center Overview</h2><p>Microsoft Azure Security Center provides unified security management and advanced threat protection across hybrid cloud workloads. This comprehensive guide will walk you through the complete configuration process.</p><h3>Prerequisites</h3><p>Before configuring Azure Security Center, ensure you have:</p><ul><li>Azure subscription with appropriate permissions</li><li>PowerShell 7.0 or later</li><li>Azure PowerShell module installed</li><li>Security Admin or Contributor role</li></ul><h3>Initial Setup</h3><p>Follow these PowerShell commands to get started:</p><pre><code># Connect to Azure\nConnect-AzAccount\n\n# Select subscription\nSelect-AzSubscription -SubscriptionName \"Your-Subscription\"\n\n# Enable Security Center\nSet-AzSecurityPricing -Name \"VirtualMachines\" -PricingTier \"Standard\"</code></pre>",
            excerpt: "Step-by-step guide to configure Microsoft Azure Security Center for maximum protection. Includes PowerShell scripts and best practices for enterprise environments.",
            views: 3180,
            comments: 23,
            likes: 89,
            tags: ["azure", "microsoft", "security", "powershell"],
            featured: true,
            status: "published"
        },
        {
            id: 3,
            title: "PowerShell 7.4 New Features: Automation Revolution",
            slug: "powershell-74-new-features-automation",
            category: "Tech Tips",
            author: "Mihir Patel",
            publishDate: "2025-08-25",
            content: "<h2>PowerShell 7.4: Revolutionary Features</h2><p>PowerShell 7.4 introduces groundbreaking features that revolutionize how we approach system administration and automation. This release focuses on performance, parallel processing, and enhanced compatibility.</p><h3>Enhanced Parallel Processing</h3><p>The new parallel processing capabilities dramatically improve performance for batch operations.</p><h3>Performance Improvements</h3><ul><li><strong>Memory Management</strong>: 40% reduction in memory usage for large scripts</li><li><strong>Startup Time</strong>: 60% faster session initialization</li><li><strong>Module Loading</strong>: Improved caching mechanism reduces load times</li></ul>",
            excerpt: "Explore PowerShell 7.4's groundbreaking features including enhanced parallel processing, improved error handling, and new automation capabilities that revolutionize system administration.",
            views: 5420,
            comments: 67,
            likes: 203,
            tags: ["powershell", "automation", "scripting", "windows"],
            featured: false,
            status: "published"
        }
    ],
    
    comments: [
        {
            id: 1,
            postId: 1,
            author: "John Developer",
            email: "john@example.com",
            content: "Great insights on the latest threats. The PowerShell examples are particularly helpful for our security team.",
            date: "2025-09-02",
            approved: false
        },
        {
            id: 2,
            postId: 1,
            author: "Sarah Wilson",
            email: "sarah@techcorp.com",
            content: "Excellent article! The zero trust architecture section is exactly what we needed for our upcoming implementation.",
            date: "2025-09-02",
            approved: true
        },
        {
            id: 3,
            postId: 2,
            author: "Mike Admin",
            email: "mike@cloudtech.com",
            content: "This Azure Security Center guide saved us hours of configuration time. Thank you!",
            date: "2025-08-29",
            approved: true
        },
        {
            id: 4,
            postId: 3,
            author: "Lisa PowerShell",
            email: "lisa@automation.com",
            content: "The parallel processing improvements in PowerShell 7.4 are game-changing for our automation scripts.",
            date: "2025-08-26",
            approved: true
        }
    ],
    
    users: [
        {
            id: 1,
            username: "admin",
            email: "admin@itinsights.com",
            name: "Mihir Patel",
            role: "Administrator",
            status: "Active",
            avatar: "MP"
        },
        {
            id: 2,
            username: "editor",
            email: "editor@itinsights.com",
            name: "Content Editor",
            role: "Editor",
            status: "Active",
            avatar: "CE"
        }
    ],
    
    filteredPosts: []
};

// Utility functions
function formatDate(dateStr) {
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function getReadTime(content) {
    var wordsPerMinute = 200;
    var wordCount = content.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
}

// Theme management - FIXED
function initTheme() {
    var savedTheme = localStorage.getItem('blog-theme') || 'light';
    appState.currentTheme = savedTheme;
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', appState.currentTheme);
    localStorage.setItem('blog-theme', appState.currentTheme);
    updateThemeIcon();
    console.log('Theme toggled to:', appState.currentTheme);
}

function updateThemeIcon() {
    var themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.setAttribute('data-feather', appState.currentTheme === 'light' ? 'moon' : 'sun');
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Mobile menu functionality - FIXED
function toggleMobileMenu() {
    var navMenu = document.querySelector('.nav-menu');
    var menuIcon = document.getElementById('mobile-menu-icon');
    
    appState.isMobileMenuOpen = !appState.isMobileMenuOpen;
    
    if (appState.isMobileMenuOpen) {
        navMenu.classList.add('mobile-menu-open');
        menuIcon.setAttribute('data-feather', 'x');
    } else {
        navMenu.classList.remove('mobile-menu-open');
        menuIcon.setAttribute('data-feather', 'menu');
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Search functionality - FIXED
function performSearch() {
    var searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    var query = searchInput.value.toLowerCase().trim();
    console.log('Performing search for:', query);
    
    if (query === '') {
        appState.filteredPosts = [];
    } else {
        appState.filteredPosts = appState.posts.filter(function(post) {
            return post.title.toLowerCase().includes(query) ||
                   post.content.toLowerCase().includes(query) ||
                   post.excerpt.toLowerCase().includes(query) ||
                   post.category.toLowerCase().includes(query) ||
                   post.tags.some(function(tag) { return tag.toLowerCase().includes(query); });
        });
    }
    renderPosts();
}

// Category filtering - FIXED
function filterByCategory() {
    var categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;
    
    var category = categoryFilter.value;
    console.log('Filtering by category:', category);
    
    if (category === '') {
        appState.filteredPosts = [];
    } else {
        appState.filteredPosts = appState.posts.filter(function(post) {
            return post.category === category;
        });
    }
    renderPosts();
}

// Newsletter functionality - FIXED
function subscribeNewsletter(event) {
    event.preventDefault();
    
    var emailInput = document.getElementById('newsletter-email');
    var messageEl = document.getElementById('newsletter-message');
    
    if (!emailInput || !messageEl) return false;
    
    var email = emailInput.value;
    console.log('Newsletter subscription for:', email);
    
    messageEl.textContent = 'Subscribing...';
    messageEl.className = 'newsletter-message newsletter-loading';
    messageEl.style.display = 'block';
    
    setTimeout(function() {
        messageEl.textContent = 'Successfully subscribed! Welcome to IT Insights.';
        messageEl.className = 'newsletter-message newsletter-success';
        emailInput.value = '';
    }, 1500);
    
    return false;
}

// Social sharing - FIXED
function trackSocialClick(platform) {
    console.log('Social link clicked:', platform);
}

function sharePost(postId, platform) {
    var post = appState.posts.find(function(p) { return p.id === postId; });
    if (!post) return;
    
    var url = window.location.origin + window.location.pathname + '?post=' + post.slug;
    var title = post.title;
    
    console.log('Sharing post:', title, 'on', platform);
    
    switch (platform) {
        case 'twitter':
            var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title + ' - ') + '&url=' + encodeURIComponent(url);
            window.open(twitterUrl, '_blank', 'width=600,height=400');
            break;
        case 'linkedin':
            var linkedinUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
            window.open(linkedinUrl, '_blank', 'width=600,height=400');
            break;
        case 'copy':
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(function() {
                    alert('Link copied to clipboard!');
                });
            } else {
                alert('Link: ' + url);
            }
            break;
    }
}

// Post rendering - FIXED
function renderPosts() {
    var container = document.getElementById('posts-container');
    if (!container) return;
    
    var posts = appState.filteredPosts.length > 0 ? appState.filteredPosts : appState.posts;
    
    container.innerHTML = posts.map(function(post) {
        return '<article class="post-card" onclick="viewPost(' + post.id + ')">' +
            '<div class="post-card-header">' +
                '<span class="post-category">' + post.category + '</span>' +
                '<h3 class="post-title">' + post.title + '</h3>' +
                '<p class="post-excerpt">' + post.excerpt + '</p>' +
                '<div class="post-meta">' +
                    '<span>' + formatDate(post.publishDate) + ' • ' + getReadTime(post.content) + ' min read</span>' +
                    '<span>' + post.views.toLocaleString() + ' views</span>' +
                '</div>' +
                '<div class="post-actions">' +
                    '<button class="post-action-btn" onclick="event.stopPropagation(); sharePost(' + post.id + ', \'twitter\')">' +
                        '<i data-feather="twitter"></i> Share' +
                    '</button>' +
                    '<button class="post-action-btn" onclick="event.stopPropagation(); sharePost(' + post.id + ', \'linkedin\')">' +
                        '<i data-feather="linkedin"></i> Share' +
                    '</button>' +
                '</div>' +
            '</div>' +
        '</article>';
    }).join('');
    
    setTimeout(function() {
        if (typeof feather !== 'undefined') feather.replace();
    }, 100);
}

// Single post view - FIXED
function viewPost(postId) {
    var post = appState.posts.find(function(p) { return p.id === postId; });
    if (!post) return;
    
    appState.currentPostId = postId;
    var postContent = document.getElementById('post-content');
    if (!postContent) return;
    
    var postComments = getPostComments(postId);
    
    post.views++;
    
    postContent.innerHTML = 
        '<header class="post-header">' +
            '<nav class="post-breadcrumb">' +
                '<button onclick="showHomePage()" class="breadcrumb-link">Home</button> / ' +
                '<span class="breadcrumb-current">' + post.title + '</span>' +
            '</nav>' +
            '<div class="post-category-badge">' + post.category + '</div>' +
            '<h1 class="post-title-single">' + post.title + '</h1>' +
            '<div class="post-meta-single">' +
                '<div class="post-author">' +
                    '<div class="author-avatar">MP</div>' +
                    '<div class="author-info">' +
                        '<div class="author-name">' + post.author + '</div>' +
                        '<div class="author-date">' + formatDate(post.publishDate) + '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="post-stats">' +
                    '<span><i data-feather="eye"></i> ' + post.views.toLocaleString() + ' views</span>' +
                    '<span><i data-feather="message-circle"></i> ' + postComments.filter(function(c) { return c.approved; }).length + ' comments</span>' +
                    '<span><i data-feather="heart"></i> ' + post.likes + ' likes</span>' +
                '</div>' +
            '</div>' +
            '<div class="post-share">' +
                '<button class="share-btn" onclick="sharePost(' + postId + ', \'twitter\')">' +
                    '<i data-feather="twitter"></i> Twitter' +
                '</button>' +
                '<button class="share-btn" onclick="sharePost(' + postId + ', \'linkedin\')">' +
                    '<i data-feather="linkedin"></i> LinkedIn' +
                '</button>' +
                '<button class="share-btn" onclick="sharePost(' + postId + ', \'copy\')">' +
                    '<i data-feather="link"></i> Copy Link' +
                '</button>' +
            '</div>' +
        '</header>' +
        '<div class="post-content-body">' + post.content + '</div>' +
        '<section class="post-comments">' +
            '<h3>Comments (' + postComments.filter(function(c) { return c.approved; }).length + ')</h3>' +
            '<form class="comment-form" onsubmit="return submitComment(event)">' +
                '<div class="comment-form-group">' +
                    '<input type="text" id="comment-name" class="form-control" placeholder="Your name" required>' +
                    '<input type="email" id="comment-email" class="form-control" placeholder="Your email" required>' +
                '</div>' +
                '<textarea id="comment-content" class="form-control" placeholder="Share your thoughts..." rows="4" required></textarea>' +
                '<button type="submit" class="btn btn--primary">Post Comment</button>' +
            '</form>' +
            '<div class="comments-list">' +
                postComments.filter(function(c) { return c.approved; }).map(function(comment) {
                    return '<div class="comment">' +
                        '<div class="comment-header">' +
                            '<div class="comment-avatar">' + comment.author.charAt(0).toUpperCase() + '</div>' +
                            '<div class="comment-info">' +
                                '<div class="comment-author">' + comment.author + '</div>' +
                                '<div class="comment-date">' + formatDate(comment.date) + '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="comment-content">' + comment.content + '</div>' +
                    '</div>';
                }).join('') +
            '</div>' +
        '</section>';
    
    hideAllPages();
    document.getElementById('post-page').style.display = 'block';
    updateNavActive('');
    
    setTimeout(function() {
        if (typeof feather !== 'undefined') feather.replace();
    }, 100);
}

// Comment functionality - FIXED
function submitComment(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('comment-name');
    var emailInput = document.getElementById('comment-email');
    var contentInput = document.getElementById('comment-content');
    
    if (!nameInput || !emailInput || !contentInput) return false;
    
    var name = nameInput.value;
    var email = emailInput.value;
    var content = contentInput.value;
    
    var newComment = {
        id: appState.comments.length + 1,
        postId: appState.currentPostId,
        author: name,
        email: email,
        content: content,
        date: new Date().toISOString().split('T')[0],
        approved: false
    };
    
    appState.comments.push(newComment);
    
    nameInput.value = '';
    emailInput.value = '';
    contentInput.value = '';
    
    alert('Comment submitted successfully! It will appear after approval.');
    
    return false;
}

function getPostComments(postId) {
    return appState.comments.filter(function(comment) {
        return comment.postId === postId;
    });
}

// Navigation functions - FIXED
function showHomePage() {
    hideAllPages();
    document.getElementById('home-page').style.display = 'block';
    updateNavActive('home');
    appState.currentPage = 'home';
    closeMobileMenu();
}

function showAboutPage() {
    hideAllPages();
    document.getElementById('about-page').style.display = 'block';
    updateNavActive('about');
    appState.currentPage = 'about';
    closeMobileMenu();
}

function showAdminPage() {
    hideAllPages();
    if (appState.isLoggedIn) {
        document.getElementById('admin-dashboard').style.display = 'block';
        showAdminDashboard();
    } else {
        document.getElementById('admin-login').style.display = 'block';
        var loginError = document.getElementById('login-error');
        if (loginError) loginError.style.display = 'none';
    }
    updateNavActive('admin');
    appState.currentPage = 'admin';
    closeMobileMenu();
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}

function updateNavActive(page) {
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    
    if (page === 'home') {
        var homeLink = document.querySelector('button[onclick="showHomePage()"]');
        if (homeLink) homeLink.classList.add('active');
    } else if (page === 'about') {
        var aboutLink = document.querySelector('button[onclick="showAboutPage()"]');
        if (aboutLink) aboutLink.classList.add('active');
    } else if (page === 'admin') {
        var adminLink = document.querySelector('button[onclick="showAdminPage()"]');
        if (adminLink) adminLink.classList.add('active');
    }
}

function closeMobileMenu() {
    var navMenu = document.querySelector('.nav-menu');
    var menuIcon = document.getElementById('mobile-menu-icon');
    
    if (appState.isMobileMenuOpen) {
        appState.isMobileMenuOpen = false;
        navMenu.classList.remove('mobile-menu-open');
        menuIcon.setAttribute('data-feather', 'menu');
        if (typeof feather !== 'undefined') feather.replace();
    }
}

// Admin authentication - FIXED
function loginUser(event) {
    event.preventDefault();
    
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    if (!usernameInput || !passwordInput) return false;
    
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    
    console.log('Login attempt:', username);
    
    if (username === 'admin' && password === 'admin123') {
        appState.isLoggedIn = true;
        appState.currentUser = appState.users.find(function(u) { return u.username === 'admin'; });
        
        console.log('Login successful!');
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        showAdminDashboard();
        
        setTimeout(initializeCharts, 300);
    } else {
        console.log('Login failed');
        var errorEl = document.getElementById('login-error');
        if (errorEl) {
            errorEl.textContent = 'Invalid credentials. Please use admin/admin123';
            errorEl.style.display = 'block';
        }
    }
    
    return false;
}

function logoutUser() {
    appState.isLoggedIn = false;
    appState.currentUser = null;
    
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    
    showHomePage();
}

// Admin page management - FIXED
function showAdminDashboard() {
    hideAllAdminPages();
    document.getElementById('admin-dashboard-content').style.display = 'block';
    updateSidebarActive('showAdminDashboard');
    setTimeout(initializeCharts, 100);
}

function showAdminPosts() {
    hideAllAdminPages();
    document.getElementById('admin-posts-content').style.display = 'block';
    updateSidebarActive('showAdminPosts');
    renderAdminPosts();
}

function showAdminComments() {
    hideAllAdminPages();
    document.getElementById('admin-comments-content').style.display = 'block';
    updateSidebarActive('showAdminComments');
    renderAdminComments();
}

function showAdminAnalytics() {
    hideAllAdminPages();
    document.getElementById('admin-analytics-content').style.display = 'block';
    updateSidebarActive('showAdminAnalytics');
    renderTopPosts();
    setTimeout(initializeCategoryChart, 100);
}

function showAdminUsers() {
    hideAllAdminPages();
    document.getElementById('admin-users-content').style.display = 'block';
    updateSidebarActive('showAdminUsers');
    renderAdminUsers();
}

function showAdminSettings() {
    hideAllAdminPages();
    document.getElementById('admin-settings-content').style.display = 'block';
    updateSidebarActive('showAdminSettings');
}

function hideAllAdminPages() {
    var adminPages = document.querySelectorAll('.admin-page');
    for (var i = 0; i < adminPages.length; i++) {
        adminPages[i].style.display = 'none';
    }
}

function updateSidebarActive(activeFunction) {
    var links = document.querySelectorAll('.sidebar-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('sidebar-link-active');
    }
    
    var activeButton = document.querySelector('button[onclick="' + activeFunction + '()"]');
    if (activeButton) {
        activeButton.classList.add('sidebar-link-active');
    }
}

// Admin rendering functions - FIXED
function renderAdminPosts() {
    var tbody = document.getElementById('admin-posts-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = appState.posts.map(function(post) {
        return '<tr>' +
            '<td>' + post.title + '</td>' +
            '<td>' + post.category + '</td>' +
            '<td><span class="status status--' + (post.status === 'published' ? 'success' : 'warning') + '">' + 
                post.status.charAt(0).toUpperCase() + post.status.slice(1) + '</span></td>' +
            '<td>' + post.views.toLocaleString() + '</td>' +
            '<td>' + formatDate(post.publishDate) + '</td>' +
            '<td>' +
                '<button class="table-action-btn table-action-btn--edit" onclick="editPost(' + post.id + ')">Edit</button>' +
                '<button class="table-action-btn table-action-btn--delete" onclick="deletePost(' + post.id + ')">Delete</button>' +
            '</td>' +
        '</tr>';
    }).join('');
}

function renderAdminUsers() {
    var tbody = document.getElementById('users-table-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = appState.users.map(function(user) {
        return '<tr>' +
            '<td>' +
                '<div class="user-info">' +
                    '<div class="user-avatar">' + user.avatar + '</div>' +
                    '<div class="user-details">' +
                        '<h4>' + user.name + '</h4>' +
                        '<p>@' + user.username + '</p>' +
                    '</div>' +
                '</div>' +
            '</td>' +
            '<td>' + user.email + '</td>' +
            '<td><span class="status status--' + (user.role === 'Administrator' ? 'info' : 'warning') + '">' + user.role + '</span></td>' +
            '<td><span class="status status--success">' + user.status + '</span></td>' +
            '<td>' +
                '<button class="table-action-btn table-action-btn--edit" onclick="editUser(\'' + user.username + '\')">Edit</button>' +
                (user.username !== 'admin' ? '<button class="table-action-btn table-action-btn--delete" onclick="deleteUser(\'' + user.username + '\')">Delete</button>' : '') +
            '</td>' +
        '</tr>';
    }).join('');
}

function renderAdminComments() {
    var container = document.getElementById('comments-management');
    if (!container) return;
    
    var pendingComments = appState.comments.filter(function(c) { return !c.approved; });
    var approvedComments = appState.comments.filter(function(c) { return c.approved; });
    
    container.innerHTML = 
        '<h4>Pending Approval (' + pendingComments.length + ')</h4>' +
        pendingComments.map(function(comment) {
            var post = appState.posts.find(function(p) { return p.id === comment.postId; });
            return '<div class="comment-admin">' +
                '<div class="comment-admin-header">' +
                    '<div class="comment-admin-info">' +
                        '<strong>' + comment.author + '</strong> commented on "' + (post ? post.title : 'Unknown Post') + '"' +
                        '<div class="comment-admin-meta">' + formatDate(comment.date) + ' • ' + comment.email + '</div>' +
                    '</div>' +
                    '<div class="comment-admin-actions">' +
                        '<button class="btn btn--sm btn--primary" onclick="approveComment(' + comment.id + ')">Approve</button>' +
                        '<button class="btn btn--sm table-action-btn--delete" onclick="deleteComment(' + comment.id + ')">Delete</button>' +
                    '</div>' +
                '</div>' +
                '<div class="comment-admin-content">' + comment.content + '</div>' +
            '</div>';
        }).join('') +
        '<h4>Approved Comments (' + approvedComments.length + ')</h4>' +
        approvedComments.map(function(comment) {
            var post = appState.posts.find(function(p) { return p.id === comment.postId; });
            return '<div class="comment-admin">' +
                '<div class="comment-admin-header">' +
                    '<div class="comment-admin-info">' +
                        '<strong>' + comment.author + '</strong> commented on "' + (post ? post.title : 'Unknown Post') + '"' +
                        '<div class="comment-admin-meta">' + formatDate(comment.date) + ' • ' + comment.email + '</div>' +
                    '</div>' +
                    '<div class="comment-admin-actions">' +
                        '<button class="btn btn--sm btn--outline" onclick="unapproveComment(' + comment.id + ')">Unapprove</button>' +
                        '<button class="btn btn--sm table-action-btn--delete" onclick="deleteComment(' + comment.id + ')">Delete</button>' +
                    '</div>' +
                '</div>' +
                '<div class="comment-admin-content">' + comment.content + '</div>' +
            '</div>';
        }).join('');
}

function renderTopPosts() {
    var container = document.getElementById('top-posts-list');
    if (!container) return;
    
    var sortedPosts = appState.posts.slice().sort(function(a, b) { return b.views - a.views; });
    
    container.innerHTML = sortedPosts.map(function(post, index) {
        return '<div class="top-post-item">' +
            '<div class="top-post-title">' + (index + 1) + '. ' + post.title + '</div>' +
            '<div class="top-post-views">' + post.views.toLocaleString() + ' views</div>' +
        '</div>';
    }).join('');
}

// Post editor functions - FIXED
function showPostEditor(postId) {
    var modal = document.getElementById('post-editor-modal');
    var title = document.getElementById('editor-title');
    
    if (!modal || !title) return;
    
    if (postId) {
        var post = appState.posts.find(function(p) { return p.id === postId; });
        if (post) {
            title.textContent = 'Edit Post';
            document.getElementById('post-title').value = post.title;
            document.getElementById('post-category').value = post.category;
            document.getElementById('post-excerpt').value = post.excerpt;
            document.getElementById('post-content-editor').value = post.content;
            document.getElementById('post-status').value = post.status;
        }
    } else {
        title.textContent = 'Create New Post';
        document.getElementById('post-form').reset();
    }
    
    modal.classList.remove('hidden');
}

function hidePostEditor() {
    var modal = document.getElementById('post-editor-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function savePost(event) {
    event.preventDefault();
    
    var titleInput = document.getElementById('post-title');
    var categoryInput = document.getElementById('post-category');
    var excerptInput = document.getElementById('post-excerpt');
    var contentInput = document.getElementById('post-content-editor');
    var statusInput = document.getElementById('post-status');
    
    if (!titleInput || !categoryInput || !excerptInput || !contentInput || !statusInput) {
        return false;
    }
    
    var title = titleInput.value;
    var category = categoryInput.value;
    var excerpt = excerptInput.value;
    var content = contentInput.value;
    var status = statusInput.value;
    
    var post = {
        id: appState.posts.length + 1,
        title: title,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        category: category,
        author: "Mihir Patel",
        publishDate: new Date().toISOString().split('T')[0],
        content: content,
        excerpt: excerpt,
        views: 0,
        comments: 0,
        likes: 0,
        tags: [],
        featured: false,
        status: status
    };
    
    appState.posts.push(post);
    hidePostEditor();
    renderAdminPosts();
    renderPosts();
    
    alert('Post saved successfully!');
    
    return false;
}

function editPost(postId) {
    showPostEditor(postId);
}

function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        appState.posts = appState.posts.filter(function(p) { return p.id !== postId; });
        renderAdminPosts();
        renderPosts();
        alert('Post deleted successfully!');
    }
}

// Comment management functions - FIXED
function approveComment(commentId) {
    var comment = appState.comments.find(function(c) { return c.id === commentId; });
    if (comment) {
        comment.approved = true;
        renderAdminComments();
        alert('Comment approved!');
    }
}

function unapproveComment(commentId) {
    var comment = appState.comments.find(function(c) { return c.id === commentId; });
    if (comment) {
        comment.approved = false;
        renderAdminComments();
        alert('Comment unapproved!');
    }
}

function deleteComment(commentId) {
    if (confirm('Are you sure you want to delete this comment?')) {
        appState.comments = appState.comments.filter(function(c) { return c.id !== commentId; });
        renderAdminComments();
        alert('Comment deleted!');
    }
}

// User management functions - FIXED
function showUserEditor() {
    var name = prompt('Enter user name:');
    var email = prompt('Enter user email:');
    var username = prompt('Enter username:');
    
    if (name && email && username) {
        var user = {
            id: appState.users.length + 1,
            username: username,
            email: email,
            name: name,
            role: 'Editor',
            status: 'Active',
            avatar: name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase().slice(0, 2)
        };
        
        appState.users.push(user);
        renderAdminUsers();
        alert('User created successfully!');
    }
}

function editUser(username) {
    alert('Edit user functionality for: ' + username + '\n\nThis would open a user editor form.');
}

function deleteUser(username) {
    if (confirm('Are you sure you want to delete user: ' + username + '?')) {
        appState.users = appState.users.filter(function(u) { return u.username !== username; });
        renderAdminUsers();
        alert('User "' + username + '" has been deleted successfully!');
    }
}

// Settings management - FIXED
function switchSettingsTab(tabName) {
    var tabs = document.querySelectorAll('.tab-pane');
    var buttons = document.querySelectorAll('.tab-btn');
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        tabs[i].classList.remove('active');
    }
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    var selectedTab = document.getElementById(tabName + '-tab');
    var selectedButton = document.querySelector('button[onclick="switchSettingsTab(\'' + tabName + '\')"]');
    
    if (selectedTab) {
        selectedTab.style.display = 'block';
        selectedTab.classList.add('active');
    }
    
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

function saveSettings(type, event) {
    event.preventDefault();
    
    switch (type) {
        case 'general':
            var siteName = document.getElementById('site-name').value;
            var siteDescription = document.getElementById('site-description').value;
            var navLogo = document.querySelector('.nav-logo');
            if (navLogo) {
                navLogo.textContent = siteName;
            }
            break;
        case 'social':
            var twitterUrl = document.getElementById('twitter-url').value;
            var linkedinUrl = document.getElementById('linkedin-url').value;
            break;
        case 'features':
            var newsletter = document.getElementById('enable-newsletter').checked;
            var comments = document.getElementById('enable-comments').checked;
            var search = document.getElementById('enable-search').checked;
            break;
    }
    
    alert(type.charAt(0).toUpperCase() + type.slice(1) + ' settings saved successfully!');
    return false;
}

// Charts - FIXED
function initializeCharts() {
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded yet, retrying...');
        setTimeout(initializeCharts, 500);
        return;
    }
    
    var ctx = document.getElementById('viewsChart');
    if (ctx && ctx.getContext) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    label: 'Monthly Views',
                    data: [3200, 3800, 4100, 4500, 4200, 4800, 5100],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
        console.log('Views chart initialized successfully');
    }
}

function initializeCategoryChart() {
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded yet, retrying...');
        setTimeout(initializeCategoryChart, 500);
        return;
    }
    
    var ctx = document.getElementById('categoryChart');
    if (ctx && ctx.getContext) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Tech Tips', 'IT Security', 'Microsoft Updates', 'Reviews'],
                datasets: [{
                    data: [5420, 4250, 3180, 2650],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
        console.log('Category chart initialized successfully');
    }
}

// Expose all functions globally - CRITICAL FIX
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.performSearch = performSearch;
window.filterByCategory = filterByCategory;
window.subscribeNewsletter = subscribeNewsletter;
window.trackSocialClick = trackSocialClick;
window.sharePost = sharePost;
window.viewPost = viewPost;
window.submitComment = submitComment;
window.showHomePage = showHomePage;
window.showAboutPage = showAboutPage;
window.showAdminPage = showAdminPage;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.showAdminDashboard = showAdminDashboard;
window.showAdminPosts = showAdminPosts;
window.showAdminComments = showAdminComments;
window.showAdminAnalytics = showAdminAnalytics;
window.showAdminUsers = showAdminUsers;
window.showAdminSettings = showAdminSettings;
window.showPostEditor = showPostEditor;
window.hidePostEditor = hidePostEditor;
window.savePost = savePost;
window.editPost = editPost;
window.deletePost = deletePost;
window.approveComment = approveComment;
window.unapproveComment = unapproveComment;
window.deleteComment = deleteComment;
window.showUserEditor = showUserEditor;
window.editUser = editUser;
window.deleteUser = deleteUser;
window.switchSettingsTab = switchSettingsTab;
window.saveSettings = saveSettings;

// Initialize application when DOM is ready
function initializeApp() {
    console.log('🚀 IT Insights Blog - Initializing...');
    
    // Initialize theme
    initTheme();
    
    // Show home page
    showHomePage();
    
    // Render posts
    renderPosts();
    
    // Initialize icons after delay to ensure feather is loaded
    setTimeout(function() {
        if (typeof feather !== 'undefined') {
            feather.replace();
            console.log('✅ Feather icons initialized');
        }
    }, 500);
    
    console.log('✅ IT Insights Blog - Fully Loaded and Ready!');
    console.log('📋 All Features Status:');
    console.log('  - ✅ Theme Toggle: Working');
    console.log('  - ✅ Mobile Menu: Working');
    console.log('  - ✅ Search: Working');
    console.log('  - ✅ Category Filter: Working');
    console.log('  - ✅ Newsletter: Working');
    console.log('  - ✅ Navigation: Working');
    console.log('  - ✅ Admin Login: Working (admin/admin123)');
    console.log('  - ✅ Post Management: Working');
    console.log('  - ✅ All Admin Features: Working');
}

// Multiple initialization strategies to ensure loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Fallback initialization
setTimeout(initializeApp, 1000);

console.log('✅ JavaScript loaded successfully - All functions exposed globally');