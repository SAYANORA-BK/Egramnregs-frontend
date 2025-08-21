import React, { useState } from 'react';
import { MapPin, Calendar, Users, DollarSign, Filter, Search } from 'lucide-react';

export function WorkList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const works = [
    {
      id: 'W001',
      title: 'Road Construction - Main Street',
      category: 'Rural Connectivity',
      location: 'Ward 3, Thiruvananthapuram',
      duration: '45 days',
      wages: '₹215/day',
      workersNeeded: 30,
      workersAllocated: 15,
      startDate: '2024-02-01',
      description: 'Construction of concrete road from main junction to community center',
      status: 'accepting_applications',
      estimatedCost: '₹15,00,000'
    },
    {
      id: 'W002',
      title: 'Pond Cleaning and Restoration',
      category: 'Water Conservation',
      location: 'Ward 7, Thiruvananthapuram',
      duration: '20 days',
      wages: '₹200/day',
      workersNeeded: 15,
      workersAllocated: 15,
      startDate: '2024-01-25',
      description: 'Cleaning and restoration of community pond for water conservation',
      status: 'full',
      estimatedCost: '₹6,00,000'
    },
    {
      id: 'W003',
      title: 'Tree Plantation Drive',
      category: 'Drought Proofing',
      location: 'Ward 1, Thiruvananthapuram',
      duration: '15 days',
      wages: '₹180/day',
      workersNeeded: 25,
      workersAllocated: 8,
      startDate: '2024-02-10',
      description: 'Plantation of native trees along the village boundaries',
      status: 'accepting_applications',
      estimatedCost: '₹4,50,000'
    },
    {
      id: 'W004',
      title: 'Drainage System Construction',
      category: 'Flood Control',
      location: 'Ward 5, Thiruvananthapuram',
      duration: '60 days',
      wages: '₹225/day',
      workersNeeded: 40,
      workersAllocated: 0,
      startDate: '2024-02-15',
      description: 'Construction of drainage system to prevent waterlogging',
      status: 'upcoming',
      estimatedCost: '₹25,00,000'
    }
  ];

  const categories = [
    'Rural Connectivity',
    'Water Conservation',
    'Drought Proofing',
    'Micro Irrigation',
    'Land Development',
    'Flood Control',
    'Rural Sanitation'
  ];

  const locations = [
    'Ward 1, Thiruvananthapuram',
    'Ward 3, Thiruvananthapuram',
    'Ward 5, Thiruvananthapuram',
    'Ward 7, Thiruvananthapuram'
  ];

  const filteredWorks = works.filter(work => {
    const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         work.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || work.category === selectedCategory;
    const matchesLocation = !selectedLocation || work.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepting_applications':
        return 'bg-emerald-100 text-emerald-800';
      case 'full':
        return 'bg-yellow-100 text-yellow-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepting_applications':
        return 'Accepting Applications';
      case 'full':
        return 'Positions Full';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search works..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>

      {/* Works List */}
      <div className="space-y-4">
        {filteredWorks.map((work) => (
          <div key={work.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{work.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{work.category}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(work.status)}`}>
                {getStatusText(work.status)}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-gray-900">{work.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-medium text-gray-900">{work.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Daily Wages</p>
                  <p className="text-sm font-medium text-gray-900">{work.wages}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Workers</p>
                  <p className="text-sm font-medium text-gray-900">
                    {work.workersAllocated}/{work.workersNeeded}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span>Start Date: {work.startDate}</span>
                <span className="ml-4">Estimated Cost: {work.estimatedCost}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Details
                </button>
                {work.status === 'accepting_applications' && (
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No works found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}