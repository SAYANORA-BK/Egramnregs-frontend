import React from 'react';
import { Users, Shield, BarChart3, DollarSign, TrendingUp, MapPin, Settings, AlertCircle } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function AdminDashboard() {
  const systemUsers = [
    { id: 'U001', name: 'Dr. Lakshmi Devi', role: 'District', location: 'Thiruvananthapuram', status: 'Active', lastLogin: '2024-01-22' },
    { id: 'U002', name: 'Suresh Menon', role: 'Block', location: 'Kochi Block', status: 'Active', lastLogin: '2024-01-21' },
    { id: 'U003', name: 'Priya Nair', role: 'Panchayath', location: 'Neyyattinkara', status: 'Inactive', lastLogin: '2024-01-18' }
  ];

  const systemMetrics = [
    { metric: 'System Uptime', value: '99.8%', status: 'Excellent' },
    { metric: 'Data Accuracy', value: '97.2%', status: 'Good' },
    { metric: 'User Satisfaction', value: '4.6/5', status: 'Excellent' },
    { metric: 'Response Time', value: '1.2s', status: 'Good' }
  ];

  const userColumns = [
    { key: 'id', label: 'User ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'location', label: 'Location' },
    { 
      key: 'status', 
      label: 'Status',
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      )
    },
    { key: 'lastLogin', label: 'Last Login' }
  ];

  const metricsColumns = [
    { key: 'metric', label: 'System Metric' },
    { key: 'value', label: 'Current Value' },
    { 
      key: 'status', 
      label: 'Status',
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Excellent' ? 'bg-emerald-100 text-emerald-800' :
          status === 'Good' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">System Administration</h1>
        <p className="text-gray-300">Manage users, monitor system performance, and analyze nationwide metrics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="25,847"
          icon={Users}
          change={{ value: "+156 this month", trend: 'up' }}
          color="blue"
        />
        <StatCard
          title="System Health"
          value="98.5%"
          icon={Shield}
          color="emerald"
        />
        <StatCard
          title="Total Budget"
          value="₹12,450 Cr"
          icon={DollarSign}
          color="purple"
        />
        <StatCard
          title="Active States"
          value={28}
          icon={MapPin}
          color="orange"
        />
      </div>

      {/* System Users */}
      <DataTable
        title="System Users Management"
        columns={userColumns}
        data={systemUsers}
        onRowClick={(row) => console.log('Manage user:', row)}
      />

      {/* System Performance */}
      <DataTable
        title="System Performance Metrics"
        columns={metricsColumns}
        data={systemMetrics}
      />

      {/* Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">User Management</h3>
              <p className="text-sm text-gray-500">Create and manage accounts</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Budget Analysis</h3>
              <p className="text-sm text-gray-500">Monitor fund utilization</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-lg p-3">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
              <p className="text-sm text-gray-500">Analyze system performance</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-600 rounded-lg p-3">
              <Settings className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">System Settings</h3>
              <p className="text-sm text-gray-500">Configure system parameters</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
          System Alerts
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div>
              <p className="text-sm font-medium text-yellow-800">High Server Load</p>
              <p className="text-xs text-yellow-600">Database queries taking longer than usual</p>
            </div>
            <span className="text-xs text-yellow-600">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
              <p className="text-sm font-medium text-blue-800">Scheduled Maintenance</p>
              <p className="text-xs text-blue-600">System maintenance scheduled for tonight</p>
            </div>
            <span className="text-xs text-blue-600">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}