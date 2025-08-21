import React from 'react';
import { FileText, Briefcase, Clock, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function CitizenDashboard() {
  const recentApplications = [
    { id: 'JC001', type: 'Job Card', status: 'Approved', date: '2024-01-15' },
    { id: 'JA002', type: 'Job Application', status: 'Pending', date: '2024-01-20' },
    { id: 'JR003', type: 'Job Request', status: 'Under Review', date: '2024-01-22' }
  ];

  const availableWorks = [
    { title: 'Road Construction', location: 'Ward 3', duration: '45 days', wages: '₹215/day' },
    { title: 'Pond Cleaning', location: 'Ward 7', duration: '20 days', wages: '₹200/day' },
    { title: 'Tree Plantation', location: 'Ward 1', duration: '15 days', wages: '₹180/day' }
  ];

  const applicationColumns = [
    { key: 'id', label: 'Application ID' },
    { key: 'type', label: 'Type' },
    { 
      key: 'status', 
      label: 'Status',
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
          status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {status}
        </span>
      )
    },
    { key: 'date', label: 'Date' }
  ];

  const workColumns = [
    { key: 'title', label: 'Work Title' },
    { key: 'location', label: 'Location' },
    { key: 'duration', label: 'Duration' },
    { key: 'wages', label: 'Daily Wages' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Rajesh!</h1>
        <p className="text-emerald-100">Track your job applications and discover new work opportunities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Applications"
          value={5}
          icon={FileText}
          change={{ value: "+2 this month", trend: 'up' }}
          color="emerald"
        />
        <StatCard
          title="Days Worked"
          value={45}
          icon={Clock}
          change={{ value: "+12 this month", trend: 'up' }}
          color="blue"
        />
        <StatCard
          title="Total Earnings"
          value="₹9,675"
          icon={CheckCircle}
          color="purple"
        />
        <StatCard
          title="Pending Applications"
          value={2}
          icon={AlertCircle}
          color="orange"
        />
      </div>

      {/* Recent Applications */}
      <DataTable
        title="Recent Applications"
        columns={applicationColumns}
        data={recentApplications}
        onRowClick={(row) => console.log('View application:', row)}
      />

      {/* Available Works */}
      <DataTable
        title="Available Works in Your Area"
        columns={workColumns}
        data={availableWorks}
        onRowClick={(row) => console.log('Apply for work:', row)}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-lg p-3">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Apply for Job Card</h3>
              <p className="text-sm text-gray-500">Submit new job card application</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Find Work</h3>
              <p className="text-sm text-gray-500">Browse available work opportunities</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Request Work</h3>
              <p className="text-sm text-gray-500">Request work in your area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}