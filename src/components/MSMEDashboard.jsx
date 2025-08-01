import React, { useState } from 'react';
import {
  FaHome,
  FaCloudRain,
  FaBox,
  FaTruck,
  FaComments,
  FaUser,
  FaBell,
  FaSearch,
  FaBars,
  FaTimes,
  FaExclamationTriangle,
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
  FaStore
} from 'react-icons/fa';
import './MSMEDashboard.css';

const MSMEDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Dummy data for Climate Risk Monitor
  const climateAlerts = [
    {
      id: 1,
      type: 'rain',
      severity: 'warning',
      title: 'Heavy Rainfall Alert',
      description: 'Heavy rainfall expected in next 4 hours. Risk of flooding in low-lying areas.',
      time: '2 hours ago',
      impact: 'Medium',
      icon: FaCloudRain
    },
    {
      id: 2,
      type: 'flood',
      severity: 'danger',
      title: 'Flood Warning',
      description: 'River water levels rising. Evacuation may be required in affected areas.',
      time: '1 hour ago',
      impact: 'High',
      icon: FaExclamationTriangle
    },
    {
      id: 3,
      type: 'landslide',
      severity: 'info',
      title: 'Landslide Risk',
      description: 'Moderate risk of landslides in hilly regions. Avoid travel to affected areas.',
      time: '3 hours ago',
      impact: 'Low',
      icon: FaShieldAlt
    }
  ];

  // Dummy data for Product & Service Listing
  const products = [
    {
      id: 1,
      name: 'Organic Groceries Pack',
      category: 'Food & Beverages',
      availability: 'In Stock',
      price: '₹450',
      stock: 25,
      status: 'active'
    },
    {
      id: 2,
      name: 'Handcrafted Pottery',
      category: 'Handicrafts',
      availability: 'Limited Stock',
      price: '₹1,200',
      stock: 8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Ayurvedic Medicines',
      category: 'Healthcare',
      availability: 'Out of Stock',
      price: '₹350',
      stock: 0,
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Textile Products',
      category: 'Fashion',
      availability: 'In Stock',
      price: '₹800',
      stock: 15,
      status: 'active'
    }
  ];

  // Dummy data for Transport & Logistics Partners
  const transportPartners = [
    {
      id: 1,
      name: 'Quick Logistics',
      status: 'Available',
      eta: '2-3 hours',
      rating: 4.5,
      phone: '+91 98765 43210',
      location: 'Mumbai',
      vehicleType: 'Truck',
      capacity: '5 tons'
    },
    {
      id: 2,
      name: 'Express Delivery',
      status: 'Delayed',
      eta: '6-8 hours',
      rating: 4.2,
      phone: '+91 98765 43211',
      location: 'Delhi',
      vehicleType: 'Van',
      capacity: '2 tons',
      delayReason: 'Heavy traffic due to rain'
    },
    {
      id: 3,
      name: 'Reliable Transport',
      status: 'Available',
      eta: '1-2 hours',
      rating: 4.7,
      phone: '+91 98765 43212',
      location: 'Bangalore',
      vehicleType: 'Truck',
      capacity: '8 tons'
    },
    {
      id: 4,
      name: 'City Cargo',
      status: 'Unavailable',
      eta: 'N/A',
      rating: 4.0,
      phone: '+91 98765 43213',
      location: 'Chennai',
      vehicleType: 'Van',
      capacity: '3 tons',
      reason: 'Vehicle maintenance'
    }
  ];

  // Dummy data for Communication & Notifications
  const notifications = [
    {
      id: 1,
      type: 'customer',
      sender: 'Rahul Kumar',
      message: 'Interested in bulk order of organic groceries. Can you provide a quote?',
      time: '2 hours ago',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      type: 'government',
      sender: 'Local Administration',
      message: 'New tax compliance requirements for MSMEs. Please review attached documents.',
      time: '1 day ago',
      status: 'read',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'admin',
      sender: 'Platform Admin',
      message: 'Your business profile has been verified. You can now access premium features.',
      time: '2 days ago',
      status: 'read',
      priority: 'low'
    },
    {
      id: 4,
      type: 'customer',
      sender: 'Priya Sharma',
      message: 'When will my order be delivered? Order #MSME12345',
      time: '3 hours ago',
      status: 'unread',
      priority: 'high'
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'danger': return 'bg-red-100 border-red-500 text-red-700';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'info': return 'bg-blue-100 border-blue-500 text-blue-700';
      default: return 'bg-gray-100 border-gray-500 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Delayed': return 'bg-yellow-100 text-yellow-800';
      case 'Unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="msme-dashboard">
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
            <FaCloudRain className="nav-icon" />
            <span>Climate Monitor</span>
          </a>
          <a href="#" className="nav-item">
            <FaBox className="nav-icon" />
            <span>Products</span>
          </a>
          <a href="#" className="nav-item">
            <FaTruck className="nav-icon" />
            <span>Logistics</span>
          </a>
          <a href="#" className="nav-item">
            <FaComments className="nav-icon" />
            <span>Messages</span>
          </a>
          <a href="#" className="nav-item">
            <FaChartLine className="nav-icon" />
            <span>Analytics</span>
          </a>
          <a href="#" className="nav-item">
            <FaUsers className="nav-icon" />
            <span>Customers</span>
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
                placeholder="Search products, orders, customers..."
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
                <span className="notification-badge">3</span>
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
                <span className="user-name">Rajesh Kumar</span>
                <span className="user-role">MSME Owner</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">MSME Dashboard</h1>
            <p className="dashboard-subtitle">Manage your business operations and monitor risks</p>
          </div>

          {/* Business Overview Cards */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaChartLine className="section-icon" />
                Business Overview
              </h2>
              <p className="section-subtitle">Key metrics and performance indicators</p>
            </div>

            <div className="overview-cards-grid">
              <div className="overview-card">
                <div className="overview-icon revenue">
                  <FaChartLine />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">₹45,250</h3>
                  <p className="overview-label">Monthly Revenue</p>
                  <span className="overview-change positive">+12.5%</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon orders">
                  <FaBox />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">156</h3>
                  <p className="overview-label">Total Orders</p>
                  <span className="overview-change positive">+8.3%</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon customers">
                  <FaUsers />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">89</h3>
                  <p className="overview-label">Active Customers</p>
                  <span className="overview-change positive">+5.7%</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon products">
                  <FaStore />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">24</h3>
                  <p className="overview-label">Active Products</p>
                  <span className="overview-change neutral">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Risk Monitor */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaCloudRain className="section-icon" />
                Climate Risk Monitor
              </h2>
              <p className="section-subtitle">Current weather alerts and forecasts that may impact your business</p>
            </div>

            <div className="climate-alerts-grid">
              {climateAlerts.map((alert) => (
                <div key={alert.id} className={`climate-alert-card ${getSeverityColor(alert.severity)}`}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Product & Service Listing */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaBox className="section-icon" />
                Product & Service Listing
              </h2>
              <div className="section-actions">
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="btn btn-primary"
                >
                  <FaPlus className="btn-icon" />
                  Add Product
                </button>
              </div>
            </div>

            <div className="products-table-container">
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Availability</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="product-name">{product.name}</td>
                      <td className="product-category">{product.category}</td>
                      <td>
                        <span className={`availability-badge ${product.availability.toLowerCase().replace(' ', '-')}`}>
                          {product.availability}
                        </span>
                      </td>
                      <td className="product-price">{product.price}</td>
                      <td className="product-stock">{product.stock}</td>
                      <td>
                        <span className={`status-badge status-${product.status}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="product-actions">
                        <button className="action-btn edit">
                          <FaEdit />
                        </button>
                        <button className="action-btn delete">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transport & Logistics Partner Status */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaTruck className="section-icon" />
                Transport & Logistics Partner Status
              </h2>
              <p className="section-subtitle">Monitor your logistics partners and delivery status</p>
            </div>

            <div className="transport-partners-grid">
              {transportPartners.map((partner) => (
                <div key={partner.id} className="transport-partner-card">
                  <div className="partner-header">
                    <div className="partner-info">
                      <h4 className="partner-name">{partner.name}</h4>
                      <div className="partner-rating">
                        <FaStar className="star-icon" />
                        <span>{partner.rating}</span>
                      </div>
                    </div>
                    <span className={`status-badge ${getStatusColor(partner.status)}`}>
                      {partner.status}
                    </span>
                  </div>

                  <div className="partner-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{partner.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaTruck className="detail-icon" />
                      <span>{partner.vehicleType} - {partner.capacity}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>ETA: {partner.eta}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{partner.phone}</span>
                    </div>
                  </div>

                  {partner.delayReason && (
                    <div className="delay-reason">
                      <FaExclamationTriangle className="delay-icon" />
                      <span>{partner.delayReason}</span>
                    </div>
                  )}

                  {partner.reason && (
                    <div className="unavailable-reason">
                      <FaTimes className="unavailable-icon" />
                      <span>{partner.reason}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaClock className="section-icon" />
                Recent Orders
              </h2>
              <p className="section-subtitle">Latest customer orders and their status</p>
            </div>

            <div className="orders-list">
              <div className="order-item">
                <div className="order-info">
                  <h4 className="order-id">#ORD-2024-001</h4>
                  <p className="order-customer">Rahul Kumar</p>
                  <p className="order-items">Organic Groceries Pack x2, Handcrafted Pottery x1</p>
                </div>
                <div className="order-status">
                  <span className="status-badge status-active">Processing</span>
                  <p className="order-amount">₹1,650</p>
                  <p className="order-date">Today, 2:30 PM</p>
                </div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <h4 className="order-id">#ORD-2024-002</h4>
                  <p className="order-customer">Priya Sharma</p>
                  <p className="order-items">Textile Products x3</p>
                </div>
                <div className="order-status">
                  <span className="status-badge status-active">Shipped</span>
                  <p className="order-amount">₹2,400</p>
                  <p className="order-date">Yesterday, 4:15 PM</p>
                </div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <h4 className="order-id">#ORD-2024-003</h4>
                  <p className="order-customer">Amit Patel</p>
                  <p className="order-items">Ayurvedic Medicines x1</p>
                </div>
                <div className="order-status">
                  <span className="status-badge status-inactive">Delivered</span>
                  <p className="order-amount">₹350</p>
                  <p className="order-date">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaExclamationTriangle className="section-icon" />
                Inventory Alerts
              </h2>
              <p className="section-subtitle">Low stock warnings and inventory management</p>
            </div>

            <div className="inventory-alerts-grid">
              <div className="inventory-alert critical">
                <div className="alert-icon">
                  <FaExclamationTriangle />
                </div>
                <div className="alert-content">
                  <h4>Critical Stock Alert</h4>
                  <p>Ayurvedic Medicines - Only 0 units remaining</p>
                  <button className="btn btn-small">Restock Now</button>
                </div>
              </div>
              <div className="inventory-alert warning">
                <div className="alert-icon">
                  <FaClock />
                </div>
                <div className="alert-content">
                  <h4>Low Stock Warning</h4>
                  <p>Handcrafted Pottery - Only 8 units remaining</p>
                  <button className="btn btn-small">Order More</button>
                </div>
              </div>
              <div className="inventory-alert info">
                <div className="alert-icon">
                  <FaCheckCircle />
                </div>
                <div className="alert-content">
                  <h4>Stock Update</h4>
                  <p>Organic Groceries Pack - 25 units in stock</p>
                  <span className="status-text">Good</span>
                </div>
              </div>
            </div>
          </div>

          {/* Communication & Notifications */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaComments className="section-icon" />
                Communication & Notifications
              </h2>
              <p className="section-subtitle">Recent messages and alerts from customers, government, and platform</p>
            </div>

            <div className="notifications-list">
              {notifications.map((notification) => (
                <div key={notification.id} className={`notification-card ${notification.status} ${notification.priority}`}>
                  <div className="notification-header">
                    <div className="sender-info">
                      <div className={`sender-avatar ${notification.type}`}>
                        {notification.type === 'customer' && <FaUser />}
                        {notification.type === 'government' && <FaShieldAlt />}
                        {notification.type === 'admin' && <FaCog />}
                      </div>
                      <div className="sender-details">
                        <h5 className="sender-name">{notification.sender}</h5>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    </div>
                    <div className="notification-actions">
                      <button className="action-btn">
                        <FaEye />
                      </button>
                      <button className="action-btn">
                        <FaPhone />
                      </button>
                    </div>
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  {notification.status === 'unread' && (
                    <div className="unread-indicator"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MSMEDashboard; 