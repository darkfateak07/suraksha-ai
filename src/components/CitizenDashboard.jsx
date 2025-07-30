import React, { useState } from 'react';
import {
  FaHome,
  FaRoute,
  FaBuilding,
  FaCloudRain,
  FaComments,
  FaUser,
  FaBell,
  FaSearch,
  FaMapMarkerAlt,
  FaCar,
  FaExclamationTriangle,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaTimes,
  FaBars,
  FaShieldAlt,
  FaFirstAid,
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaExclamationCircle,
  FaInfoCircle,
  FaCheckCircle,
  FaLightbulb,
  FaHandHoldingHeart,
  FaUsers
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CitizenDashboard.css';

const CitizenDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [routeForm, setRouteForm] = useState({
    source: '',
    destination: ''
  });
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showRouteResult, setShowRouteResult] = useState(false);

  // Dummy data
  const nearbyMSMEs = [
    { id: 1, name: "Kumar's Grocery Store", type: "Grocery", distance: "0.5 km", rating: 4.5, phone: "+91 98765 43210" },
    { id: 2, name: "Tech Solutions", type: "Electronics", distance: "1.2 km", rating: 4.2, phone: "+91 98765 43211" },
    { id: 3, name: "Fresh Pharmacy", type: "Pharmacy", distance: "0.8 km", rating: 4.7, phone: "+91 98765 43212" },
    { id: 4, name: "Daily Mart", type: "Convenience Store", distance: "1.5 km", rating: 4.0, phone: "+91 98765 43213" },
    { id: 5, name: "Local Hardware", type: "Hardware", distance: "2.1 km", rating: 4.3, phone: "+91 98765 43214" },
    { id: 6, name: "Quick Service Center", type: "Service", distance: "1.8 km", rating: 4.1, phone: "+91 98765 43215" }
  ];

  const weatherData = {
    temperature: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    alerts: [
      { type: "rain", message: "Heavy rainfall expected in next 2 hours", severity: "warning" },
      { type: "flood", message: "Low-lying areas may experience waterlogging", severity: "info" }
    ]
  };

  const notifications = [
    { id: 1, type: "alert", message: "Heavy rainfall alert for your area", time: "2 min ago", icon: FaExclamationTriangle },
    { id: 2, type: "info", message: "New MSME registered nearby", time: "15 min ago", icon: FaBuilding },
    { id: 3, type: "success", message: "Route optimization completed", time: "1 hour ago", icon: FaRoute },
    { id: 4, type: "warning", message: "Traffic disruption on main road", time: "2 hours ago", icon: FaCar }
  ];

  const emergencyContacts = [
    { name: "Emergency Helpline", number: "112", description: "National Emergency Number" },
    { name: "Police Control", number: "100", description: "Police Emergency" },
    { name: "Fire Brigade", number: "101", description: "Fire Emergency" },
    { name: "Ambulance", number: "102", description: "Medical Emergency" },
    { name: "Disaster Management", number: "1070", description: "NDMA Helpline" },
    { name: "Weather Alert", number: "1800-180-1717", description: "IMD Weather Updates" }
  ];

  const safetyTips = [
    {
      title: "Before Disaster",
      content: "Keep emergency kit ready with food, water, medicines, and important documents. Know your evacuation routes and emergency contacts."
    },
    {
      title: "During Disaster",
      content: "Stay indoors if possible, avoid flooded areas, and follow official instructions. Keep your phone charged and stay connected."
    },
    {
      title: "After Disaster",
      content: "Check for injuries, avoid damaged structures, and report to authorities. Help neighbors and follow recovery guidelines."
    },
    {
      title: "Communication",
      content: "Use text messages instead of calls during emergencies. Keep family informed about your location and safety status."
    }
  ];

  const handleRouteSubmit = (e) => {
    e.preventDefault();
    setShowRouteResult(true);
    // Simulate API call
    setTimeout(() => {
      setShowRouteResult(false);
    }, 3000);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! We will get back to you soon.');
    setFeedbackForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (form, setForm) => (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <FaShieldAlt />
            </div>
            <span className="brand-text">Suraksha AI</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="sidebar-close"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <FaHome className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <FaRoute className="nav-icon" />
            <span className="nav-text">Smart Routes</span>
          </a>
          <a href="#" className="nav-item">
            <FaBuilding className="nav-icon" />
            <span className="nav-text">Nearby MSMEs</span>
          </a>
          <a href="#" className="nav-item">
            <FaCloudRain className="nav-icon" />
            <span className="nav-text">Weather & Alerts</span>
          </a>
          <a href="#" className="nav-item">
            <FaComments className="nav-icon" />
            <span className="nav-text">Feedback & Help</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <header className="top-navbar">
          <div className="navbar-content">
            <button
              onClick={() => setSidebarOpen(true)}
              className="sidebar-toggle"
            >
              <FaBars />
            </button>

            <div className="navbar-right">
              <div className="notification-section">
                <button 
                  className="notification-btn"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <FaBell />
                  <span className="notification-badge">3</span>
                </button>
                
                {showNotifications && (
                  <div className="notification-panel">
                    <div className="notification-header">
                      <h5>Notifications</h5>
                      <button 
                        className="close-notifications"
                        onClick={() => setShowNotifications(false)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <div className="notification-list">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`notification-item ${notification.type}`}>
                          <div className="notification-icon">
                            <notification.icon />
                          </div>
                          <div className="notification-content">
                            <p className="notification-message">{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="user-profile">
                <div className="user-avatar">
                  <FaUser />
                </div>
                <span className="user-name">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="main-area">
          <div className="dashboard-container-inner">
          

            <div className="dashboard-grid">
              {/* Smart Route Planner */}
              <div className="dashboard-card">
                <div className="card-header">
                  <FaRoute className="card-icon" />
                  <h2 className="card-title">Smart Route Planner</h2>
                </div>

                <form onSubmit={handleRouteSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      Source Location
                    </label>
                    <div className="input-group">
                      <FaMapMarkerAlt className="input-icon" />
                      <input
                        type="text"
                        name="source"
                        value={routeForm.source}
                        onChange={handleInputChange(routeForm, setRouteForm)}
                        placeholder="Enter your starting point"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Destination
                    </label>
                    <div className="input-group">
                      <FaMapMarkerAlt className="input-icon" />
                      <input
                        type="text"
                        name="destination"
                        value={routeForm.destination}
                        onChange={handleInputChange(routeForm, setRouteForm)}
                        placeholder="Enter your destination"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                  >
                    Find Safe Route
                  </button>
                </form>

                {showRouteResult && (
                  <div className="success-message">
                    <div className="success-content">
                      <FaCar className="success-icon" />
                      <span className="success-title">Route Found!</span>
                    </div>
                    <p className="success-text">
                      Safe route calculated considering weather conditions and traffic disruptions.
                    </p>
                  </div>
                )}
              </div>

              {/* Weather & Emergency Alerts */}
              <div className="dashboard-card">
                <div className="card-header">
                  <FaCloudRain className="card-icon" />
                  <h2 className="card-title">Weather & Emergency Alerts</h2>
                </div>

                <div>
                  <div className="weather-card">
                    <div className="weather-content">
                      <div className="weather-info">
                        <h3>{weatherData.temperature}</h3>
                        <p>{weatherData.condition}</p>
                      </div>
                      <div className="weather-details">
                        <p>Humidity: {weatherData.humidity}</p>
                        <p>Wind: {weatherData.windSpeed}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    {weatherData.alerts.map((alert, index) => (
                      <div key={index} className={`alert-item ${
                        alert.severity === 'warning' ? 'alert-warning' : 'alert-info'
                      }`}>
                        <div className="alert-content">
                          <FaExclamationTriangle className="alert-icon" />
                          <span className="alert-text">{alert.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nearby MSMEs */}
              <div className="dashboard-card msme-section">
                <div className="msme-header">
                  <div className="card-header">
                    <FaBuilding className="card-icon" />
                    <h2 className="card-title">Nearby MSMEs</h2>
                  </div>
                  <div className="msme-search">
                    <FaSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search MSMEs..."
                      className="search-input"
                    />
                  </div>
                </div>

                <div className="msme-grid">
                  {nearbyMSMEs.map((msme) => (
                    <div key={msme.id} className="msme-card">
                      <div className="msme-header-row">
                        <h3 className="msme-name">{msme.name}</h3>
                        <span className="msme-type">{msme.type}</span>
                      </div>
                      <div className="msme-location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{msme.distance}</span>
                      </div>
                      <div className="msme-footer">
                        <div className="msme-rating">
                          <FaStar className="star-icon" />
                          <span className="rating-text">{msme.rating}</span>
                        </div>
                        <button className="contact-btn">
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback & Help */}
              <div className="dashboard-card feedback-section">
                <div className="card-header">
                  <FaComments className="card-icon" />
                  <h2 className="card-title">Feedback & Help</h2>
                </div>

                <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={feedbackForm.name}
                        onChange={handleInputChange(feedbackForm, setFeedbackForm)}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={feedbackForm.email}
                        onChange={handleInputChange(feedbackForm, setFeedbackForm)}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={feedbackForm.message}
                      onChange={handleInputChange(feedbackForm, setFeedbackForm)}
                      rows="4"
                      className="form-textarea"
                      placeholder="Share your suggestions or seek support..."
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit Feedback
                    </button>
                    <div className="contact-info">
                      <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <span>+91 1800-123-4567</span>
                      </div>
                      <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <span>support@suraksha-ai.com</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Content Sections */}
            <div className="content-section">
              {/* Disaster Assistance Section */}
              <div className="disaster-assistance">
                <div className="section-header">
                  <h2 className="section-title">Disaster Assistance Services</h2>
                  <p className="section-subtitle">
                    Access essential services and support during disaster situations to help you and your community stay safe.
                  </p>
                </div>

                <div className="assistance-grid">
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaShieldAlt />
                    </div>
                    <h4>Emergency Response</h4>
                    <p>Get immediate assistance and connect with emergency services during critical situations.</p>
                  </div>
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaFirstAid />
                    </div>
                    <h4>Medical Support</h4>
                    <p>Access medical assistance, find nearby hospitals, and get emergency healthcare information.</p>
                  </div>
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaMapMarkedAlt />
                    </div>
                    <h4>Safe Shelters</h4>
                    <p>Locate nearby emergency shelters and evacuation centers in your area.</p>
                  </div>
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaHandHoldingHeart />
                    </div>
                    <h4>Community Support</h4>
                    <p>Connect with local volunteers and community organizations for mutual aid.</p>
                  </div>
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaInfoCircle />
                    </div>
                    <h4>Information Hub</h4>
                    <p>Get real-time updates, official announcements, and verified information about disasters.</p>
                  </div>
                  <div className="assistance-card">
                    <div className="assistance-icon">
                      <FaUsers />
                    </div>
                    <h4>Family Reunification</h4>
                    <p>Help locate and reconnect with family members during emergency situations.</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts Section */}
              <div className="emergency-contacts">
                <div className="section-header">
                  <h2 className="section-title">Emergency Contacts</h2>
                  <p className="section-subtitle">
                    Save these important emergency numbers for quick access during crisis situations.
                  </p>
                </div>

                <div className="contact-grid">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="contact-info">
                        <h5>{contact.name}</h5>
                        <p>{contact.number} - {contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Tips Section */}
              <div className="safety-tips">
                <div className="section-header">
                  <h2 className="section-title">Safety Guidelines</h2>
                  <p className="section-subtitle">
                    Essential safety tips and guidelines to help you prepare for and respond to disaster situations.
                  </p>
                </div>

                <div className="tips-list">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className="tip-item">
                      <div className="tip-icon">
                        <FaLightbulb />
                      </div>
                      <div className="tip-content">
                        <h5>{tip.title}</h5>
                        <p>{tip.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CitizenDashboard; 