import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { 
  CitizenDashboard, 
  PanchayathDashboard, 
  BlockDashboard, 
  DistrictDashboard, 
  StateDashboard, 
  AdminDashboard 
} from '../Dashboards';
import { Profile } from '../Citizen/Profile';
import { JobCardApplication } from '../Citizen/JobCardApplication';
import { JobApplication } from '../Citizen/JobApplication';
import { JobRequest } from '../Citizen/JobRequest';
import { ApplicationStatus } from '../Citizen/ApplicationStatus';
import { WorkList } from '../Citizen/WorkList';
import { MasterPlan } from '../Citizen/MasterPlan';
import { Analytics } from '../Citizen/Analytics';
import { Notifications } from '../Citizen/Notifications';

const dashboardTitles = {
  citizen: 'Citizen Portal',
  panchayath: 'Panchayath Management',
  block: 'Block Administration',
  district: 'District Overview',
  state: 'State Dashboard',
  admin: 'System Administration'
};

export function DashboardLayout() {
  const { user } = useAuth();
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!user) return null;

  const title = dashboardTitles[user.role];

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item: string) => {
    if (item === '') {
      setIsSidebarOpen(false);
      return;
    }
    setActiveItem(item);
    setIsSidebarOpen(false);
  };

  const renderDashboard = () => {
    if (activeItem !== 'dashboard') {
      // Citizen specific pages
      if (user.role === 'citizen') {
        switch (activeItem) {
          case 'profile':
            return <Profile />;
          case 'job-card':
            return <JobCardApplication />;
          case 'job-application':
            return <JobApplication />;
          case 'job-request':
            return <JobRequest />;
          case 'application-status':
            return <ApplicationStatus />;
          case 'work-list':
            return <WorkList />;
          case 'master-plan':
            return <MasterPlan />;
          case 'analytics':
            return <Analytics />;
          case 'notifications':
            return <Notifications />;
          default:
            return (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature Under Development</h2>
                <p className="text-gray-600">This feature is currently being developed and will be available soon.</p>
              </div>
            );
        }
      }
      
      // Default for other roles
      return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature Under Development</h2>
          <p className="text-gray-600">This feature is currently being developed and will be available soon.</p>
        </div>
      );
    }

    switch (user.role) {
      case 'citizen':
        return <CitizenDashboard />;
      case 'panchayath':
        return <PanchayathDashboard />;
      case 'block':
        return <BlockDashboard />;
      case 'district':
        return <DistrictDashboard />;
      case 'state':
        return <StateDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <CitizenDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        role={user.role}
        activeItem={activeItem}
        onItemClick={handleItemClick}
        isOpen={isSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={title}
          onMenuToggle={handleMenuToggle}
          isMenuOpen={isSidebarOpen}
        />
        
        <main className="flex-1 overflow-auto p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
}