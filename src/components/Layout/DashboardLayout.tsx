import { useState } from 'react';
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

// Citizen pages
import { Profile } from '../Citizen/Profile';
import JobCardApplication from '../Citizen/JobCardApplication';
import JobApplication from '../Citizen/JobApplication';
import JobRequest from '../Citizen/JobRequest';
import ApplicationStatus from '../Citizen/ApplicationStatus';
import WorkList from '../Citizen/WorkList';
import MasterPlan from '../Citizen/MasterPlan';
import Analytics from '../Citizen/Analytics';

// State pages
import MasterPlans from '../State/MasterPlans';
import Notifications from '../State/Notifications';
import ActionPlanReview from '../State/ActionPlanReview';
import Reports from '../State/Reports';
import VideoConference from '../State/VideoConference';

const dashboardTitles = {
  citizen: 'Citizen Portal',
  panchayath: 'Panchayath Management',
  block: 'Block Administration',
  district: 'District Overview',
  state: 'State Dashboard',
  admin: 'System Administration'
};

// Reusable placeholder
const FeaturePlaceholder = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature Under Development</h2>
    <p className="text-gray-600">
      This feature is currently being developed and will be available soon.
    </p>
  </div>
);

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
    setActiveItem(item);
    setIsSidebarOpen(false);
  };

  const renderDashboard = () => {
    if (activeItem !== 'dashboard') {
      // Citizen pages
      if (user.role === 'citizen') {
        switch (activeItem) {
          case 'profile': return <Profile />;
          case 'job-card': return <JobCardApplication />;
          case 'job-application': return <JobApplication />;
          case 'job-request': return <JobRequest />;
          case 'application-status': return <ApplicationStatus />;
          case 'work-list': return <WorkList />;
          case 'master-plan': return <MasterPlan />;
          case 'analytics': return <Analytics />;
          case 'notifications': return <Notifications />;
          default: return <FeaturePlaceholder />;
        }
      }

      // State pages
      if (user.role === 'state') {
        switch (activeItem) {
          case 'action-plan': return <ActionPlanReview />;
          case 'master-plan': return <MasterPlans />;
          case 'analytics': return <Analytics />;
          case 'notifications': return <Notifications />;
          case 'reports': return <Reports />;
          case 'video-conference': return <VideoConference />;
          default: return <FeaturePlaceholder />;
        }
      }

      // Other roles (not implemented yet)
      return <FeaturePlaceholder />;
    }

    // When activeItem = dashboard
    switch (user.role) {
      case 'citizen': return <CitizenDashboard />;
      case 'panchayath': return <PanchayathDashboard />;
      case 'block': return <BlockDashboard />;
      case 'district': return <DistrictDashboard />;
      case 'state': return <StateDashboard />;
      case 'admin': return <AdminDashboard />;
      default: return <CitizenDashboard />;
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
