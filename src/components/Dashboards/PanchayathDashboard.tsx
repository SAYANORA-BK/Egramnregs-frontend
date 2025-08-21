import React from 'react';
import { UserCheck, ClipboardList, Users, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function PanchayathDashboard() {
  const pendingApplications = [
    { id: 'JC001', applicant: 'Ravi Kumar', type: 'Job Card', submitted: '2024-01-22', priority: 'High' },
    { id: 'JC002', applicant: 'Meera Devi', type: 'Job Card', submitted: '2024-01-21', priority: 'Medium' },
    { id: 'JA003', applicant: 'Suresh Pillai', type: 'Job Application', submitted: '2024-01-20', priority: 'Low' }
  ];

  const workRequests = [
    { id: 'WR001', title: 'Road Repair', location: 'Ward 4', requestedBy: 'Citizens Group', urgency: 'High' },
    { id: 'WR002', title: 'Drainage Cleaning', location: 'Ward 2', requestedBy: 'Local Committee', urgency: 'Medium' }
  ];

  const applicationColumns = [
    { key: 'id', label: 'ID' },
    { key: 'applicant', label: 'Applicant' },
    { key: 'type', label: 'Type' },
    { key: 'submitted', label: 'Submitted' },
    { 
      key: 'priority', 
      label: 'Priority',
      render: (priority: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          priority === 'High' ? 'bg-red-100 text-red-800' :
          priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {priority}
        </span>
      )
    }
  ];

  const workRequestColumns = [
    { key: 'id', label: 'Request ID' },
    { key: 'title', label: 'Work Title' },
    { key: 'location', label: 'Location' },
    { key: 'requestedBy', label: 'Requested By' },
    { 
      key: 'urgency', 
      label: 'Urgency',
      render: (urgency: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          urgency === 'High' ? 'bg-red-100 text-red-800' :
          urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {urgency}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Panchayath Management</h1>
        <p className="text-blue-100">Manage applications, allocate work, and monitor progress in your panchayath.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Pending Applications"
          value={12}
          icon={ClipboardList}
          change={{ value: "+3 today", trend: 'up' }}
          color="orange"
        />
        <StatCard
          title="Verified Job Cards"
          value={156}
          icon={UserCheck}
          change={{ value: "+8 this week", trend: 'up' }}
          color="emerald"
        />
        <StatCard
          title="Active Workers"
          value={89}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Ongoing Works"
          value={7}
          icon={FileText}
          color="purple"
        />
      </div>

      {/* Pending Applications */}
      <DataTable
        title="Pending Job Card Applications"
        columns={applicationColumns}
        data={pendingApplications}
        onRowClick={(row) => console.log('Review application:', row)}
      />

      {/* Work Requests */}
      <DataTable
        title="Work Requests for Review"
        columns={workRequestColumns}
        data={workRequests}
        onRowClick={(row) => console.log('Review work request:', row)}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-600 rounded-lg p-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Review Applications</h3>
              <p className="text-sm text-gray-500">12 pending for verification</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-lg p-3">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Create Action Plan</h3>
              <p className="text-sm text-gray-500">Plan upcoming works</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Allocate Workers</h3>
              <p className="text-sm text-gray-500">Assign workers to projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}