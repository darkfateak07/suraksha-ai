import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaRoute, 
  FaExclamationTriangle, 
  FaChartLine, 
  FaUsers, 
  FaMapMarkedAlt,
  FaBell,
  FaSatellite,
  FaCloudRain,
  FaMountain,
  FaWater,
  FaLeaf,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaClock,
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaUser,
  FaBuilding,
  FaTruck,
  FaStore,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    businessType: '',
    vehicleType: '',
    shopType: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleLoginRoleSelect = (role) => {
    setSelectedRole(role);
    setShowLoginForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', loginData);
    console.log('Selected role:', selectedRole);
    
    // For demo purposes, redirect to appropriate dashboard
    if (selectedRole === 'citizen') {
      console.log('Navigating to citizen dashboard...');
      navigate('/citizen-dashboard');
    } else if (selectedRole === 'msme') {
      console.log('Navigating to MSME dashboard...');
      navigate('/msme-dashboard');
    } else if (selectedRole === 'transport') {
      console.log('Navigating to transport dashboard...');
      navigate('/transport-dashboard');
    } else if (selectedRole === 'shop') {
      console.log('Navigating to shop dashboard...');
      navigate('/shop-dashboard');
    } else {
      alert('Login successful! Dashboard coming soon.');
    }
    
    setShowLoginModal(false);
    setShowLoginForm(false);
    setLoginData({ email: '', password: '' });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', { role: selectedRole, ...formData });
    
    // Show success message and redirect to login
    alert('Registration successful! Please login with your credentials.');
    
    setShowSignupModal(false);
    setShowLoginModal(true);
    setShowLoginForm(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address: '',
      businessType: '',
      vehicleType: '',
      shopType: ''
    });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'citizen': return <FaUser />;
      case 'msme': return <FaBuilding />;
      case 'transport': return <FaTruck />;
      case 'shop': return <FaStore />;
      default: return <FaUser />;
    }
  };

  const getRoleTitle = (role) => {
    switch (role) {
      case 'citizen': return 'Citizen Registration';
      case 'msme': return 'MSME Owner Registration';
      case 'transport': return 'Transport & Logistics Registration';
      case 'shop': return 'Shop Owner Registration';
      default: return 'Registration';
    }
  };

  const getRoleDescription = (role) => {
    switch (role) {
      case 'citizen': return 'Join our community to receive real-time alerts and report incidents in your area.';
      case 'msme': return 'Register your business to access disaster management tools and protect your operations.';
      case 'transport': return 'Optimize your routes and get real-time updates for safe transportation during emergencies.';
      case 'shop': return 'Connect your business to our network for emergency alerts and community safety.';
      default: return 'Join our platform for better safety and coordination.';
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isNavbarOpen ? 'show' : ''}`}>
        <motion.div 
          className="navbar-brand"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaShieldAlt className="brand-icon" />
                      <h2 className="nav-link" style={{ color: '#000000' }}>Suraksha AI</h2>
        </motion.div>
        
        <div className={`navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#home" onClick={() => setIsNavbarOpen(false)}>Home</a>
            <a className="nav-link" href="#features" onClick={() => setIsNavbarOpen(false)}>Features</a>
            <a className="nav-link" href="#disaster-management" onClick={() => setIsNavbarOpen(false)}>Disaster Management</a>
            <a className="nav-link" href="#ai-alerts" onClick={() => setIsNavbarOpen(false)}>AI Alerts</a>
            <a className="nav-link" href="#about" onClick={() => setIsNavbarOpen(false)}>About</a>
            <a className="nav-link" href="#contact" onClick={() => setIsNavbarOpen(false)}>Contact</a>
            <button 
              className="btn btn-primary ms-3"
              onClick={() => {
                setShowLoginModal(true);
                setIsNavbarOpen(false);
              }}
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </nav>
      
      {/* Toggle Button - Always visible for split-screen */}
      <button 
        className="navbar-toggler"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        aria-label="Toggle navigation"
      >
        <FaTimes style={{ transform: isNavbarOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
      </button>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="ocean-waves"></div>
          <div className="mountain-silhouette"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                AI-Powered Disaster Management & Route Optimization
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Protecting coastal and hilly communities through real-time AI monitoring, 
                predictive alerts, and intelligent route optimization for emergency response.
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <button className="btn btn-primary btn-lg me-3">
                  <FaPlay className="me-2" />
                  Watch Demo
                </button>
                <button 
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => setShowLoginModal(true)}
                >
                  Get Started
                </button>
              </motion.div>
            </div>
            
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <FaBell className="card-icon" />
                  <span>Real-time Alerts</span>
                </div>
                <div className="floating-card card-2">
                  <FaRoute className="card-icon" />
                  <span>Route Optimization</span>
                </div>
                <div className="floating-card card-3">
                  <FaSatellite className="card-icon" />
                  <span>AI Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Comprehensive Disaster Management Platform</h2>
              <p className="section-subtitle">
                Advanced AI technology protecting communities in coastal and hilly regions
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up">
                <div className="feature-icon">
                  <FaExclamationTriangle />
                </div>
                <h3>Real-time Disaster Detection</h3>
                <p>AI-powered sensors detect floods, landslides, and natural disasters in real-time, providing instant alerts to authorities and communities.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-icon">
                  <FaRoute />
                </div>
                <h3>Intelligent Route Optimization</h3>
                <p>AI algorithms calculate the safest and fastest routes for emergency response teams, considering real-time conditions and hazards.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <h3>Predictive Analytics</h3>
                <p>Advanced AI models predict potential disasters and their impact, enabling proactive measures and better resource allocation.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <h3>Community Integration</h3>
                <p>Citizens and MSMEs can report incidents, receive alerts, and access real-time information about their area's safety status.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-icon">
                  <FaMapMarkedAlt />
                </div>
                <h3>Interactive Mapping</h3>
                <p>Real-time maps showing safe zones, evacuation routes, and current disaster status with detailed visualizations.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-4 col-md-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
                <div className="feature-icon">
                  <FaBell />
                </div>
                <h3>Multi-Channel Alerts</h3>
                <p>Instant notifications via SMS, email, mobile app, and emergency broadcast systems to ensure no one is left behind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disaster Management Section */}
      <section id="disaster-management" className="disaster-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Before & After Disaster Management</h2>
              <p className="section-subtitle">
                Comprehensive solutions for every phase of disaster management
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="disaster-card before-card">
                <div className="card-header">
                  <FaMountain className="card-icon" />
                  <h3>Before Disaster</h3>
                </div>
                <div className="card-content">
                  <ul>
                    <li><FaCheckCircle /> AI-powered risk assessment and prediction</li>
                    <li><FaCheckCircle /> Early warning systems and alerts</li>
                    <li><FaCheckCircle /> Community preparedness training</li>
                    <li><FaCheckCircle /> Infrastructure vulnerability analysis</li>
                    <li><FaCheckCircle /> Emergency response planning</li>
                    <li><FaCheckCircle /> Resource allocation optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="disaster-card after-card">
                <div className="card-header">
                  <FaWater className="card-icon" />
                  <h3>During & After Disaster</h3>
                </div>
                <div className="card-content">
                  <ul>
                    <li><FaCheckCircle /> Real-time disaster monitoring</li>
                    <li><FaCheckCircle /> Emergency response coordination</li>
                    <li><FaCheckCircle /> Safe evacuation route planning</li>
                    <li><FaCheckCircle /> Damage assessment and reporting</li>
                    <li><FaCheckCircle /> Relief and recovery coordination</li>
                    <li><FaCheckCircle /> Community support and communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Alerts Section */}
      <section id="ai-alerts" className="ai-alerts-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">AI-Powered Alert System</h2>
              <p className="section-subtitle">
                Intelligent monitoring and instant notifications for maximum safety
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="alert-card">
                <div className="alert-icon flood">
                  <FaWater />
                </div>
                <h4>Flood Detection</h4>
                <p>Real-time water level monitoring and flood prediction using AI sensors</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="alert-card">
                <div className="alert-icon landslide">
                  <FaMountain />
                </div>
                <h4>Landslide Warning</h4>
                <p>Geological monitoring and early warning systems for slope stability</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="alert-card">
                <div className="alert-icon weather">
                  <FaCloudRain />
                </div>
                <h4>Weather Alerts</h4>
                <p>Advanced weather prediction and severe condition warnings</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="alert-card">
                <div className="alert-icon emergency">
                  <FaExclamationTriangle />
                </div>
                <h4>Emergency Response</h4>
                <p>Instant coordination and resource allocation for emergency situations</p>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12" data-aos="fade-up">
              <div className="ai-dashboard-preview">
                <h3>Real-time AI Dashboard</h3>
                <div className="dashboard-mockup">
                  <div className="dashboard-header">
                    <span className="status-indicator active"></span>
                    <span>Live Monitoring Active</span>
                  </div>
                  <div className="dashboard-content">
                    <div className="metric">
                      <span className="metric-value">24/7</span>
                      <span className="metric-label">Monitoring</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">99.9%</span>
                      <span className="metric-label">Accuracy</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">&lt;30s</span>
                      <span className="metric-label">Alert Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Advanced Technology Stack</h2>
              <p className="section-subtitle">
                Cutting-edge technologies powering our disaster management platform
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="tech-card">
                <div className="tech-icon">
                  <FaSatellite />
                </div>
                <h4>Satellite Monitoring</h4>
                <p>Real-time satellite imagery and remote sensing for comprehensive area monitoring</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-card">
                <div className="tech-icon">
                  <FaMobileAlt />
                </div>
                <h4>Mobile Integration</h4>
                <p>Cross-platform mobile apps for citizens, authorities, and emergency responders</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-card">
                <div className="tech-icon">
                  <FaGlobe />
                </div>
                <h4>Cloud Infrastructure</h4>
                <p>Scalable cloud-based systems ensuring reliability and global accessibility</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-card">
                <div className="tech-icon">
                  <FaLeaf />
                </div>
                <h4>IoT Sensors</h4>
                <p>Network of intelligent sensors for environmental monitoring and data collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2>Ready to Protect Your Community?</h2>
              <p className="cta-subtitle">
                Join thousands of communities already protected by our AI-powered disaster management system
              </p>
              <div className="cta-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => setShowLoginModal(true)}
                >
                  <FaArrowRight className="me-2" />
                  Get Started Today
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-brand">
                <FaShieldAlt className="brand-icon" />
                <span className="brand-text" style={{ color: '#000000' }}>Suraksha AI</span>
              </div>
              <p className="footer-description">
                Protecting coastal and hilly communities through advanced AI technology and real-time disaster management solutions.
              </p>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Platform</h5>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#disaster-management">Disaster Management</a></li>
                <li><a href="#ai-alerts">AI Alerts</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Solutions</h5>
              <ul className="footer-links">
                <li><a href="#">Coastal Protection</a></li>
                <li><a href="#">Hilly Area Safety</a></li>
                <li><a href="#">Emergency Response</a></li>
                <li><a href="#">Community Safety</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Support</h5>
              <ul className="footer-links">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Training</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Contact</h5>
              <ul className="footer-links">
                <li><a href="mailto:info@suraksha-ai.com">info@suraksha-ai.com</a></li>
                <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li><a href="#">Emergency: 911</a></li>
                <li><a href="#">24/7 Support</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                © 2024 Suraksha AI. All rights reserved. Protecting communities through technology.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="social-links">
                <a href="#" className="social-link"><FaGlobe /></a>
                <a href="#" className="social-link"><FaMobileAlt /></a>
                <a href="#" className="social-link"><FaDesktop /></a>
                <a href="#" className="social-link"><FaTabletAlt /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{showLoginForm ? 'Login' : 'Choose Your Role'}</h3>
                <button 
                  className="close-btn"
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowLoginForm(false);
                  }}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
                {!showLoginForm ? (
                  <>
                    <div className="role-grid">
                      <div 
                        className="role-card"
                        onClick={() => handleLoginRoleSelect('citizen')}
                      >
                        <div className="role-icon">
                          <FaUser />
                        </div>
                        <h4>Citizen</h4>
                        <p>Receive alerts and report incidents in your area</p>
                      </div>
                      
                      <div 
                        className="role-card"
                        onClick={() => handleLoginRoleSelect('msme')}
                      >
                        <div className="role-icon">
                          <FaBuilding />
                        </div>
                        <h4>MSME Owner</h4>
                        <p>Protect your business with disaster management tools</p>
                      </div>
                      
                      <div 
                        className="role-card"
                        onClick={() => handleLoginRoleSelect('transport')}
                      >
                        <div className="role-icon">
                          <FaTruck />
                        </div>
                        <h4>Transport & Logistics</h4>
                        <p>Optimize routes and get real-time updates</p>
                      </div>
                      
                      <div 
                        className="role-card"
                        onClick={() => handleLoginRoleSelect('shop')}
                      >
                        <div className="role-icon">
                          <FaStore />
                        </div>
                        <h4>Shop Owner</h4>
                        <p>Connect your business to emergency alerts</p>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <p>Don't have an account? <button 
                        type="button" 
                        className="btn btn-link p-0"
                        onClick={() => {
                          setShowLoginModal(false);
                          setShowSignupModal(true);
                        }}
                      >
                        Register for {selectedRole === 'citizen' ? 'Citizen' : 
                                   selectedRole === 'msme' ? 'MSME Owner' :
                                   selectedRole === 'transport' ? 'Transport & Logistics' :
                                   selectedRole === 'shop' ? 'Shop Owner' : 'this role'}
                      </button></p>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleLoginSubmit}>
                    <div className="role-info mb-3">
                      <div className="role-icon">
                        {getRoleIcon(selectedRole)}
                      </div>
                      <div>
                        <h4>{getRoleTitle(selectedRole)} Login</h4>
                        <p>{getRoleDescription(selectedRole)}</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleLoginInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Password *</label>
                      <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginInputChange}
                          required
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Login
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => setShowLoginForm(false)}
                      >
                        Back
                      </button>
                    </div>
                    <div className="text-center mt-3">
                      <p>New to {selectedRole === 'citizen' ? 'Citizen' : 
                               selectedRole === 'msme' ? 'MSME Owner' :
                               selectedRole === 'transport' ? 'Transport & Logistics' :
                               selectedRole === 'shop' ? 'Shop Owner' : 'this role'}? 
                        <button 
                          type="button" 
                          className="btn btn-link p-0 ms-1"
                          onClick={() => {
                            setShowLoginModal(false);
                            setShowSignupModal(true);
                          }}
                        >
                          Register here
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSignupModal(false)}
          >
            <motion.div
              className="modal-content signup-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="role-info">
                  <div className="role-icon">
                    {getRoleIcon(selectedRole)}
                  </div>
                  <div>
                    <h3>Register as {selectedRole === 'citizen' ? 'Citizen' : 
                                   selectedRole === 'msme' ? 'MSME Owner' :
                                   selectedRole === 'transport' ? 'Transport & Logistics' :
                                   selectedRole === 'shop' ? 'Shop Owner' : 'User'}</h3>
                    <p>{getRoleDescription(selectedRole)}</p>
                  </div>
                </div>
                <button 
                  className="close-btn"
                  onClick={() => setShowSignupModal(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSignupSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Email Address *</label>
                      <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <div className="input-group">
                        <FaPhone className="input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Address *</label>
                      <div className="input-group">
                        <FaMapMarkerAlt className="input-icon" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Role-specific fields */}
                  {selectedRole === 'msme' && (
                    <div className="form-group">
                      <label>Business Type *</label>
                      <div className="input-group">
                        <FaBuilding className="input-icon" />
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select business type</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="services">Services</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {selectedRole === 'transport' && (
                    <div className="form-group">
                      <label>Vehicle Type *</label>
                      <div className="input-group">
                        <FaTruck className="input-icon" />
                        <select
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select vehicle type</option>
                          <option value="truck">Truck</option>
                          <option value="bus">Bus</option>
                          <option value="car">Car</option>
                          <option value="motorcycle">Motorcycle</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {selectedRole === 'shop' && (
                    <div className="form-group">
                      <label>Shop Type *</label>
                      <div className="input-group">
                        <FaStore className="input-icon" />
                        <select
                          name="shopType"
                          value={formData.shopType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select shop type</option>
                          <option value="grocery">Grocery</option>
                          <option value="electronics">Electronics</option>
                          <option value="clothing">Clothing</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Password *</label>
                      <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Confirm Password *</label>
                      <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          placeholder="Confirm your password"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Create Account
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={() => setShowSignupModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage; 