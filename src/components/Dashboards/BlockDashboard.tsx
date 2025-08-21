import React from 'react';
import { FileText, Users, BarChart3, Video, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function BlockDashboard() {
  const actionPlans = [
    { id: 'AP001', panchayath: 'Neyyattinkara', submitted: '2024-01-20', status: 'Under Review', works: 15 },
    { id: 'AP002', panchayath: 'Thiruvananthapuram', submitted: '2024-01-18', status: 'Approved', works: 22 },
    { id: 'AP003', panchayath: 'Kovalam', submitted: '2024-01-19', status: 'Needs Revision', works: 8 }
  ];

  const workerAllocation = [
    { work: 'Road Construction - Ward 3', allocated: 25, required: 30, panchayath: 'Neyyattinkara' },
    { work: 'Pond Cleaning - Ward 7', allocated: 15, required: 15, panchayath: 'Thiruvananthapuram' },
    { work: 'Tree Plantation', allocated: 20, required: 25, panchayath: 'Kovalam' }
  ];

  const planColumns = [
    { key: 'id', label: 'Plan ID' },
    { key: 'panchayath', label: 'Panchayath' },
    { key: 'submitted', label: 'Submitted' },
    { key: 'works', label: 'Works' },
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

  const allocationColumns = [
    { key: 'work', label: 'Work Title' },
    { key: 'panchayath', label: 'Panchayath' },
    { 
      key: 'allocated', 
      label: 'Workers',
      render: (allocated: number, row: any) => (
        <span className={`font-medium ${allocated >= row.required ? 'text-emerald-600' : 'text-red-600'}`}>
          {allocated}/{row.required}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Block Level Management</h1>
        <p className="text-blue-100">Review action plans, manage muster rolls, and coordinate with panchayaths.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Action Plans"
          value={8}
          icon={FileText}
          change={{ value: "3 pending review", trend: 'neutral' }}
          color="blue"
        />
        <StatCard
          title="Total Workers"
          value={234}
          icon={Users}
          change={{ value: "+15 this month", trend: 'up' }}
          color="emerald"
        />
        <StatCard
          title="Completed Works"
          value={45}
          icon={CheckCircle}
          color="purple"
        />
        <StatCard
          title="Budget Utilization"
          value="78%"
          icon={BarChart3}
          color="orange"
        />
      </div>

      {/* Action Plans Review */}
      <DataTable
        title="Action Plans for Review"
        columns={planColumns}
        data={actionPlans}
        onRowClick={(row) => console.log('Review plan:', row)}
      />

      {/* Worker Allocation */}
      <DataTable
        title="Worker Allocation Status"
        columns={allocationColumns}
        data={workerAllocation}
        onRowClick={(row) => console.log('Manage allocation:', row)}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Print Muster Roll</h3>
              <p className="text-sm text-gray-500">Generate attendance sheets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Review Meeting</h3>
              <p className="text-sm text-gray-500">Schedule video conference</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-lg p-3">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Generate Reports</h3>
              <p className="text-sm text-gray-500">View performance analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}