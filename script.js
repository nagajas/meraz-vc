// Sample Events Data
const eventsData = [
    {
        id: 1,
        name: "Code Wars",
        description: "A competitive programming contest where participants solve algorithmic challenges. Test your coding skills against the best programmers from various colleges.",
        date: "March 15, 2026",
        place: "Computer Lab A, Academic Block",
        contact: "Rahul Sharma - +91 98765 43210",
        category: "technical"
    },
    {
        id: 2,
        name: "VibeCoding Hackathon",
        description: "24-hour hackathon focused on AI-assisted development and creative problem-solving. Build innovative solutions using modern technologies.",
        date: "March 16-17, 2026",
        place: "Innovation Hub",
        contact: "Priya Patel - +91 98765 43211",
        category: "technical"
    },
    {
        id: 3,
        name: "Robo Race",
        description: "Design and race your autonomous robots through challenging obstacle courses. Show off your robotics skills.",
        date: "March 18, 2026",
        place: "Main Ground",
        contact: "Amit Kumar - +91 98765 43212",
        category: "technical"
    },
    {
        id: 4,
        name: "Battle of Bands",
        description: "Showcase your musical talent in this electrifying battle of bands. Rock the stage with your original compositions.",
        date: "March 15, 2026",
        place: "Open Air Theatre",
        contact: "Neha Singh - +91 98765 43213",
        category: "cultural"
    },
    {
        id: 5,
        name: "Classical Dance Competition",
        description: "Display the grace and beauty of Indian classical dance forms including Bharatanatyam, Kathak, Odissi, and more.",
        date: "March 16, 2026",
        place: "Auditorium",
        contact: "Sneha Reddy - +91 98765 43214",
        category: "cultural"
    },
    {
        id: 6,
        name: "Street Dance Battle",
        description: "High-energy street dance competition featuring hip-hop, popping, locking, and breaking. Bring your best moves!",
        date: "March 17, 2026",
        place: "Main Stage",
        contact: "Arjun Verma - +91 98765 43215",
        category: "cultural"
    },
    {
        id: 7,
        name: "Nukkad Natak",
        description: "Street play competition addressing social issues through powerful performances and storytelling.",
        date: "March 18, 2026",
        place: "Central Lawn",
        contact: "Kavya Menon - +91 98765 43216",
        category: "cultural"
    },
    {
        id: 8,
        name: "Cricket Tournament",
        description: "Inter-college cricket tournament with exciting matches and prizes for winners.",
        date: "March 15-18, 2026",
        place: "Sports Complex",
        contact: "Virat Kohli - +91 98765 43217",
        category: "sports"
    },
    {
        id: 9,
        name: "Football League",
        description: "Competitive football matches between colleges. Form your team and compete for the championship.",
        date: "March 15-17, 2026",
        place: "Football Ground",
        contact: "Sunil Chhetri - +91 98765 43218",
        category: "sports"
    },
    {
        id: 10,
        name: "Basketball 3v3",
        description: "Fast-paced 3-on-3 basketball tournament. Quick games, intense action!",
        date: "March 16, 2026",
        place: "Basketball Court",
        contact: "Satnam Singh - +91 98765 43219",
        category: "sports"
    },
    {
        id: 11,
        name: "Web Development Workshop",
        description: "Learn modern web development techniques including React, Node.js, and deployment strategies from industry experts.",
        date: "March 15, 2026",
        place: "Seminar Hall 1",
        contact: "Dr. Anjali Gupta - +91 98765 43220",
        category: "workshops"
    },
    {
        id: 12,
        name: "AI & Machine Learning Workshop",
        description: "Hands-on workshop on AI and ML fundamentals, including neural networks and practical applications.",
        date: "March 17, 2026",
        place: "Seminar Hall 2",
        contact: "Prof. Rajesh Khanna - +91 98765 43221",
        category: "workshops"
    }
];

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("March 15, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
if (document.getElementById("countdown")) {
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Auth Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active class from all tabs and forms
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Get stored users
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid email or password!');
        }
    });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const college = document.getElementById('signupCollege').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if email already exists
        if (users.find(u => u.email === email)) {
            alert('Email already registered!');
            return;
        }
        
        // Add new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            phone,
            college,
            password,
            registeredEvents: []
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        alert('Registration successful!');
        window.location.href = 'dashboard.html';
    });
}

// Events Page
function displayEvents(events) {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList) return;
    
    if (events.length === 0) {
        eventsList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No events found.</p>';
        return;
    }
    
    eventsList.innerHTML = events.map(event => `
        <div class="event-item" onclick="showEventDetails(${event.id})">
            <span class="event-category">${event.category}</span>
            <h3>${event.name}</h3>
            <p>${event.description.substring(0, 100)}...</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Venue:</strong> ${event.place}</p>
        </div>
    `).join('');
}

// Filter Events
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        const filtered = category === 'all' ? eventsData : eventsData.filter(e => e.category === category);
        displayEvents(filtered);
    });
});

// Search Events
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = eventsData.filter(event => 
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm)
        );
        displayEvents(filtered);
    });
}

// Show Event Details Modal
function showEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    document.getElementById('modalEventName').textContent = event.name;
    document.getElementById('modalEventDescription').textContent = event.description;
    document.getElementById('modalEventDate').textContent = event.date;
    document.getElementById('modalEventPlace').textContent = event.place;
    document.getElementById('modalEventContact').textContent = event.contact;
    document.getElementById('modalEventCategory').textContent = event.category.toUpperCase();
    
    const modal = document.getElementById('eventModal');
    modal.style.display = 'block';
    
    // Set event ID for registration
    document.getElementById('registerBtn').setAttribute('data-event-id', eventId);
}

// Close Modal
const closeBtn = document.querySelector('.close');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        document.getElementById('eventModal').style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('eventModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Register for Event
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!currentUser) {
            alert('Please login to register for events!');
            window.location.href = 'login.html';
            return;
        }
        
        const eventId = parseInt(registerBtn.getAttribute('data-event-id'));
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            if (!users[userIndex].registeredEvents.includes(eventId)) {
                users[userIndex].registeredEvents.push(eventId);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
                alert('Successfully registered for the event!');
                document.getElementById('eventModal').style.display = 'none';
            } else {
                alert('You are already registered for this event!');
            }
        }
    });
}

// Dashboard Page
function loadDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Display user profile
    const userProfile = document.getElementById('userProfile');
    if (userProfile) {
        userProfile.innerHTML = `
            <p><strong>Name:</strong> ${currentUser.name}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>Phone:</strong> ${currentUser.phone}</p>
            <p><strong>College:</strong> ${currentUser.college}</p>
        `;
    }
    
    // Display stats
    const registeredCount = document.getElementById('registeredCount');
    if (registeredCount) {
        registeredCount.textContent = currentUser.registeredEvents.length;
    }
    
    // Display registered events
    const registeredEventsList = document.getElementById('registeredEventsList');
    if (registeredEventsList) {
        const registeredEvents = eventsData.filter(e => currentUser.registeredEvents.includes(e.id));
        
        if (registeredEvents.length === 0) {
            registeredEventsList.innerHTML = '<p style="text-align: center;">No registered events yet. <a href="events.html">Browse Events</a></p>';
        } else {
            registeredEventsList.innerHTML = registeredEvents.map(event => `
                <div class="event-item">
                    <span class="event-category">${event.category}</span>
                    <h3>${event.name}</h3>
                    <p>${event.description}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Venue:</strong> ${event.place}</p>
                    <p><strong>Contact:</strong> ${event.contact}</p>
                </div>
            `).join('');
        }
    }
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    });
}

// Initialize
if (window.location.pathname.includes('events.html')) {
    displayEvents(eventsData);
}

if (window.location.pathname.includes('dashboard.html')) {
    loadDashboard();
}

// Check URL parameters for category filter on events page
if (window.location.pathname.includes('events.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const filtered = eventsData.filter(e => e.category === category);
        displayEvents(filtered);
        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}
