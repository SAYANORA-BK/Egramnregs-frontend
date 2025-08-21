import React from 'react';
import { MapPin, TrendingUp, BarChart3, Users, DollarSign, Award } from 'lucide-react';
import { StatCard } from '../Common/StatCard';
import { DataTable } from '../Common/DataTable';

export function StateDashboard() {
  const districtPerformance = [
    { district: 'Thiruvananthapuram', jobCards: 15420, works: 234, budget: '₹45.2 Cr', utilization: '87%' },
    { district: 'Kochi', jobCards: 12340, works: 189, budget: '₹38.5 Cr', utilization: '82%' },
    { district: 'Kozhikode', jobCards: 18650, works: 267, budget: '₹52.1 Cr', utilization: '91%' },
    { district: 'Kottayam', jobCards: 9870, works: 145, budget: '₹28.3 Cr', utilization: '75%' }
  ];

  const stateMetrics = [
    { metric: 'Employment Generation', value: '2.34 Cr Person-days', growth: '+12%' },
    { metric: 'Average Wage Rate', value: '₹298/day', growth: '+8%' },
    { metric: 'Works Completion Rate', value: '89.5%', growth: '+5%' },
    { metric: 'Budget Efficiency', value: '85.2%', growth: '+3%' }
  ];

  const districtColumns = [
    { key: 'district', label: 'District' },
    { key: 'jobCards', label: 'Job Cards' },
    { key: 'works', label: 'Works' },
    { key: 'budget', label: 'Budget' },
    { 
      key: 'utilization', 
      label: 'Utilization',
      render: (utilization: string) => (
        <div className="flex items-center space-x-2">
          <span className="font-medium">{utilization}</span>
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full" 
              style={{ width: utilization }}
            />
          </div>
        </div>
      )
    }
  ];

  const metricsColumns = [
    { key: 'metric', label: 'State Metric' },
    { key: 'value', label: 'Current Value' },
    { 
      key: 'growth', 
      label: 'Growth',
      render: (growth: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          growth.startsWith('+') ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
        }`}>
          {growth}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Kerala State Dashboard</h1>
        <p className="text-emerald-100">Monitor state-wide MGNREGA implementation and performance metrics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Districts"
          value={14}
          icon={MapPin}
          color="emerald"
        />
        <StatCard
          title="Active Job Cards"
          value="5.67 Lakh"
          icon={Users}
          change={{ value: "+2.3% this year", trend: 'up' }}
          color="blue"
        />
        <StatCard
          title="State Budget"
          value="₹1,245 Cr"
          icon={DollarSign}
          color="purple"
        />
        <StatCard
          title="Performance Score"
          value="A+"
          icon={Award}
          change={{ value: "Excellent rating", trend: 'up' }}
          color="orange"
        />
      </div>

      {/* District Performance */}
      <DataTable
        title="District-wise Performance"
        columns={districtColumns}
        data={districtPerformance}
        onRowClick={(row) => console.log('View district details:', row)}
      />

      {/* State Metrics */}
      <DataTable
        title="Key State Metrics"
        columns={metricsColumns}
        data={stateMetrics}
      />

      {/* Strategic Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Initiatives</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
              <span className="text-sm font-medium text-emerald-800">Digital Transformation</span>
              <span className="text-sm text-emerald-600">92% Complete</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Skill Development</span>
              <span className="text-sm text-blue-600">78% Complete</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Infrastructure Projects</span>
              <span className="text-sm text-orange-600">85% Complete</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-emerald-100 text-emerald-600 rounded-full p-1">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">National Award</p>
                <p className="text-xs text-gray-500">Best performing state in MGNREGA</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Employment Growth</p>
                <p className="text-xs text-gray-500">15% increase in person-days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}