import React from 'react';
import { Download, FileText, Calendar, MapPin, DollarSign } from 'lucide-react';

export function MasterPlan() {
  const masterPlans = [
    {
      id: 'MP2024',
      title: 'Annual Master Plan 2024-25',
      financialYear: '2024-25',
      status: 'approved',
      totalBudget: '₹2.5 Crores',
      totalWorks: 45,
      approvedDate: '2024-01-15',
      panchayath: 'Thiruvananthapuram',
      downloadUrl: '#'
    },
    {
      id: 'MP2023',
      title: 'Annual Master Plan 2023-24',
      financialYear: '2023-24',
      status: 'completed',
      totalBudget: '₹2.2 Crores',
      totalWorks: 38,
      approvedDate: '2023-04-10',
      panchayath: 'Thiruvananthapuram',
      downloadUrl: '#'
    }
  ];

  const workCategories = [
    { category: 'Rural Connectivity', works: 12, budget: '₹80 Lakhs' },
    { category: 'Water Conservation', works: 8, budget: '₹45 Lakhs' },
    { category: 'Drought Proofing', works: 10, budget: '₹60 Lakhs' },
    { category: 'Land Development', works: 6, budget: '₹35 Lakhs' },
    { category: 'Flood Control', works: 5, budget: '₹25 Lakhs' },
    { category: 'Rural Sanitation', works: 4, budget: '₹15 Lakhs' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-100 text-emerald-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Master Plans List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Annual Master Plans</h2>
        
        <div className="space-y-4">
          {masterPlans.map((plan) => (
            <div key={plan.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>FY {plan.financialYear}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{plan.panchayath}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(plan.status)}`}>
                  {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Total Budget</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.totalBudget}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Works</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.totalWorks}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Approved Date</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.approvedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.status}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Year Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Current Year Work Categories (2024-25)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workCategories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-emerald-100 text-emerald-600 rounded-lg p-2">
                  <FileText className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-gray-900">{category.category}</h4>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Works:</span>
                  <span className="font-medium text-gray-900">{category.works}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Budget:</span>
                  <span className="font-medium text-gray-900">{category.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Plan Implementation Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Works Completed</div>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">₹2.1 Cr</div>
            <div className="text-sm text-gray-600">Budget Utilized</div>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">1,250</div>
            <div className="text-sm text-gray-600">Person Days Generated</div>
          </div>
        </div>
      </div>
    </div>
  );
}