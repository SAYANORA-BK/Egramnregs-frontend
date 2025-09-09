import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, X, Eye, Trash2 } from 'lucide-react';

const Notifications=()=> {
  const [notifications, setNotifications] = useState([
    {
      id: 'N001',
      title: 'Job Card Application Approved',
      message: 'Your job card application (JC001) has been approved. You can now apply for work opportunities.',
      type: 'success' as const,
      read: false,
      createdAt: '2024-01-22T10:30:00Z',
      actionUrl: '/job-card'
    },
    {
      id: 'N002',
      title: 'New Work Available',
      message: 'Road Construction work is now available in Ward 3. Apply before 2024-01-25.',
      type: 'info' as const,
      read: false,
      createdAt: '2024-01-21T14:15:00Z',
      actionUrl: '/work-list'
    },
    {
      id: 'N003',
      title: 'Application Under Review',
      message: 'Your job application for Pond Cleaning project is currently under review by the Panchayath office.',
      type: 'warning' as const,
      read: true,
      createdAt: '2024-01-20T09:45:00Z',
      actionUrl: '/application-status'
    },
    {
      id: 'N004',
      title: 'Payment Processed',
      message: 'Your payment of ₹4,280 for February work has been processed and credited to your account.',
      type: 'success' as const,
      read: true,
      createdAt: '2024-01-19T16:20:00Z'
    },
    {
      id: 'N005',
      title: 'Document Required',
      message: 'Additional bank statement required for your job card application. Please upload within 3 days.',
      type: 'warning' as const,
      read: false,
      createdAt: '2024-01-18T11:00:00Z',
      actionUrl: '/job-card'
    },
    {
      id: 'N006',
      title: 'Work Completion Reminder',
      message: 'Tree Plantation work is scheduled to complete tomorrow. Please ensure attendance.',
      type: 'info' as const,
      read: true,
      createdAt: '2024-01-17T08:30:00Z'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-orange-600" />;
      case 'error':
        return <X className="h-5 w-5 text-red-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getNotificationBg = (type: string, read: boolean) => {
    const opacity = read ? '50' : '100';
    switch (type) {
      case 'success':
        return `bg-emerald-${opacity}`;
      case 'warning':
        return `bg-orange-${opacity}`;
      case 'error':
        return `bg-red-${opacity}`;
      default:
        return `bg-blue-${opacity}`;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Bell className="h-6 w-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {unreadCount}
              </span>
            )}
          </div>
          
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { key: 'all', label: 'All', count: notifications.length },
            { key: 'unread', label: 'Unread', count: unreadCount },
            { key: 'read', label: 'Read', count: notifications.length - unreadCount }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === tab.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow ${
              !notification.read ? 'border-l-4 border-l-emerald-500' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${getNotificationBg(notification.type, notification.read)}`}>
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`text-sm font-medium ${
                      notification.read ? 'text-gray-700' : 'text-gray-900'
                    }`}>
                      {notification.title}
                    </h3>
                    <p className={`text-sm mt-1 ${
                      notification.read ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {formatDate(notification.createdAt)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-1 text-gray-400 hover:text-emerald-600 transition-colors"
                        title="Mark as read"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    )}
                    
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete notification"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {notification.actionUrl && (
                  <div className="mt-3">
                    <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                      View Details →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
          <p className="text-gray-500">
            {filter === 'unread' 
              ? "You're all caught up! No unread notifications."
              : filter === 'read'
              ? "No read notifications to show."
              : "You don't have any notifications yet."
            }
          </p>
        </div>
      )}
    </div>
  );
}
export default Notifications;