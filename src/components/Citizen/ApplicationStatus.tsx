import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle, FileText, Eye } from 'lucide-react';

export function ApplicationStatus() {
  const applications = [
    {
      id: 'JC001',
      type: 'Job Card',
      title: 'Job Card Application',
      status: 'approved',
      submittedDate: '2024-01-15',
      lastUpdated: '2024-01-20',
      comments: 'Application approved. Job card will be issued within 7 days.',
      documents: ['ID Proof', 'Bank Details', 'Photo']
    },
    {
      id: 'JA002',
      type: 'Job Application',
      title: 'Road Construction Work',
      status: 'pending',
      submittedDate: '2024-01-20',
      lastUpdated: '2024-01-20',
      comments: 'Application under review by Panchayath office.',
      documents: ['Job Card', 'Application Form']
    },
    {
      id: 'JR003',
      type: 'Job Request',
      title: 'Pond Cleaning Project',
      status: 'under_review',
      submittedDate: '2024-01-22',
      lastUpdated: '2024-01-23',
      comments: 'Technical sanction pending. Estimated approval in 5-7 days.',
      documents: ['Request Form', 'Location Details']
    },
    {
      id: 'JA004',
      type: 'Job Application',
      title: 'Tree Plantation Drive',
      status: 'rejected',
      submittedDate: '2024-01-18',
      lastUpdated: '2024-01-19',
      comments: 'Application rejected due to incomplete documentation.',
      documents: ['Incomplete Application']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'under_review':
        return <AlertCircle className="h-5 w-5 text-blue-600" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-100 text-emerald-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'under_review':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Pending';
      case 'under_review':
        return 'Under Review';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Application Status</h2>
        
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <FileText className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{application.title}</h3>
                    <p className="text-sm text-gray-500">ID: {application.id}</p>
                    <p className="text-sm text-gray-500">Type: {application.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(application.status)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                    {getStatusText(application.status)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Submitted Date</p>
                  <p className="font-medium text-gray-900">{application.submittedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="font-medium text-gray-900">{application.lastUpdated}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Status Comments</p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{application.comments}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Documents</p>
                <div className="flex flex-wrap gap-2">
                  {application.documents.map((doc, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                {application.status === 'rejected' && (
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Resubmit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}