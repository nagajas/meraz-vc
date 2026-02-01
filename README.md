# Meraz 2026 - Festival Website

A basic functional website for Meraz 2026, the annual cultural and technical festival of IIT Bhilai.

## 🎯 Features Implemented

### 1. **Modern, Themed User Interface**
- Fully responsive design that works on all devices
- Purple gradient theme throughout the website
- Smooth animations and transitions
- Clean and intuitive navigation

### 2. **User Authentication & Registration**
- User signup with name, email, phone, college, and password
- Secure login system
- User profile management
- Session persistence using localStorage

### 3. **Dynamic Events Page**
- Browse all festival events
- Filter events by category (Technical, Cultural, Sports, Workshops)
- Search functionality to find specific events
- Detailed event information modal with:
  - Event name and description
  - Date and venue
  - Contact person details
  - Registration capability

### 4. **User Dashboard**
- View profile information
- Track registered events count
- See all registered events with full details
- Quick access to browse more events

### 5. **Vibe-Centric Engagement Elements**
- **Countdown Timer**: Real-time countdown to festival start date (March 15, 2026)
- **Interactive Event Cards**: Hover effects and smooth animations
- Festival statistics display
- Pass purchasing system with three tiers

## 📁 Project Structure

```
Meraz-VC/
├── index.html          # Homepage with hero section, about, and passes
├── events.html         # Events listing and filtering page
├── login.html          # Login and signup page
├── dashboard.html      # User dashboard
├── style.css          # All styling and responsive design
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🚀 How to Run

1. Simply open `index.html` in any modern web browser
2. No server setup required - runs completely on the client side
3. All data is stored in browser's localStorage

## 📋 Sample Events Data

The website includes 12 pre-configured events across 4 categories:
- **Technical**: Code Wars, VibeCoding Hackathon, Robo Race
- **Cultural**: Battle of Bands, Classical Dance, Street Dance, Nukkad Natak
- **Sports**: Cricket Tournament, Football League, Basketball 3v3
- **Workshops**: Web Development, AI & Machine Learning

## 🎨 Design Choices

### Color Scheme
- Primary: Purple gradient (#667eea to #764ba2)
- Background: White and light gray (#f8f9fa)
- Text: Dark gray (#333)
- Accents: White buttons with colored text

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Hero Title: 4rem (responsive to 2.5rem on mobile)
- Section Headers: 2.5rem
- Body Text: 1rem with 1.6 line-height

### Layout
- Container max-width: 1200px for optimal readability
- Grid-based layouts for events and passes
- Flexbox for navigation and stats
- Sticky navbar for easy navigation

## 💾 Data Storage

- Uses browser's localStorage to persist:
  - User accounts
  - Login sessions
  - Event registrations
  - User profile data

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint at 768px for tablets and phones
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and navigation

## ✨ Key Functionality

### User Flow
1. **New User**: Signup → Dashboard → Browse Events → Register
2. **Returning User**: Login → Dashboard → View Registered Events
3. **Guest**: Browse Events → Prompted to login when registering

### Event Registration
1. Browse events on events page or filter by category
2. Click on event card to view full details
3. Click "Register for Event" button
4. System checks if user is logged in
5. Adds event to user's registered events
6. Prevents duplicate registrations

## 🔧 Future Enhancements (UI/UX)

This is a basic functional implementation. Future improvements can include:
- AI-generated images and videos for events
- Advanced animations (parallax, scroll effects)
- Interactive 3D elements
- Chatbot for user assistance
- Payment gateway integration
- Email notifications
- Social media integration
- Event calendar view
- Testimonials section
- Photo gallery
- Sponsors section

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, flexbox, grid, animations
- **JavaScript (ES6+)**: Dynamic functionality, DOM manipulation
- **LocalStorage API**: Client-side data persistence

## 📝 Notes

- All contact information is dummy data
- Event dates are set for March 2026
- No backend server required
- No external dependencies or frameworks
- Works offline after initial load

## 🎓 Educational Purpose

This project demonstrates:
- Clean, semantic HTML structure
- Modern CSS techniques
- Vanilla JavaScript best practices
- Client-side state management
- Responsive web design principles
- User authentication flow
- CRUD operations in frontend

---

**Developed for**: Meraz 2026 VibeCoding Hackathon  
**Institution**: IIT Bhilai  
**Theme**: Purple Gradient - Modern & Vibrant
