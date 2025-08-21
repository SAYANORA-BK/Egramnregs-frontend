import React from 'react';
import { 
  Home, FileText, Briefcase, Users, BarChart3, 
  Bell, Settings, FileDown, Video, 
  UserCheck, ClipboardList, MapPin, Shield,
  DollarSign, TrendingUp
} from 'lucide-react';
import { UserRole } from '../../types';

interface SidebarProps {
  role: UserRole;
  activeItem: string;
  onItemClick: (item: string) => void;
  isOpen: boolean;
}

const menuItems = {
  citizen: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: UserCheck },
    { id: 'job-card', label: 'Job Card Application', icon: FileText },
    { id: 'job-application', label: 'Job Application', icon: Briefcase },
    { id: 'job-request', label: 'Job Request', icon: ClipboardList },
    { id: 'application-status', label: 'Application Status', icon: FileText },
    { id: 'work-list', label: 'Available Works', icon: MapPin },
    { id: 'master-plan', label: 'Annual Master Plan', icon: FileDown },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ],
  panchayath: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'job-card-verify', label: 'Job Card Verification', icon: UserCheck },
    { id: 'job-requests', label: 'Job Requests', icon: ClipboardList },
    { id: 'work-categories', label: 'Work Categories', icon: MapPin },
    { id: 'work-allocation', label: 'Work Allocation', icon: Users },
    { id: 'action-plan', label: 'Action Plan Creation', icon: FileText },
    { id: 'device-management', label: 'Device Management', icon: Settings },
    { id: 'video-conference', label: 'Video Conference', icon: Video },
    { id: 'master-plan', label: 'Annual Master Plan', icon: FileDown },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileDown },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ],
  block: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'action-plan-review', label: 'Action Plan Review', icon: FileText },
    { id: 'muster-roll', label: 'Muster Roll', icon: ClipboardList },
    { id: 'worker-allocation', label: 'Worker Allocation', icon: Users },
    { id: 'video-conference', label: 'Video Conference', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileDown },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ],
  district: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'action-plan-review', label: 'Action Plan Review', icon: FileText },
    { id: 'master-plan', label: 'Annual Master Plan', icon: FileDown },
    { id: 'video-conference', label: 'Video Conference', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileDown },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ],
  state: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'action-plan-review', label: 'Action Plan Review', icon: FileText },
    { id: 'master-plan', label: 'Annual Master Plan', icon: FileDown },
    { id: 'video-conference', label: 'Video Conference', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileDown },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ],
  admin: [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'user-management', label: 'User Management', icon: Users },
    { id: 'budget-analysis', label: 'Budget Analysis', icon: DollarSign },
    { id: 'performance-metrics', label: 'Performance Metrics', icon: TrendingUp },
    { id: 'geographic-analysis', label: 'Geographic Analysis', icon: MapPin },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileDown },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ]
};

export function Sidebar({ role, activeItem, onItemClick, isOpen }: SidebarProps) {
  const items = menuItems[role] || [];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => onItemClick('')}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 text-white rounded-lg p-2">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">MGNREGA</h2>
              <p className="text-sm text-gray-500">Management System</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                  ${activeItem === item.id 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}