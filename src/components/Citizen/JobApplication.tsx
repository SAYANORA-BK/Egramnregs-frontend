import React, { useState } from 'react';
import { Briefcase, MapPin, Users, Calendar, CheckCircle } from 'lucide-react';

const JobApplication = () => {
  const [applicationType, setApplicationType] = useState<'own' | 'specific' | ''>('');
  const [formData, setFormData] = useState({
    workType: '',
    workId: '',
    location: '',
    preferredStartDate: '',
    description: '',
    groupMembers: [''],
    isOwnWork: false
  });

  const [applicationStatus, setApplicationStatus] = useState<'draft' | 'submitted' | null>(null);

  const availableWorks = [
    { id: 'W001', title: 'Road Construction', location: 'Ward 3', duration: '45 days', wages: '₹215/day' },
    { id: 'W002', title: 'Pond Cleaning', location: 'Ward 7', duration: '20 days', wages: '₹200/day' },
    { id: 'W003', title: 'Tree Plantation', location: 'Ward 1', duration: '15 days', wages: '₹180/day' }
  ];

  const workCategories = [
    'Rural Connectivity',
    'Water Conservation',
    'Drought Proofing',
    'Micro Irrigation',
    'Land Development',
    'Flood Control',
    'Rural Sanitation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationStatus('submitted');
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

  if (applicationStatus === 'submitted') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Job Application Submitted!</h2>
        <p className="text-gray-600 mb-4">Your job application has been submitted successfully.</p>
        <p className="text-sm text-gray-500">Application ID: <span className="font-mono font-medium">JA-2024-001234</span></p>
        <button
          onClick={() => setApplicationStatus(null)}
          className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Application Type Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Application</h2>
        
        {/* Type selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div
            onClick={() => setApplicationType('own')}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              applicationType === 'own' 
                ? 'border-emerald-500 bg-emerald-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-100 text-emerald-600 rounded-lg p-2">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Apply for Own Work</h3>
                <p className="text-sm text-gray-500">Request work for your group</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => setApplicationType('specific')}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              applicationType === 'specific' 
                ? 'border-emerald-500 bg-emerald-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Apply for Specific Work</h3>
                <p className="text-sm text-gray-500">Apply for available works</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conditional form */}
        {applicationType && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {applicationType === 'specific' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Available Work *</label>
                <select
                  required
                  value={formData.workId}
                  onChange={(e) => setFormData({ ...formData, workId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select a work</option>
                  {availableWorks.map(work => (
                    <option key={work.id} value={work.id}>
                      {work.title} - {work.location} ({work.wages})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Category *</label>
                  <select
                    required
                    value={formData.workType}
                    onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select work category</option>
                    {workCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Describe the work you want to request..."
                  />
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
              </>
            )}

            {/* Location & date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date *</label>
                <input
                  type="date"
                  required
                  value={formData.preferredStartDate}
                  onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
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
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Available Works List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Works in Your Area</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableWorks.map(work => (
            <div key={work.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">{work.title}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{work.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{work.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{work.wages}</span>
                </div>
              </div>
              <button className="mt-3 w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                Apply for This Work
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
