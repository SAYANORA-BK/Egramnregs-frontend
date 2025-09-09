import React from 'react';
import { BarChart3, TrendingUp, Calendar, DollarSign, Clock, Users } from 'lucide-react';

const Analytics=() =>{
  const personalStats = {
    totalApplications: 8,
    approvedApplications: 5,
    pendingApplications: 2,
    rejectedApplications: 1,
    totalDaysWorked: 145,
    totalEarnings: 31050,
    averageDailyWage: 214,
    currentMonthDays: 18
  };

  const monthlyData = [
    { month: 'Jan', days: 22, earnings: 4708 },
    { month: 'Feb', days: 20, earnings: 4280 },
    { month: 'Mar', days: 25, earnings: 5350 },
    { month: 'Apr', days: 18, earnings: 3852 },
    { month: 'May', days: 23, earnings: 4922 },
    { month: 'Jun', days: 19, earnings: 4066 },
    { month: 'Jul', days: 18, earnings: 3852 }
  ];

  const workTypeBreakdown = [
    { type: 'Road Construction', days: 45, percentage: 31 },
    { type: 'Water Conservation', days: 32, percentage: 22 },
    { type: 'Tree Plantation', days: 28, percentage: 19 },
    { type: 'Drainage Work', days: 25, percentage: 17 },
    { type: 'Land Development', days: 15, percentage: 11 }
  ];

  return (
    <div className="space-y-6">
      {/* Personal Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Work Analytics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600 mb-1">{personalStats.totalDaysWorked}</div>
            <div className="text-sm text-gray-600">Total Days Worked</div>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">₹{personalStats.totalEarnings.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Earnings</div>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">₹{personalStats.averageDailyWage}</div>
            <div className="text-sm text-gray-600">Avg Daily Wage</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">{personalStats.currentMonthDays}</div>
            <div className="text-sm text-gray-600">This Month</div>
          </div>
        </div>
      </div>

      {/* Application Status Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status Overview</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-gray-100 text-gray-600 rounded-full p-2">
              <BarChart3 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">{personalStats.totalApplications}</div>
              <div className="text-xs text-gray-500">Total Applications</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-2">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <div className="text-lg font-semibold text-emerald-600">{personalStats.approvedApplications}</div>
              <div className="text-xs text-gray-500">Approved</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <div className="bg-yellow-100 text-yellow-600 rounded-full p-2">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <div className="text-lg font-semibold text-yellow-600">{personalStats.pendingApplications}</div>
              <div className="text-xs text-gray-500">Pending</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
            <div className="bg-red-100 text-red-600 rounded-full p-2">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <div className="text-lg font-semibold text-red-600">{personalStats.rejectedApplications}</div>
              <div className="text-xs text-gray-500">Rejected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Work Performance</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-sm font-medium text-gray-500">Month</th>
                <th className="text-right py-2 text-sm font-medium text-gray-500">Days Worked</th>
                <th className="text-right py-2 text-sm font-medium text-gray-500">Earnings</th>
                <th className="text-right py-2 text-sm font-medium text-gray-500">Avg/Day</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((month, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 text-sm font-medium text-gray-900">{month.month}</td>
                  <td className="py-3 text-sm text-gray-600 text-right">{month.days}</td>
                  <td className="py-3 text-sm text-gray-600 text-right">₹{month.earnings.toLocaleString()}</td>
                  <td className="py-3 text-sm text-gray-600 text-right">₹{Math.round(month.earnings / month.days)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Work Type Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Type Distribution</h3>
        
        <div className="space-y-4">
          {workTypeBreakdown.map((work, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">{work.type}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{work.days} days</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full" 
                    style={{ width: `${work.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-8">{work.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Best Performing Month</h4>
            <p className="text-sm text-blue-700">March 2024 with 25 working days and ₹5,350 earnings</p>
          </div>
          
          <div className="p-4 bg-emerald-50 rounded-lg">
            <h4 className="font-medium text-emerald-900 mb-2">Most Frequent Work Type</h4>
            <p className="text-sm text-emerald-700">Road Construction projects (31% of total work days)</p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-900 mb-2">Average Monthly Income</h4>
            <p className="text-sm text-orange-700">₹4,433 per month based on last 7 months</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900 mb-2">Work Consistency</h4>
            <p className="text-sm text-purple-700">Working an average of 20.7 days per month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Analytics;