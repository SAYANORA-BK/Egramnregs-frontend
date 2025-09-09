import React, { useState } from 'react';
import { Users, MapPin, Calendar, FileText, CheckCircle } from 'lucide-react';

const JobRequest=() =>{
  const [formData, setFormData] = useState({
    workTitle: '',
    workDescription: '',
    location: '',
    estimatedWorkers: '',
    estimatedDuration: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    groupMembers: ['']
  });

  const [requestStatus, setRequestStatus] = useState<'draft' | 'submitted' | null>(null);

  const nearbyGroups = [
    { id: 'G001', name: 'Ward 3 Development Group', members: 15, leader: 'Ravi Kumar', contact: '9876543210' },
    { id: 'G002', name: 'Women Self Help Group', members: 12, leader: 'Meera Devi', contact: '9876543211' },
    { id: 'G003', name: 'Youth Employment Group', members: 20, leader: 'Suresh Pillai', contact: '9876543212' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus('submitted');
  };

  const addGroupMember = () => {
    setFormData(prev => ({
      ...prev,
      groupMembers: [...prev.groupMembers, '']
    }));
  };

  const updateGroupMember = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      groupMembers: prev.groupMembers.map((member, i) => i === index ? value : member)
    }));
  };

  const removeGroupMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      groupMembers: prev.groupMembers.filter((_, i) => i !== index)
    }));
  };

  if (requestStatus === 'submitted') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Job Request Submitted!</h2>
        <p className="text-gray-600 mb-4">Your job request has been submitted for review.</p>
        <p className="text-sm text-gray-500">Request ID: <span className="font-mono font-medium">JR-2024-001234</span></p>
        <button
          onClick={() => setRequestStatus(null)}
          className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Job Request Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Submit Job Request</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Title *</label>
              <input
                type="text"
                required
                value={formData.workTitle}
                onChange={(e) => setFormData({ ...formData, workTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter work title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter work location"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Description *</label>
            <textarea
              required
              rows={4}
              value={formData.workDescription}
              onChange={(e) => setFormData({ ...formData, workDescription: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Describe the work needed in detail..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Workers *</label>
              <input
                type="number"
                required
                min="1"
                value={formData.estimatedWorkers}
                onChange={(e) => setFormData({ ...formData, estimatedWorkers: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Number of workers"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Duration *</label>
              <input
                type="text"
                required
                value={formData.estimatedDuration}
                onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., 30 days"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority *</label>
              <select
                required
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Group Members</label>
            {formData.groupMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={member}
                  onChange={(e) => updateGroupMember(index, e.target.value)}
                  placeholder="Enter member name"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeGroupMember(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addGroupMember}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              + Add Group Member
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Nearby Groups */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Groups Near You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyGroups.map(group => (
            <div key={group.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">{group.name}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Leader: {group.leader}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Contact: {group.contact}</span>
                </div>
              </div>
              <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default JobRequest;