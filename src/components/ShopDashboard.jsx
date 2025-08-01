import React, { useState } from 'react';
import {
  FaHome,
  FaBox,
  FaTruck,
  FaCloudRain,
  FaStore,
  FaUser,
  FaUserTie,
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
  FaShoppingCart,
  FaExclamationCircle,
  FaHandshake,
  FaIndustry,
  FaWarehouse,
  FaShoppingBag,
  FaClipboardList
} from 'react-icons/fa';
import './ShopDashboard.css';

const ShopDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('inventory');
  const [showAddItem, setShowAddItem] = useState(false);

  // Dummy data for Inventory Overview
  const inventoryItems = [
    {
      id: 1,
      name: 'Rice (Basmati)',
      category: 'Grains',
      currentStock: 150,
      unit: 'kg',
      minStock: 50,
      status: 'Good',
      supplier: 'Local Grain Supplier',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Cooking Oil',
      category: 'Oils',
      currentStock: 25,
      unit: 'liters',
      minStock: 30,
      status: 'Low',
      supplier: 'Oil Distributors Ltd',
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'Sugar',
      category: 'Essentials',
      currentStock: 0,
      unit: 'kg',
      minStock: 20,
      status: 'Out of Stock',
      supplier: 'Sugar Mills Co.',
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'Tea Bags',
      category: 'Beverages',
      currentStock: 200,
      unit: 'packets',
      minStock: 50,
      status: 'Good',
      supplier: 'Tea Traders',
      lastUpdated: '5 hours ago'
    },
    {
      id: 5,
      name: 'Soap Bars',
      category: 'Hygiene',
      currentStock: 15,
      unit: 'pieces',
      minStock: 25,
      status: 'Low',
      supplier: 'Clean Products',
      lastUpdated: '1 day ago'
    },
    {
      id: 6,
      name: 'Biscuits',
      category: 'Snacks',
      currentStock: 80,
      unit: 'packets',
      minStock: 30,
      status: 'Good',
      supplier: 'Bakery Foods',
      lastUpdated: '4 hours ago'
    }
  ];

  // Dummy data for Order & Delivery Requests
  const deliveryRequests = [
    {
      id: 1,
      itemName: 'Rice (Basmati)',
      quantity: '100 kg',
      supplier: 'Local Grain Supplier',
      requestDate: 'Today, 10:30 AM',
      status: 'Pending',
      priority: 'High',
      expectedDelivery: 'Tomorrow',
      contact: '+91 98765 43210'
    },
    {
      id: 2,
      itemName: 'Cooking Oil',
      quantity: '50 liters',
      supplier: 'Oil Distributors Ltd',
      requestDate: 'Yesterday, 3:15 PM',
      status: 'Confirmed',
      priority: 'Medium',
      expectedDelivery: 'Today',
      contact: '+91 98765 43211'
    },
    {
      id: 3,
      itemName: 'Sugar',
      quantity: '25 kg',
      supplier: 'Sugar Mills Co.',
      requestDate: '2 days ago',
      status: 'In Transit',
      priority: 'High',
      expectedDelivery: 'Today',
      contact: '+91 98765 43212'
    },
    {
      id: 4,
      itemName: 'Soap Bars',
      quantity: '100 pieces',
      supplier: 'Clean Products',
      requestDate: '3 days ago',
      status: 'Delivered',
      priority: 'Low',
      expectedDelivery: 'Completed',
      contact: '+91 98765 43213'
    }
  ];

  // Dummy data for Weather-based Alerts
  const weatherAlerts = [
    {
      id: 1,
      type: 'rain',
      severity: 'warning',
      title: 'Heavy Rainfall Alert',
      description: 'Heavy rainfall expected in next 6 hours. May affect delivery schedules and road conditions.',
      time: '1 hour ago',
      impact: 'Medium',
      icon: FaCloudRain
    },
    {
      id: 2,
      type: 'flood',
      severity: 'critical',
      title: 'Flood Warning',
      description: 'River water levels rising. Low-lying areas may be affected. Consider stockpiling essential items.',
      time: '30 minutes ago',
      impact: 'High',
      icon: FaExclamationTriangle
    },
    {
      id: 3,
      type: 'storm',
      severity: 'info',
      title: 'Storm Alert',
      description: 'Strong winds and thunderstorms expected. Secure outdoor items and check delivery routes.',
      time: '2 hours ago',
      impact: 'Low',
      icon: FaExclamationCircle
    }
  ];

  // Dummy data for MSME Supplier Offers
  const msmeSuppliers = [
    {
      id: 1,
      name: 'Fresh Farm Produce',
      type: 'MSME',
      category: 'Vegetables & Fruits',
      location: '2 km away',
      rating: 4.5,
      phone: '+91 98765 43220',
      offers: ['Fresh vegetables', 'Organic fruits', 'Daily delivery'],
      status: 'Available',
      minOrder: '₹500'
    },
    {
      id: 2,
      name: 'Local Dairy Farm',
      type: 'MSME',
      category: 'Dairy Products',
      location: '5 km away',
      rating: 4.3,
      phone: '+91 98765 43221',
      offers: ['Fresh milk', 'Curd', 'Butter'],
      status: 'Available',
      minOrder: '₹300'
    },
    {
      id: 3,
      name: 'Artisan Bakery',
      type: 'MSME',
      category: 'Bakery Items',
      location: '1 km away',
      rating: 4.7,
      phone: '+91 98765 43222',
      offers: ['Fresh bread', 'Cakes', 'Pastries'],
      status: 'Limited',
      minOrder: '₹200'
    },
    {
      id: 4,
      name: 'Handcrafted Goods',
      type: 'MSME',
      category: 'Handicrafts',
      location: '3 km away',
      rating: 4.2,
      phone: '+91 98765 43223',
      offers: ['Handmade items', 'Gift products', 'Custom orders'],
      status: 'Available',
      minOrder: '₹1000'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'alert',
      sender: 'Inventory System',
      message: 'Low stock alert: Cooking Oil is running low. Consider reordering.',
      time: '15 minutes ago',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      type: 'delivery',
      sender: 'Local Grain Supplier',
      message: 'Your rice order has been confirmed and will be delivered tomorrow.',
      time: '1 hour ago',
      status: 'unread',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'weather',
      sender: 'Weather Alert',
      message: 'Heavy rainfall expected. Check delivery schedules and stock levels.',
      time: '2 hours ago',
      status: 'read',
      priority: 'high'
    },
    {
      id: 4,
      type: 'supplier',
      sender: 'Fresh Farm Produce',
      message: 'New seasonal vegetables available. Special discount for bulk orders.',
      time: '3 hours ago',
      status: 'read',
      priority: 'low'
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'Confirmed': return 'bg-blue-100 text-blue-800';
      case 'In Transit': return 'bg-purple-100 text-purple-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Limited': return 'bg-yellow-100 text-yellow-800';
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
    <div className="shop-dashboard">
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
            <FaBox className="nav-icon" />
            <span>Inventory</span>
          </a>
          <a href="#" className="nav-item">
            <FaTruck className="nav-icon" />
            <span>Orders</span>
          </a>
          <a href="#" className="nav-item">
            <FaCloudRain className="nav-icon" />
            <span>Weather Alerts</span>
          </a>
          <a href="#" className="nav-item">
            <FaStore className="nav-icon" />
            <span>Suppliers</span>
          </a>
          <a href="#" className="nav-item">
            <FaChartLine className="nav-icon" />
            <span>Analytics</span>
          </a>
          <a href="#" className="nav-item">
            <FaUserTie className="nav-icon" />
            <span>Staffs</span>
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
                placeholder="Search inventory, orders, suppliers..."
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
                <span className="user-name">Shop Owner</span>
                <span className="user-role">Local Store</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Shop Owner Dashboard</h1>
            <p className="dashboard-subtitle">Manage inventory, orders, and supplier relationships</p>
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
                  <FaBox />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">156</h3>
                  <p className="overview-label">Total Items</p>
                  <span className="overview-change positive">+12</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon orders">
                  <FaShoppingCart />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">24</h3>
                  <p className="overview-label">Pending Orders</p>
                  <span className="overview-change positive">+3</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon customers">
                  <FaUsers />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">89</h3>
                  <p className="overview-label">Daily Customers</p>
                  <span className="overview-change positive">+8.5%</span>
                </div>
              </div>
              <div className="overview-card">
                <div className="overview-icon products">
                  <FaStore />
                </div>
                <div className="overview-content">
                  <h3 className="overview-value">₹45,250</h3>
                  <p className="overview-label">Daily Revenue</p>
                  <span className="overview-change positive">+15.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Overview */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaBox className="section-icon" />
                Inventory Overview
              </h2>
              <div className="section-actions">
                <button
                  onClick={() => setShowAddItem(true)}
                  className="btn btn-primary"
                >
                  <FaPlus className="btn-icon" />
                  Add Item
                </button>
              </div>
            </div>

            <div className="inventory-table-container">
              <table className="inventory-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Current Stock</th>
                    <th>Min Stock</th>
                    <th>Status</th>
                    <th>Supplier</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.id}>
                      <td className="item-name">{item.name}</td>
                      <td className="item-category">{item.category}</td>
                      <td className="current-stock">
                        {item.currentStock} {item.unit}
                      </td>
                      <td className="min-stock">
                        {item.minStock} {item.unit}
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="supplier-name">{item.supplier}</td>
                      <td className="last-updated">{item.lastUpdated}</td>
                      <td className="item-actions">
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

          {/* Order & Delivery Requests */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaTruck className="section-icon" />
                Order & Delivery Requests
              </h2>
              <p className="section-subtitle">Track your delivery requests and order status</p>
            </div>

            <div className="delivery-requests-list">
              {deliveryRequests.map((request) => (
                <div key={request.id} className="delivery-request-item">
                  <div className="request-header">
                    <div className="request-info">
                      <h4 className="request-item">{request.itemName}</h4>
                      <div className="request-details">
                        <span className="quantity">Qty: {request.quantity}</span>
                        <span className="supplier">Supplier: {request.supplier}</span>
                      </div>
                    </div>
                    <span className={`status-badge ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>

                  <div className="request-details-grid">
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>Requested: {request.requestDate}</span>
                    </div>
                    <div className="detail-item">
                      <FaTruck className="detail-icon" />
                      <span>Expected: {request.expectedDelivery}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{request.contact}</span>
                    </div>
                    <div className="detail-item">
                      <FaExclamationTriangle className="detail-icon" />
                      <span>Priority: {request.priority}</span>
                    </div>
                  </div>

                  <div className="request-actions">
                    <button className="btn btn-small">
                      Track Order
                    </button>
                    <button className="btn btn-small btn-secondary">
                      Contact Supplier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather-based Alerts */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaCloudRain className="section-icon" />
                Weather-based Alerts
              </h2>
              <p className="section-subtitle">Real-time weather alerts that may impact shop operations</p>
            </div>

            <div className="weather-alerts-grid">
              {weatherAlerts.map((alert) => (
                <div key={alert.id} className={`weather-alert-card ${getSeverityColor(alert.severity)}`}>
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

          {/* MSME Supplier Offers */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FaStore className="section-icon" />
                MSME Supplier Offers
              </h2>
              <p className="section-subtitle">Nearby MSMEs offering products and services</p>
            </div>

            <div className="suppliers-grid">
              {msmeSuppliers.map((supplier) => (
                <div key={supplier.id} className="supplier-card">
                  <div className="supplier-header">
                    <div className="supplier-info">
                      <h4 className="supplier-name">{supplier.name}</h4>
                      <div className="supplier-rating">
                        <FaStar className="star-icon" />
                        <span>{supplier.rating}</span>
                      </div>
                    </div>
                    <span className={`status-badge ${getStatusColor(supplier.status)}`}>
                      {supplier.status}
                    </span>
                  </div>

                  <div className="supplier-details">
                    <div className="detail-item">
                      <FaIndustry className="detail-icon" />
                      <span>{supplier.category}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{supplier.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="detail-item">
                      <FaClipboardList className="detail-icon" />
                      <span>Min Order: {supplier.minOrder}</span>
                    </div>
                  </div>

                  <div className="supplier-offers">
                    <h5>Offers:</h5>
                    <ul className="offers-list">
                      {supplier.offers.map((offer, index) => (
                        <li key={index} className="offer-item">
                          <FaCheckCircle className="offer-icon" />
                          <span>{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="supplier-actions">
                    <button className="btn btn-primary btn-small">
                      <FaHandshake className="btn-icon" />
                      Request Quote
                    </button>
                    <button className="btn btn-secondary btn-small">
                      <FaPhone className="btn-icon" />
                      Contact
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

export default ShopDashboard; 