// Application Data with enhanced structure
const appData = {
  samplePosts: [
    {
      id: 1,
      title: "Advanced Cybersecurity Threats in 2025: Complete Protection Guide",
      slug: "advanced-cybersecurity-threats-2025-guide",
      category: "IT Security",
      author: "Mihir Patel",
      publishDate: "2025-09-01",
      readTime: "12 min read",
      featured: true,
      status: "published",
      views: 4250,
      likes: 128,
      comments: 34,
      excerpt: "Deep dive into emerging cybersecurity threats including AI-powered attacks, quantum computing risks, and advanced persistent threats.",
      content: `<h2>The Current Threat Landscape</h2>
      <p>The cybersecurity landscape continues to evolve at an unprecedented pace, with threat actors developing increasingly sophisticated attack methods. In 2025, we're seeing a surge in AI-powered attacks, supply chain compromises, and state-sponsored campaigns targeting critical infrastructure.</p>
      
      <h3>Key Threat Vectors</h3>
      <ul>
        <li><strong>APT28 Advanced Persistent Threats:</strong> Russian state-sponsored group targeting government and enterprise networks</li>
        <li><strong>Ransomware-as-a-Service:</strong> Commercialized ransomware operations with affiliate programs</li>
        <li><strong>Supply Chain Attacks:</strong> Compromising software vendors to reach multiple targets</li>
        <li><strong>AI-Enhanced Social Engineering:</strong> Using deepfakes and AI-generated content for phishing</li>
      </ul>
      
      <h3>PowerShell Detection Script</h3>
      <p>Use this PowerShell script to detect suspicious processes on your systems:</p>
      <pre><code class="language-powershell"># PowerShell script to check for suspicious processes
Get-Process | Where-Object {$_.ProcessName -like '*suspicious*'} | 
ForEach-Object {
    Write-Host "Suspicious process found: $($_.ProcessName) - PID: $($_.Id)" -ForegroundColor Red
    # Optional: Kill suspicious processes
    # Stop-Process -Id $_.Id -Force
}</code></pre>
      
      <h3>Mitigation Strategies</h3>
      <p>Implementing a comprehensive security strategy requires multiple layers of defense:</p>
      <ol>
        <li>Deploy advanced endpoint detection and response (EDR) solutions</li>
        <li>Implement zero-trust network architecture</li>
        <li>Regular security awareness training for employees</li>
        <li>Maintain updated threat intelligence feeds</li>
        <li>Conduct regular penetration testing and vulnerability assessments</li>
      </ol>`,
      tags: ["security", "threats", "cybersecurity", "ransomware", "APT"]
    },
    {
      id: 2,
      title: "Microsoft Azure Security Center: Complete Configuration Guide",
      slug: "microsoft-azure-security-center-configuration",
      category: "Microsoft Updates",
      author: "Mihir Patel",
      publishDate: "2025-08-28",
      readTime: "8 min read",
      featured: true,
      status: "published",
      views: 3180,
      likes: 89,
      comments: 23,
      excerpt: "Step-by-step guide to configure Microsoft Azure Security Center for maximum protection.",
      content: `<h2>Azure Security Enhancements</h2>
      <p>Microsoft has rolled out significant security enhancements to Azure, focusing on enterprise-grade protection and compliance. These updates strengthen the platform's position as a secure cloud infrastructure provider.</p>
      
      <h3>New Security Features</h3>
      <ul>
        <li>Enhanced Azure Sentinel SIEM capabilities</li>
        <li>Advanced threat protection for hybrid environments</li>
        <li>Zero-trust networking with Azure Network Security</li>
        <li>Improved compliance reporting and automation</li>
      </ul>
      
      <h3>Implementation Guide</h3>
      <p>To implement these new security features:</p>
      <ol>
        <li>Enable Azure Defender for all resources</li>
        <li>Configure Conditional Access policies</li>
        <li>Set up Azure Sentinel workspaces</li>
        <li>Deploy network security groups</li>
      </ol>`,
      tags: ["azure", "microsoft", "cloud", "security", "enterprise"]
    },
    {
      id: 3,
      title: "Essential PowerShell Commands Every IT Admin Should Master",
      slug: "essential-powershell-commands",
      category: "Tech Tips",
      author: "Mihir Patel",
      publishDate: "2025-08-25",
      readTime: "10 min read",
      featured: false,
      status: "published",
      views: 2845,
      likes: 95,
      comments: 18,
      excerpt: "Master these essential PowerShell commands to streamline your system administration tasks and improve productivity.",
      content: `<h2>PowerShell Fundamentals</h2>
      <p>PowerShell has become an indispensable tool for system administrators and IT professionals. This comprehensive guide covers the essential commands you need to master for effective system management.</p>
      
      <h3>System Information Commands</h3>
      <pre><code class="language-powershell"># Get system information
Get-ComputerInfo
Get-WmiObject -Class Win32_OperatingSystem
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10</code></pre>
      
      <h3>User and Group Management</h3>
      <pre><code class="language-powershell"># User management
Get-LocalUser
New-LocalUser -Name "TestUser" -Password (ConvertTo-SecureString "Password123!" -AsPlainText -Force)
Add-LocalGroupMember -Group "Administrators" -Member "TestUser"</code></pre>
      
      <h3>File System Operations</h3>
      <pre><code class="language-powershell"># File and folder operations
Get-ChildItem -Path C:\ -Recurse -File | Where-Object {$_.Length -gt 1GB}
Copy-Item -Path "C:\Source" -Destination "C:\Backup" -Recurse
Remove-Item -Path "C:\TempFiles\*" -Recurse -Force</code></pre>`,
      tags: ["powershell", "automation", "administration", "windows", "scripting"]
    },
    {
      id: 4,
      title: "Top 5 Network Monitoring Tools for Enterprise IT in 2025",
      slug: "network-monitoring-tools-review-2025",
      category: "Reviews",
      author: "Mihir Patel",
      publishDate: "2025-08-22",
      readTime: "15 min read",
      featured: false,
      status: "published",
      views: 2156,
      likes: 78,
      comments: 19,
      excerpt: "Comprehensive review of the best network monitoring tools available in 2025, comparing features, pricing, and performance.",
      content: `<h2>Network Monitoring Tool Comparison</h2>
      <p>Network monitoring is crucial for maintaining optimal performance and security in modern IT environments. Here's our comprehensive review of the top 5 tools for 2025.</p>
      
      <h3>1. SolarWinds Network Performance Monitor</h3>
      <p>Enterprise-grade solution with comprehensive monitoring capabilities. Offers real-time network performance metrics and advanced alerting.</p>
      <ul>
        <li><strong>Pros:</strong> Comprehensive feature set, excellent reporting, scalable</li>
        <li><strong>Cons:</strong> High cost, complex setup</li>
        <li><strong>Price:</strong> Starting at $1,638 per year</li>
      </ul>
      
      <h3>2. PRTG Network Monitor</h3>
      <p>User-friendly monitoring solution with over 200 sensor types for comprehensive infrastructure monitoring.</p>
      <ul>
        <li><strong>Pros:</strong> Easy setup, intuitive interface, good value</li>
        <li><strong>Cons:</strong> Limited customization options</li>
        <li><strong>Price:</strong> Starting at $1,750 per year</li>
      </ul>`,
      tags: ["reviews", "monitoring", "networking", "tools", "infrastructure"]
    },
    {
      id: 5,
      title: "Building Secure APIs with JWT Authentication",
      slug: "secure-apis-jwt-authentication",
      category: "Tech Tips",
      author: "Mihir Patel",
      publishDate: "2025-08-20",
      readTime: "10 min read",
      featured: false,
      status: "draft",
      views: 0,
      likes: 0,
      comments: 0,
      excerpt: "Learn how to implement secure API authentication using JSON Web Tokens with practical code examples and best practices.",
      content: `<h2>JWT Authentication Implementation</h2>
      <p>API security is paramount in modern web applications. JSON Web Tokens provide a robust solution for stateless authentication.</p>
      
      <h3>JWT Structure</h3>
      <p>A JWT consists of three parts: Header, Payload, and Signature.</p>
      
      <pre><code class="language-javascript">// Example JWT implementation
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}</code></pre>`,
      tags: ["api", "jwt", "authentication", "security", "development"]
    }
  ],
  
  categories: [
    { id: 1, name: "IT Security", slug: "it-security", description: "Cybersecurity threats, protection strategies, and security best practices", postCount: 58, color: "#dc2626", icon: "🔒" },
    { id: 2, name: "Microsoft Updates", slug: "microsoft-updates", description: "Latest Microsoft technology updates including Windows, Office 365, Azure", postCount: 42, color: "#2563eb", icon: "🏢" },
    { id: 3, name: "Tech Tips", slug: "tech-tips", description: "Practical tutorials, automation scripts, and troubleshooting guides", postCount: 89, color: "#059669", icon: "⚡" },
    { id: 4, name: "Reviews", slug: "reviews", description: "In-depth reviews and comparisons of software tools and IT solutions", postCount: 36, color: "#7c3aed", icon: "⭐" }
  ],
  
  users: [
    {
      id: 1,
      username: "admin",
      email: "admin@patelmihir.com",
      password: "admin123",
      role: "administrator",
      name: "Mihir Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      lastLogin: "2025-09-05T02:30:00Z",
      postsCreated: 156,
      status: "active"
    },
    {
      id: 2,
      username: "editor",
      email: "editor@patelmihir.com", 
      password: "editor123",
      role: "editor",
      name: "Content Editor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      lastLogin: "2025-09-03T11:20:00Z",
      postsCreated: 23,
      status: "active"
    },
    {
      id: 3,
      username: "author",
      email: "author@patelmihir.com",
      password: "author123", 
      role: "author",
      name: "Guest Author",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      lastLogin: "2025-09-02T16:45:00Z",
      postsCreated: 12,
      status: "active"
    }
  ],
  
  comments: [
    {
      id: 1,
      postId: 1,
      postTitle: "Advanced Cybersecurity Threats in 2025",
      author: "John Developer",
      email: "john@example.com",
      content: "Great insights on the latest threats. The PowerShell examples are particularly helpful for our security team.",
      timestamp: "2025-09-02T10:30:00Z",
      status: "approved"
    },
    {
      id: 2,
      postId: 3,
      postTitle: "Essential PowerShell Commands",
      author: "Sarah Admin",
      email: "sarah@techcorp.com",
      content: "This PowerShell guide is exactly what our junior admins needed. Bookmarking for training purposes!",
      timestamp: "2025-08-26T09:45:00Z",
      status: "approved"
    },
    {
      id: 3,
      postId: 1,
      postTitle: "Advanced Cybersecurity Threats in 2025",
      author: "Mike Security",
      email: "mike@security.com",
      content: "Excellent analysis. We've implemented several of these recommendations in our organization.",
      timestamp: "2025-09-01T15:20:00Z",
      status: "pending"
    },
    {
      id: 4,
      postId: 4,
      postTitle: "Network Monitoring Tools Review",
      author: "Lisa NetOps",
      email: "lisa@netops.com",
      content: "Have you considered reviewing SolarWinds in your next update? We're evaluating it for our infrastructure.",
      timestamp: "2025-08-24T11:15:00Z",
      status: "approved"
    }
  ],
  
  analyticsData: {
    totalViews: 127890,
    totalPosts: 249, 
    totalComments: 892,
    totalSubscribers: 3247,
    monthlyViews: [8200, 9100, 10400, 11800, 12300, 13900, 15100],
    monthlyLabels: ["March", "April", "May", "June", "July", "August", "September"],
    topPosts: [
      { title: "Advanced Cybersecurity Threats in 2025", views: 4250, id: 1 },
      { title: "Microsoft Azure Security Center Guide", views: 3180, id: 2 },
      { title: "Essential PowerShell Commands", views: 2845, id: 3 }
    ],
    categoryStats: [
      { category: "Tech Tips", posts: 89, views: 15234, color: "#059669" },
      { category: "IT Security", posts: 58, views: 12876, color: "#dc2626" },
      { category: "Microsoft Updates", posts: 42, views: 8932, color: "#2563eb" },
      { category: "Reviews", posts: 36, views: 8636, color: "#7c3aed" }
    ],
    recentActivity: [
      { type: "comment", message: "New comment on 'Cybersecurity Threats 2025'", time: "2 hours ago", user: "John Developer" },
      { type: "post", message: "New post published: 'Azure Security Updates'", time: "4 hours ago", user: "Mihir Patel" },
      { type: "user", message: "New user registered: sarah@techcorp.com", time: "6 hours ago", user: "System" },
      { type: "comment", message: "Comment approved on 'PowerShell Commands'", time: "8 hours ago", user: "Admin" }
    ]
  }
};

// Application State
let currentPage = 'home';
let currentPost = null;
let currentUser = null;
let isAdminLoggedIn = false;
let currentTheme = 'light';
let searchResults = [];
let currentFilter = 'all';
let charts = {};
let searchTimeout = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing IT Insights Blog');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing application...');
  
  // Load theme from storage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon();
  
  // Initialize Feather icons first
  if (typeof feather !== 'undefined') {
    feather.replace();
    console.log('Feather icons initialized');
  }
  
  // Bind all event listeners
  bindEventListeners();
  
  // Load initial content
  showPage('home');
  loadHomePage();
  
  // Initialize syntax highlighting
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
    console.log('Syntax highlighting initialized');
  }
  
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      console.log('Loading screen hidden');
    }
  }, 1000);
  
  console.log('Application initialized successfully');
}

function bindEventListeners() {
  console.log('Binding event listeners...');
  
  // Navigation click handlers - FIXED to work properly
  document.addEventListener('click', function(e) {
    // Prevent default for all navigation links
    const navLink = e.target.closest('[data-page]');
    if (navLink) {
      e.preventDefault();
      e.stopPropagation();
      
      const page = navLink.getAttribute('data-page');
      console.log('Navigation clicked:', page);
      
      if (page === 'admin') {
        handleAdminNavigation();
      } else {
        showPage(page);
        if (page === 'home') {
          loadHomePage();
        }
      }
      
      updateActiveNavLink(page);
      closeMobileNav();
      return;
    }
    
    // Handle category links
    const categoryLink = e.target.closest('[data-category]');
    if (categoryLink) {
      e.preventDefault();
      e.stopPropagation();
      
      const category = categoryLink.getAttribute('data-category');
      console.log('Category link clicked:', category);
      filterByCategory(category);
      closeMobileNav();
      return;
    }
    
    // Handle post cards - FIXED to avoid conflicts
    const postCard = e.target.closest('.post-card');
    if (postCard && !e.target.closest('button') && !e.target.closest('a')) {
      e.preventDefault();
      e.stopPropagation();
      
      const postId = postCard.dataset.postId;
      if (postId) {
        console.log('Post card clicked, navigating to post:', postId);
        navigateToPost(parseInt(postId));
      }
      return;
    }
    
    // Handle search results
    const searchResult = e.target.closest('.search-result');
    if (searchResult) {
      e.preventDefault();
      e.stopPropagation();
      
      const postId = searchResult.dataset.postId;
      if (postId) {
        navigateToPost(parseInt(postId));
        hideSearchResults();
      }
      return;
    }
    
    // Handle admin sidebar navigation
    const adminLink = e.target.closest('[data-admin-page]');
    if (adminLink) {
      e.preventDefault();
      e.stopPropagation();
      
      const adminPage = adminLink.getAttribute('data-admin-page');
      navigateToAdminPage(adminPage);
      return;
    }
    
    // Handle settings tab navigation
    if (e.target.classList.contains('tab-btn')) {
      e.preventDefault();
      const tab = e.target.getAttribute('data-tab');
      if (tab) {
        switchTab(tab);
      }
      return;
    }
    
    // Handle filter buttons - FIXED
    if (e.target.classList.contains('filter-btn')) {
      e.preventDefault();
      e.stopPropagation();
      
      const filter = e.target.getAttribute('data-filter');
      if (filter) {
        console.log('Filter button clicked:', filter);
        setActiveFilter(filter);
      }
      return;
    }
    
    // Handle modal closing when clicking outside
    if (e.target.classList.contains('modal')) {
      closeModal();
      return;
    }
    
    // Close search results when clicking outside
    if (!e.target.closest('.search-wrapper')) {
      hideSearchResults();
    }
  });
  
  // Theme toggle - FIXED
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Theme toggle clicked');
      toggleTheme();
    });
  }
  
  // Enhanced search functionality - FIXED
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    console.log('Search input found, binding enhanced search events');
    
    // Prevent the search input from triggering post navigation
    searchInput.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', function(e) {
      e.stopPropagation();
      if (this.value.trim().length >= 2) {
        showSearchResults();
      }
    });
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const firstResult = document.querySelector('.search-result');
        if (firstResult) {
          const postId = firstResult.dataset.postId;
          if (postId) {
            navigateToPost(parseInt(postId));
            hideSearchResults();
          }
        }
      }
      if (e.key === 'Escape') {
        hideSearchResults();
        this.blur();
      }
    });
  }
  
  // Mobile navigation
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileNav();
    });
  }
  
  // Newsletter form - FIXED to prevent conflicts
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent triggering post navigation
    });
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Also fix the email input
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  }
  
  // Admin login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleAdminLogin);
    
    // Prevent form inputs from triggering navigation
    const formInputs = loginForm.querySelectorAll('input');
    formInputs.forEach(input => {
      input.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });
  }
  
  // Admin logout
  const adminLogout = document.getElementById('admin-logout');
  if (adminLogout) {
    adminLogout.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      handleAdminLogout();
    });
  }
  
  // New post button
  const newPostBtn = document.getElementById('new-post-btn');
  if (newPostBtn) {
    newPostBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openPostEditor();
    });
  }
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  });
  
  // Post editor form
  const postEditorForm = document.getElementById('post-editor-form');
  if (postEditorForm) {
    postEditorForm.addEventListener('submit', handlePostSubmit);
    postEditorForm.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Comment form
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', handleCommentSubmit);
    commentForm.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Settings forms
  const settingsForms = ['general-settings-form', 'social-settings-form', 'features-settings-form'];
  settingsForms.forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', handleSettingsSubmit);
      form.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Escape key functionality
    if (e.key === 'Escape') {
      closeModal();
      hideSearchResults();
    }
    
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
  
  console.log('Event listeners bound successfully');
}

// Enhanced Search Functions - FIXED
function handleSearchInput(e) {
  const query = e.target.value.trim();
  
  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  
  // Debounce search
  searchTimeout = setTimeout(() => {
    if (query.length >= 2) {
      performSearch(query);
    } else {
      hideSearchResults();
    }
  }, 300);
}

function performSearch(query) {
  console.log('Performing search for:', query);
  
  const lowercaseQuery = query.toLowerCase();
  searchResults = appData.samplePosts.filter(post => 
    post.status === 'published' && (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery)
    )
  );
  
  console.log('Search results found:', searchResults.length);
  displaySearchResults(query);
}

function displaySearchResults(query) {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;
  
  if (searchResults.length === 0) {
    resultsContainer.innerHTML = '<div class="search-result"><p>No results found. Try different keywords.</p></div>';
  } else {
    resultsContainer.innerHTML = searchResults.slice(0, 5).map(post => `
      <div class="search-result" data-post-id="${post.id}">
        <h4>${highlightSearchTerm(post.title, query)}</h4>
        <p>${highlightSearchTerm(truncateText(post.excerpt, 100), query)}</p>
        <div class="search-result-meta">${post.category} • ${formatDate(post.publishDate)} • ${post.readTime}</div>
      </div>
    `).join('');
  }
  
  showSearchResults();
}

function highlightSearchTerm(text, query) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background-color: #FFC185; padding: 1px 2px; border-radius: 2px;">$1</mark>');
}

function showSearchResults() {
  const resultsContainer = document.getElementById('search-results');
  if (resultsContainer) {
    resultsContainer.classList.add('show');
  }
}

function hideSearchResults() {
  const resultsContainer = document.getElementById('search-results');
  if (resultsContainer) {
    resultsContainer.classList.remove('show');
  }
}

// Navigation Functions - FIXED
function showPage(pageId) {
  console.log('Showing page:', pageId);
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('page-active');
  });
  
  // Show the requested page
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('page-active');
    currentPage = pageId;
    console.log('Page shown successfully:', pageId);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    console.error('Page not found:', pageId);
  }
}

function updateActiveNavLink(pageId) {
  // Update navigation active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const navLink = document.querySelector(`[data-page="${pageId}"]`);
  if (navLink) {
    navLink.classList.add('active');
  }
}

function handleAdminNavigation() {
  console.log('Handling admin navigation, isLoggedIn:', isAdminLoggedIn);
  
  updateActiveNavLink('admin');
  
  if (isAdminLoggedIn) {
    console.log('Admin logged in, showing dashboard');
    showPage('admin-dashboard');
    setTimeout(() => loadAdminDashboard(), 100);
  } else {
    console.log('Admin not logged in, showing login');
    showPage('admin-login');
    // Clear any previous login errors
    const errorEl = document.getElementById('login-error');
    if (errorEl) {
      errorEl.classList.add('hidden');
    }
  }
}

function navigateToPost(postId) {
  console.log('Navigating to post:', postId);
  
  const post = appData.samplePosts.find(p => p.id === postId);
  if (!post) {
    console.error('Post not found:', postId);
    showToast('Post not found', 'error');
    return;
  }
  
  currentPost = post;
  showPage('post');
  loadPostPage(post);
  
  // Clear navigation active states for post pages
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
}

function navigateToAdminPage(adminPage) {
  console.log('Navigating to admin page:', adminPage);
  
  if (!isAdminLoggedIn) {
    handleAdminNavigation();
    return;
  }
  
  // Hide all admin pages
  document.querySelectorAll('.admin-page').forEach(p => {
    p.classList.remove('admin-page-active');
  });
  
  // Update sidebar active state
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('sidebar-link-active');
  });
  
  const sidebarLink = document.querySelector(`[data-admin-page="${adminPage}"]`);
  if (sidebarLink) {
    sidebarLink.classList.add('sidebar-link-active');
  }
  
  // Show selected admin page
  const adminPageEl = document.getElementById(`admin-${adminPage}-page`);
  if (adminPageEl) {
    adminPageEl.classList.add('admin-page-active');
  }
  
  // Load page-specific content
  setTimeout(() => {
    switch(adminPage) {
      case 'dashboard':
        loadAdminDashboard();
        break;
      case 'posts':
        loadPostsManagement();
        break;
      case 'comments':
        loadCommentsManagement();
        break;
      case 'analytics':
        loadAnalytics();
        break;
      case 'users':
        loadUsersManagement();
        break;
      case 'settings':
        // Settings page is static, no loading needed
        break;
    }
  }, 100);
}

// Content Loading Functions
function loadHomePage() {
  console.log('Loading home page content');
  loadFeaturedPosts();
  loadLatestPosts();
}

function loadFeaturedPosts() {
  const featuredPosts = appData.samplePosts.filter(post => post.featured && post.status === 'published');
  const container = document.getElementById('featured-posts');
  
  if (!container) {
    console.error('Featured posts container not found');
    return;
  }
  
  container.innerHTML = featuredPosts.map(post => createPostCard(post, true)).join('');
  console.log('Featured posts loaded:', featuredPosts.length);
}

function loadLatestPosts() {
  const publishedPosts = appData.samplePosts.filter(post => post.status === 'published');
  const filteredPosts = currentFilter === 'all' 
    ? publishedPosts 
    : publishedPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === currentFilter);
  
  const container = document.getElementById('posts-grid');
  if (!container) {
    console.error('Posts grid container not found');
    return;
  }
  
  container.innerHTML = filteredPosts.map(post => createPostCard(post)).join('');
  console.log('Latest posts loaded:', filteredPosts.length, 'with filter:', currentFilter);
}

function createPostCard(post, featured = false) {
  return `
    <article class="post-card ${featured ? 'featured' : ''}" data-post-id="${post.id}">
      <div class="post-card-header">
        <span class="post-category">${post.category}</span>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-meta">
          <div class="post-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${formatDate(post.publishDate)} • ${post.readTime}
          </div>
          <div class="post-stats">
            <div class="post-stat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              ${post.views.toLocaleString()}
            </div>
            <div class="post-stat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              ${post.comments}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function loadPostPage(post) {
  const container = document.getElementById('post-content');
  if (!container) {
    console.error('Post content container not found');
    return;
  }
  
  container.innerHTML = `
    <header class="article-header">
      <div class="post-category">${post.category}</div>
      <h1 class="article-title">${post.title}</h1>
      <div class="article-meta">
        <span>By ${post.author}</span>
        <span>•</span>
        <span>${formatDate(post.publishDate)}</span>
        <span>•</span>
        <span>${post.readTime}</span>
        <span>•</span>
        <span>${post.views.toLocaleString()} views</span>
      </div>
    </header>
    <div class="article-content">
      ${post.content}
    </div>
    <div class="article-footer">
      <div class="article-tags">
        ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
      </div>
      <div class="social-share">
        <button class="share-btn" onclick="sharePost('twitter')">
          <i data-feather="twitter"></i> Share on Twitter
        </button>
        <button class="share-btn" onclick="sharePost('linkedin')">
          <i data-feather="linkedin"></i> Share on LinkedIn
        </button>
      </div>
    </div>
  `;
  
  // Load comments
  loadComments(post.id);
  
  // Highlight code
  if (typeof hljs !== 'undefined') {
    setTimeout(() => hljs.highlightAll(), 100);
  }
  
  // Update feather icons
  if (typeof feather !== 'undefined') {
    setTimeout(() => feather.replace(), 100);
  }
  
  console.log('Post page content loaded for:', post.title);
}

function loadComments(postId) {
  const comments = appData.comments.filter(c => c.postId === postId && c.status === 'approved');
  const container = document.getElementById('comments-list');
  
  if (!container) return;
  
  if (comments.length === 0) {
    container.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
    return;
  }
  
  container.innerHTML = comments.map(comment => `
    <div class="comment">
      <div class="comment-header">
        <span class="comment-author">${comment.author}</span>
        <span class="comment-date">${formatDate(comment.timestamp)}</span>
      </div>
      <div class="comment-content">${comment.content}</div>
    </div>
  `).join('');
}

// Admin Functions - Enhanced and Working
function handleAdminLogin(e) {
  e.preventDefault();
  console.log('Admin login attempt');
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  
  console.log('Login credentials:', username, '****');
  
  // Find user in the users array
  const user = appData.users.find(u => u.username === username && u.password === password);
  
  if (user) {
    isAdminLoggedIn = true;
    currentUser = user;
    console.log('Login successful for user:', user.name, 'Role:', user.role);
    
    // Update last login
    user.lastLogin = new Date().toISOString();
    
    // Show admin dashboard
    showPage('admin-dashboard');
    setTimeout(() => loadAdminDashboard(), 200);
    
    showToast(`Welcome back, ${user.name}!`, 'success');
  } else {
    console.log('Login failed - invalid credentials');
    const errorEl = document.getElementById('login-error');
    if (errorEl) {
      errorEl.textContent = 'Invalid credentials. Use admin/admin123 to access the dashboard.';
      errorEl.classList.remove('hidden');
    }
  }
}

function handleAdminLogout() {
  isAdminLoggedIn = false;
  currentUser = null;
  showPage('home');
  updateActiveNavLink('home');
  loadHomePage();
  showToast('Logged out successfully', 'success');
  console.log('Admin logged out');
}

function loadAdminDashboard() {
  console.log('Loading admin dashboard...');
  
  // Load recent activity
  const activityContainer = document.getElementById('recent-activity-admin');
  if (activityContainer) {
    activityContainer.innerHTML = appData.analyticsData.recentActivity.map(activity => `
      <div class="activity-item">
        <div class="activity-info">
          <div class="activity-title">${activity.message}</div>
          <div class="activity-meta">by ${activity.user}</div>
        </div>
        <div class="activity-time">${activity.time}</div>
      </div>
    `).join('');
  }
  
  // Load recent posts
  const postsContainer = document.getElementById('recent-posts-admin');
  if (postsContainer) {
    postsContainer.innerHTML = appData.samplePosts.slice(0, 5).map(post => `
      <div class="activity-item">
        <div class="activity-info">
          <div class="activity-title">${truncateText(post.title, 50)}</div>
          <div class="activity-meta">${post.category} • ${post.views.toLocaleString()} views • ${formatDate(post.publishDate)}</div>
        </div>
        <span class="status-${post.status}">${post.status}</span>
      </div>
    `).join('');
  }
  
  // Initialize charts after a delay
  setTimeout(() => {
    initializeCharts();
  }, 300);
  
  console.log('Admin dashboard loaded');
}

function initializeCharts() {
  console.log('Initializing charts...');
  
  // Views Chart
  const viewsCtx = document.getElementById('viewsChart');
  if (viewsCtx && typeof Chart !== 'undefined') {
    try {
      // Destroy existing chart if it exists
      if (charts.viewsChart) {
        charts.viewsChart.destroy();
      }
      
      charts.viewsChart = new Chart(viewsCtx, {
        type: 'line',
        data: {
          labels: appData.analyticsData.monthlyLabels,
          datasets: [{
            label: 'Monthly Views',
            data: appData.analyticsData.monthlyViews,
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#1FB8CD',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                callback: function(value) {
                  return value.toLocaleString();
                }
              }
            },
            x: {
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        }
      });
      
      console.log('Views chart initialized successfully');
    } catch (error) {
      console.error('Error initializing views chart:', error);
    }
  } else {
    console.warn('Chart.js not available or canvas not found');
  }
}

function loadPostsManagement() {
  console.log('Loading posts management...');
  
  const tbody = document.getElementById('posts-table-body');
  if (!tbody) {
    console.error('Posts table body not found');
    return;
  }
  
  tbody.innerHTML = appData.samplePosts.map(post => `
    <tr>
      <td>
        <div style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${post.title}">
          ${post.title}
        </div>
      </td>
      <td>${post.category}</td>
      <td><span class="status-${post.status}">${post.status}</span></td>
      <td>${post.views.toLocaleString()}</td>
      <td>${post.comments}</td>
      <td>${formatDate(post.publishDate)}</td>
      <td class="table-actions">
        <button class="table-action-btn table-action-btn--edit" onclick="editPost(${post.id})">Edit</button>
        <button class="table-action-btn table-action-btn--view" onclick="viewPost(${post.id})">View</button>
        <button class="table-action-btn table-action-btn--delete" onclick="deletePost(${post.id})">Delete</button>
      </td>
    </tr>
  `).join('');
  
  console.log('Posts management loaded');
}

function loadCommentsManagement() {
  console.log('Loading comments management...');
  
  const container = document.getElementById('comments-management');
  if (!container) {
    console.error('Comments management container not found');
    return;
  }
  
  container.innerHTML = appData.comments.map(comment => `
    <div class="comment-admin">
      <div class="comment-admin-header">
        <div class="comment-admin-info">
          <div>
            <strong>${comment.author}</strong> commented on 
            <em>"${truncateText(comment.postTitle, 40)}"</em>
          </div>
          <div class="comment-admin-meta">${formatDate(comment.timestamp)} • ${comment.email}</div>
        </div>
        <div class="comment-admin-actions">
          <button class="btn btn--sm ${comment.status === 'approved' ? 'btn--outline' : 'btn--primary'}" onclick="toggleCommentStatus(${comment.id})">
            ${comment.status === 'approved' ? 'Unapprove' : 'Approve'}
          </button>
          <button class="btn btn--sm table-action-btn--delete" onclick="deleteComment(${comment.id})">Delete</button>
        </div>
      </div>
      <div class="comment-admin-content">${comment.content}</div>
    </div>
  `).join('');
  
  console.log('Comments management loaded');
}

function loadAnalytics() {
  console.log('Loading analytics...');
  
  // Category Chart
  const categoryCtx = document.getElementById('categoryChart');
  if (categoryCtx && typeof Chart !== 'undefined') {
    try {
      // Destroy existing chart if it exists
      if (charts.categoryChart) {
        charts.categoryChart.destroy();
      }
      
      charts.categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
          labels: appData.analyticsData.categoryStats.map(c => c.category),
          datasets: [{
            data: appData.analyticsData.categoryStats.map(c => c.views),
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
            borderWidth: 2,
            borderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true
              }
            }
          }
        }
      });
      
      console.log('Category chart initialized successfully');
    } catch (error) {
      console.error('Error initializing category chart:', error);
    }
  }
  
  // Top posts
  const container = document.getElementById('top-posts-list');
  if (container) {
    container.innerHTML = appData.analyticsData.topPosts.map((post, index) => `
      <div class="top-post-item">
        <div class="top-post-title">${index + 1}. ${truncateText(post.title, 40)}</div>
        <div class="top-post-views">${post.views.toLocaleString()} views</div>
      </div>
    `).join('');
  }
  
  // Analytics insights
  const insightsContainer = document.getElementById('analytics-insights');
  if (insightsContainer) {
    insightsContainer.innerHTML = `
      <div class="insight-card">
        <h4>Most Popular Category</h4>
        <p>Tech Tips leads with ${appData.analyticsData.categoryStats[0].views.toLocaleString()} views</p>
      </div>
      <div class="insight-card">
        <h4>Growth Rate</h4>
        <p>+12% increase in monthly traffic</p>
      </div>
      <div class="insight-card">
        <h4>Engagement</h4>
        <p>Average 2.8 comments per post</p>
      </div>
      <div class="insight-card">
        <h4>Top Performance Day</h4>
        <p>Tuesdays show highest engagement</p>
      </div>
    `;
  }
  
  console.log('Analytics loaded');
}

function loadUsersManagement() {
  console.log('Loading users management...');
  
  const tbody = document.getElementById('users-table-body');
  if (!tbody) {
    console.error('Users table body not found');
    return;
  }
  
  tbody.innerHTML = appData.users.map(user => `
    <tr>
      <td>
        <div class="user-info">
          <div class="user-avatar">${user.name.split(' ').map(n => n[0]).join('')}</div>
          <div class="user-details">
            <h4>${user.name}</h4>
            <p>@${user.username}</p>
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td><span class="status-${user.role}">${user.role}</span></td>
      <td>${user.postsCreated}</td>
      <td>${formatDate(user.lastLogin)}</td>
      <td><span class="status-${user.status}">${user.status}</span></td>
      <td class="table-actions">
        <button class="table-action-btn table-action-btn--edit" onclick="editUser(${user.id})">Edit</button>
        ${user.id !== 1 ? `<button class="table-action-btn table-action-btn--delete" onclick="deleteUser(${user.id})">Delete</button>` : ''}
      </td>
    </tr>
  `).join('');
  
  console.log('Users management loaded');
}

// Event Handlers - Enhanced
function toggleTheme() {
  console.log('Toggling theme from:', currentTheme);
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  console.log('New theme:', currentTheme);
  
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
  
  showToast(`Switched to ${currentTheme} mode`, 'success');
}

function updateThemeIcon() {
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.setAttribute('data-feather', currentTheme === 'light' ? 'moon' : 'sun');
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}

function toggleMobileNav() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('open');
  }
}

function closeMobileNav() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.remove('open');
  }
}

function setActiveFilter(filter) {
  console.log('Setting filter:', filter);
  currentFilter = filter;
  
  // Update filter button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Reload posts with filter
  loadLatestPosts();
  
  showToast(`Filtered by ${filter === 'all' ? 'All Categories' : filter.replace('-', ' ')}`, 'info');
}

function filterByCategory(category) {
  console.log('Filtering by category:', category);
  showPage('home');
  updateActiveNavLink('home');
  loadHomePage();
  setTimeout(() => {
    setActiveFilter(category);
  }, 100);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Simulate newsletter subscription
  showToast(`Successfully subscribed ${email} to newsletter!`, 'success');
  e.target.reset();
}

function handleCommentSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const name = document.getElementById('comment-name').value;
  const email = document.getElementById('comment-email').value;
  const content = document.getElementById('comment-content').value;
  
  if (!currentPost) {
    showToast('Error: No post selected', 'error');
    return;
  }
  
  // Simulate comment submission
  const newComment = {
    id: Date.now(),
    postId: currentPost.id,
    postTitle: currentPost.title,
    author: name,
    email: email,
    content: content,
    timestamp: new Date().toISOString(),
    status: 'pending'
  };
  
  appData.comments.push(newComment);
  showToast('Comment submitted for review!', 'success');
  e.target.reset();
  
  // Update comment count
  currentPost.comments++;
  
  // Reload comments
  loadComments(currentPost.id);
}

function handlePostSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const title = document.getElementById('post-title').value;
  const category = document.getElementById('post-category').value;
  const excerpt = document.getElementById('post-excerpt').value;
  const content = document.getElementById('post-content-editor').value;
  const tags = document.getElementById('post-tags').value.split(',').map(t => t.trim()).filter(t => t);
  const featured = document.getElementById('post-featured').checked;
  
  // Create new post
  const newPost = {
    id: Date.now(),
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    category: category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    author: currentUser ? currentUser.name : 'Admin',
    publishDate: new Date().toISOString().split('T')[0],
    readTime: Math.max(1, Math.ceil(content.split(' ').length / 200)) + ' min read',
    featured: featured,
    status: 'published',
    views: 0,
    likes: 0,
    comments: 0,
    excerpt,
    content,
    tags
  };
  
  appData.samplePosts.unshift(newPost);
  appData.analyticsData.totalPosts++;
  
  showToast('Post published successfully!', 'success');
  closeModal();
  
  // Reload content
  loadPostsManagement();
  loadLatestPosts();
  loadFeaturedPosts();
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  showToast('Settings saved successfully!', 'success');
}

function switchTab(tabName) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  // Add active class to selected tab
  const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
  const tabPane = document.getElementById(`${tabName}-tab`);
  
  if (tabBtn) tabBtn.classList.add('active');
  if (tabPane) tabPane.classList.add('active');
}

// Modal Functions
function openPostEditor(postId = null) {
  const modal = document.getElementById('post-editor-modal');
  if (!modal) return;
  
  if (postId) {
    // Edit existing post
    const post = appData.samplePosts.find(p => p.id === postId);
    if (post) {
      document.getElementById('post-title').value = post.title;
      document.getElementById('post-category').value = post.category.toLowerCase().replace(/\s+/g, '-');
      document.getElementById('post-excerpt').value = post.excerpt;
      document.getElementById('post-content-editor').value = post.content.replace(/<[^>]*>/g, '');
      document.getElementById('post-tags').value = post.tags.join(', ');
      document.getElementById('post-featured').checked = post.featured;
    }
  } else {
    // New post
    const form = document.getElementById('post-editor-form');
    if (form) form.reset();
  }
  
  modal.classList.remove('hidden');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
}

// Admin action functions
function editPost(postId) {
  openPostEditor(postId);
}

function viewPost(postId) {
  navigateToPost(postId);
}

function deletePost(postId) {
  if (confirm('Are you sure you want to delete this post?')) {
    const postIndex = appData.samplePosts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      appData.samplePosts.splice(postIndex, 1);
      appData.analyticsData.totalPosts--;
      showToast('Post deleted successfully!', 'success');
      loadPostsManagement();
      loadLatestPosts();
      loadFeaturedPosts();
    }
  }
}

function editUser(userId) {
  showToast('User editing feature coming soon!', 'info');
}

function deleteUser(userId) {
  if (userId === 1) {
    showToast('Cannot delete the main admin user!', 'error');
    return;
  }
  
  if (confirm('Are you sure you want to delete this user?')) {
    const userIndex = appData.users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      appData.users.splice(userIndex, 1);
      showToast('User deleted successfully!', 'success');
      loadUsersManagement();
    }
  }
}

function deleteComment(commentId) {
  if (confirm('Are you sure you want to delete this comment?')) {
    const commentIndex = appData.comments.findIndex(c => c.id === commentId);
    if (commentIndex !== -1) {
      appData.comments.splice(commentIndex, 1);
      showToast('Comment deleted successfully!', 'success');
      loadCommentsManagement();
    }
  }
}

function toggleCommentStatus(commentId) {
  const comment = appData.comments.find(c => c.id === commentId);
  if (comment) {
    comment.status = comment.status === 'approved' ? 'pending' : 'approved';
    showToast(`Comment ${comment.status}!`, 'success');
    loadCommentsManagement();
  }
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function truncateText(text, length) {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 5000);
}

function sharePost(platform) {
  if (!currentPost) return;
  
  const url = window.location.href;
  const title = currentPost.title;
  
  let shareUrl = '';
  
  switch(platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

// Global functions for inline event handlers
window.editPost = editPost;
window.viewPost = viewPost;
window.deletePost = deletePost;
window.editUser = editUser;
window.deleteUser = deleteUser;
window.deleteComment = deleteComment;
window.toggleCommentStatus = toggleCommentStatus;
window.sharePost = sharePost;