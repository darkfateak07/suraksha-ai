import React, { useState } from 'react';
import {
  FaHome,
  FaRoute,
  FaExclamationTriangle,
  FaTruck,
  FaComments,
  FaUser,
  FaBell,
  FaSearch,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaEdit,
  FaTrash,
  FaPlus,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaEye,
  FaEyeSlash,
  FaDownload,
  FaUpload,
  FaFilter,
  FaSort,
  FaStore,
  FaMap,
  FaRoad,
  FaTrafficLight,
  FaCar,
  FaMotorcycle,
  FaShip,
  FaPlane
} from 'react-icons/fa';
import './LogisticsDashboard.css';

const LogisticsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('routes');
  const [showAddRoute, setShowAddRoute] = useState(false);

  // Dummy data for Active Transport Routes
  const activeRoutes = [
    {
      id: 1,
      routeName: 'Mumbai to Pune Express',
      status: 'Active',
      vehicleType: 'Truck',
      driver: 'Rajesh Kumar',
      currentLocation: 'Mumbai',
      destination: 'Pune',
      eta: '2 hours',
      loadType: 'Electronics',
      distance: '150 km',
      progress: 65
    },
    {
      id: 2,
      routeName: 'Delhi to Jaipur Route',
      status: 'Delayed',
      vehicleType: 'Van',
      driver: 'Amit Singh',
      currentLocation: 'Delhi',
      destination: 'Jaipur',
      eta: '4 hours',
      loadType: 'Textiles',
      distance: '280 km',
      progress: 30,
      delayReason: 'Heavy traffic due to rain'
    },
    {
      id: 3,
      routeName: 'Bangalore to Chennai',
      status: 'Blocked',
      vehicleType: 'Truck',
      driver: 'Priya Sharma',
      currentLocation: 'Bangalore',
      destination: 'Chennai',
      eta: 'N/A',
      loadType: 'Machinery',
      distance: '350 km',
      progress: 0,
      blockReason: 'Road closed due to landslide'
    },
    {
      id: 4,
      routeName: 'Kolkata to Bhubaneswar',
      status: 'Active',
      vehicleType: 'Truck',
      driver: 'Suresh Patel',
      currentLocation: 'Kolkata',
      destination: 'Bhubaneswar',
      eta: '1.5 hours',
      loadType: 'Agricultural',
      distance: '450 km',
      progress: 85
    }
  ];

  // Dummy data for Emergency Alerts
  const emergencyAlerts = [
    {
      id: 1,
      type: 'landslide',
      severity: 'critical',
      title: 'Landslide Alert - NH48',
      description: 'Major landslide reported on National Highway 48 between Mumbai and Pune. Road completely blocked.',
      location: 'NH48, Km 45',
      time: '30 minutes ago',
      impact: 'High',
      icon: FaExclamationTriangle
    },
    {
      id: 2,
      type: 'flood',
      severity: 'warning',
      title: 'Flood Warning - Coastal Areas',
      description: 'Heavy rainfall causing flooding in coastal regions. Multiple roads underwater.',
      location: 'Coastal Highway',
      time: '1 hour ago',
      impact: 'Medium',
      icon: FaRoad
    },
    {
      id: 3,
      type: 'road_closure',
      severity: 'info',
      title: 'Road Maintenance - Expressway',
      description: 'Scheduled maintenance on Mumbai-Pune Expressway. Expect delays.',
      location: 'Mumbai-Pune Expressway',
      time: '2 hours ago',
      impact: 'Low',
      icon: FaTrafficLight
    }
  ];

  // Dummy data for MSME & Shop Requests
  const transportRequests = [
    {
      id: 1,
      requester: 'Kumar\'s Electronics',
      type: 'MSME',
      location: 'Mumbai, Maharashtra',
      pickupTime: 'Today, 3:00 PM',
      loadType: 'Electronics',
      weight: '500 kg',
      priority: 'High',
      status: 'Pending',
      contact: '+91 98765 43210'
    },
    {
      id: 2,
      requester: 'Fresh Grocery Store',
      type: 'Shop',
      location: 'Pune, Maharashtra',
      pickupTime: 'Tomorrow, 9:00 AM',
      loadType: 'Perishables',
      weight: '200 kg',
      priority: 'Medium',
      status: 'Accepted',
      contact: '+91 98765 43211'
    },
    {
      id: 3,
      requester: 'Textile Manufacturing Co.',
      type: 'MSME',
      location: 'Ahmedabad, Gujarat',
      pickupTime: 'Today, 6:00 PM',
      loadType: 'Textiles',
      weight: '1000 kg',
      priority: 'High',
      status: 'In Progress',
      contact: '+91 98765 43212'
    },
    {
      id: 4,
      requester: 'Local Hardware Store',
      type: 'Shop',
      location: 'Delhi, NCR',
      pickupTime: 'Tomorrow, 11:00 AM',
      loadType: 'Hardware',
      weight: '300 kg',
      priority: 'Low',
      status: 'Pending',
      contact: '+91 98765 43213'
    }
  ];

  // Dummy data for Alternate Safe Routes
  const alternateRoutes = [
    {
      id: 1,
      originalRoute: 'Mumbai to Pune via NH48',
      alternateRoute: 'Mumbai to Pune via Expressway',
      reason: 'Landslide on NH48',
      distance: '+20 km',
      timeImpact: '+30 minutes',
      safety: 'High',
      status: 'Recommended'
    },
    {
      id: 2,
      originalRoute: 'Delhi to Jaipur via NH8',
      alternateRoute: 'Delhi to Jaipur via NH11',
      reason: 'Heavy traffic on NH8',
      distance: '+15 km',
      timeImpact: '+20 minutes',
      safety: 'Medium',
      status: 'Available'
    },
    {
      id: 3,
      originalRoute: 'Bangalore to Chennai via NH7',
      alternateRoute: 'Bangalore to Chennai via NH48',
      reason: 'Road closure on NH7',
      distance: '+50 km',
      timeImpact: '+1 hour',
      safety: 'High',
      status: 'Recommended'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'alert',
      sender: 'Traffic Control',
      message: 'New route blockage reported on NH48. Update your drivers.',
      time: '10 minutes ago',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      type: 'request',
      sender: 'MSME Partner',
      message: 'Urgent pickup request from Kumar Electronics. Priority: High',
      time: '30 minutes ago',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 3,
      type: 'info',
      sender: 'Weather Alert',
      message: 'Heavy rainfall expected in coastal areas. Plan routes accordingly.',
      time: '1 hour ago',
      status: 'read',
      priority: 'medium'
    },
    {
      id: 4,
      type: 'success',
      sender: 'System',
      message: 'Route optimization completed for 5 active deliveries.',
      time: '2 hours ago',
      status: 'read',
      priority: 'low'
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Delayed': return 'bg-yellow-100 text-yellow-800';
      case 'Blocked': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'Accepted': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 border-red-500 text-red-700';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'info': return 'bg-blue-100 border-blue-500 text-blue-700';
      default: return 'bg-gray-100 border-gray-500 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="logistics-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand">
            <FaShieldAlt className="brand-icon" />
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
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <FaRoute className="nav-icon" />
            <span>Active Routes</span>
          </a>
          <a href="#" className="nav-item">
            <FaExclamationTriangle className="nav-icon" />
            <span>Emergency Alerts</span>
          </a>
          <a href="#" className="nav-item">
            <FaStore className="nav-icon" />
            <span>MSME Requests</span>
          </a>
          <a href="#" className="nav-item">
            <FaMap className="nav-icon" />
            <span>Route Planning</span>
          </a>
          <a href="#" className="nav-item">
            <FaChartLine className="nav-icon" />
            <span>Analytics</span>
          </a>
          <a href="#" className="nav-item">
            <FaUsers className="nav-icon" />
            <span>Drivers</span>
          </a>
          <a href="#" className="nav-item">
            <FaCog className="nav-icon" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <FaSignOutAlt className="nav-icon" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <header className="top-navbar">
          <div className="navbar-left">
            <button
              onClick={() => setSidebarOpen(true)}
              className="sidebar-toggle"
            >
              <FaBars />
            </button>
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search routes, alerts, requests..."
                className="search-input"
              />
            </div>
          </div>

          <div className="navbar-right">
            <div className="notification-section">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="notification-btn"
              >
                <FaBell />
                <span className="notification-badge">4</span>
              </button>

              {showNotifications && (
                <div className="notification-panel">
                  <div className="notification-header">
                    <h5>Notifications</h5>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="close-btn"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="notification-list">
                    {notifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className={`notification-item ${notification.status}`}>
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
              <div className="user-info">
                <span className="user-name">Logistics Manager</span>
                <span className="user-role">Transport Partner</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Logistics Partner Dashboard</h1>
            <p className="dashboard-subtitle">Manage transport operations and monitor route safety</p>
          </div>

          {/* Business Overview Cards */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaChartLine className="section-icon" />
                Operations Overview
              </h2>
              <p className="section-subtitle">Key metrics and performance indicators</p>
            </div>

            <div className="overview-cards-grid">
              <div className="overview-card">
                <div className="overview-icon revenue">
                  <FaTruck />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">24</h3>
                  <p className="overview-label">Active Routes</p>
                  <span className="overview-change positive">+3</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon orders">
                  <FaRoute />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">156</h3>
                  <p className="overview-label">Total Deliveries</p>
                  <span className="overview-change positive">+12.5%</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon customers">
                  <FaUsers />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">18</h3>
                  <p className="overview-label">Active Drivers</p>
                  <span className="overview-change positive">+2</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon products">
                  <FaStore />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">8</h3>
                  <p className="overview-label">Pending Requests</p>
                  <span className="overview-change neutral">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Transport Routes */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaRoute className="section-icon" />
                Active Transport Routes
              </h2>
              <div className="section-actions">
                <button
                  onClick={() => setShowAddRoute(true)}
                  className="btn btn-primary"
                >
                  <FaPlus className="btn-icon" />
                  Add Route
                </button>
              </div>
            </div>

            <div className="routes-list">
              {activeRoutes.map((route) => (
                <div key={route.id} className="route-item">
                  <div className="route-header">
                    <div className="route-info">
                      <h4 className="route-name">{route.routeName}</h4>
                      <div className="route-details">
                        <span className="vehicle-type">{route.vehicleType}</span>
                        <span className="driver-name">Driver: {route.driver}</span>
                      </div>
                    </div>
                    <span className={`status-badge ${getStatusColor(route.status)}`}>
                      {route.status}
                    </span>
                  </div>

                  <div className="route-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${route.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{route.progress}% Complete</span>
                  </div>

                  <div className="route-details-grid">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>From: {route.currentLocation}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>To: {route.destination}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>ETA: {route.eta}</span>
                    </div>
                    <div className="detail-item">
                      <FaTruck className="detail-icon" />
                      <span>Load: {route.loadType}</span>
                    </div>
                    <div className="detail-item">
                      <FaRoad className="detail-icon" />
                      <span>Distance: {route.distance}</span>
                    </div>
                  </div>

                  {route.delayReason && (
                    <div className="delay-reason">
                      <FaExclamationTriangle className="delay-icon" />
                      <span>{route.delayReason}</span>
                    </div>
                  )}

                  {route.blockReason && (
                    <div className="block-reason">
                      <FaTimes className="block-icon" />
                      <span>{route.blockReason}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Alerts */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaExclamationTriangle className="section-icon" />
                Emergency Alerts
              </h2>
              <p className="section-subtitle">Real-time alerts about road conditions and hazards</p>
            </div>

            <div className="emergency-alerts-grid">
              {emergencyAlerts.map((alert) => (
                <div key={alert.id} className={`emergency-alert-card ${getSeverityColor(alert.severity)}`}>
                  <div className="alert-header">
                    <alert.icon className="alert-icon" />
                    <div className="alert-info">
                      <h4 className="alert-title">{alert.title}</h4>
                      <span className="alert-time">{alert.time}</span>
                    </div>
                    <span className={`impact-badge impact-${alert.impact.toLowerCase()}`}>
                      {alert.impact}
                    </span>
                  </div>
                  <p className="alert-description">{alert.description}</p>
                  <div className="alert-location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{alert.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MSME & Shop Requests */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaStore className="section-icon" />
                MSME & Shop Requests
              </h2>
              <p className="section-subtitle">Transport and pickup requests from business partners</p>
            </div>

            <div className="requests-table-container">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>Requester</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Pickup Time</th>
                    <th>Load Type</th>
                    <th>Weight</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transportRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="requester-name">{request.requester}</td>
                      <td>
                        <span className={`type-badge type-${request.type.toLowerCase()}`}>
                          {request.type}
                        </span>
                      </td>
                      <td className="request-location">{request.location}</td>
                      <td className="pickup-time">{request.pickupTime}</td>
                      <td className="load-type">{request.loadType}</td>
                      <td className="weight">{request.weight}</td>
                      <td>
                        <span className={`priority-badge ${getPriorityColor(request.priority)}`}>
                          {request.priority}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="request-actions">
                        <button className="action-btn edit">
                          <FaEdit />
                        </button>
                        <button className="action-btn">
                          <FaPhone />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alternate Safe Routes */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaMap className="section-icon" />
                Alternate Safe Routes
              </h2>
              <p className="section-subtitle">Suggested alternative paths for disrupted routes</p>
            </div>

            <div className="alternate-routes-grid">
              {alternateRoutes.map((route) => (
                <div key={route.id} className="alternate-route-card">
                  <div className="route-header">
                    <div className="route-info">
                      <h4 className="route-title">Route Alternative</h4>
                      <div className="route-comparison">
                        <div className="original-route">
                          <span className="route-label">Original:</span>
                          <span className="route-path">{route.originalRoute}</span>
                        </div>
                        <div className="alternate-route">
                          <span className="route-label">Alternate:</span>
                          <span className="route-path">{route.alternateRoute}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`safety-badge safety-${route.safety.toLowerCase()}`}>
                      {route.safety} Safety
                    </span>
                  </div>

                  <div className="route-details">
                    <div className="detail-item">
                      <FaExclamationTriangle className="detail-icon" />
                      <span>Reason: {route.reason}</span>
                    </div>
                    <div className="detail-item">
                      <FaRoad className="detail-icon" />
                      <span>Distance: {route.distance}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>Time Impact: {route.timeImpact}</span>
                    </div>
                  </div>

                  <div className="route-actions">
                    <button className="btn btn-primary btn-small">
                      View Route
                    </button>
                    <button className="btn btn-secondary btn-small">
                      Accept Route
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LogisticsDashboard; 