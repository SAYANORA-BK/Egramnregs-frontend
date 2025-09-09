import React from 'react';
import { FileText, MapPin, BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function DistrictDashboard() {
  const blockPlans = [
    { block: 'Thiruvananthapuram', plans: 5, status: 'Approved', budget: '₹2.5 Cr', utilization: '82%' },
    { block: 'Neyyattinkara', plans: 3, status: 'Under Review', budget: '₹1.8 Cr', utilization: '65%' },
    { block: 'Kovalam', plans: 4, status: 'Approved', budget: '₹1.2 Cr', utilization: '90%' }
  ];

  const performanceData = [
    { metric: 'Job Cards Issued', target: 5000, achieved: 4200, percentage: '84%' },
    { metric: 'Works Completed', target: 200, achieved: 156, percentage: '78%' },
    { metric: 'Budget Utilization', target: '₹10 Cr', achieved: '₹7.8 Cr', percentage: '78%' }
  ];

  const blockColumns = [
    { key: 'block', label: 'Block' },
    { key: 'plans', label: 'Action Plans' },
    { key: 'budget', label: 'Budget' },
    { key: 'utilization', label: 'Utilization' },
    { 
      key: 'status', 
      label: 'Status',
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
          status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      )
    }
  ];

  const performanceColumns = [
    { key: 'metric', label: 'Performance Metric' },
    { key: 'target', label: 'Target' },
    { key: 'achieved', label: 'Achieved' },
    { 
      key: 'percentage', 
      label: 'Achievement',
      render: (percentage: string) => (
        <div className="flex items-center space-x-2">
          <span className="font-medium">{percentage}</span>
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full" 
              style={{ width: percentage }}
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">District Overview</h1>
        <p className="text-purple-100">Monitor block performance, review plans, and track district-wide progress.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Blocks"
          value={15}
          icon={MapPin}
          color="blue"
        />
        <StatCard
          title="Active Job Cards"
          value="12,450"
          icon={Users}
          change={{ value: "+234 this month", trend: 'up' }}
          color="emerald"
        />
        <StatCard
          title="Budget Allocated"
          value="₹25.6 Cr"
          icon={DollarSign}
          color="purple"
        />
        <StatCard
          title="Works Completed"
          value={456}
          icon={TrendingUp}
          change={{ value: "+12% vs last quarter", trend: 'up' }}
          color="orange"
        />
      </div>

      {/* Block Performance */}
      <DataTable
        title="Block-wise Action Plans"
        columns={blockColumns}
        data={blockPlans}
        onRowClick={(row) => console.log('Review block plan:', row)}
      />

      {/* Performance Metrics */}
      <DataTable
        title="District Performance Metrics"
        columns={performanceColumns}
        data={performanceData}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Review Plans</h3>
              <p className="text-sm text-gray-500">3 plans awaiting approval</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Analytics</h3>
              <p className="text-sm text-gray-500">View detailed reports</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-lg p-3">
              {/* <Video className="h-6 w-6" /> */}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Video Conference</h3>
              <p className="text-sm text-gray-500">Schedule review meeting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}