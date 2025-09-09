import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LoginForm } from "./components/Auth/LoginForm";

import { Loader2 } from "lucide-react";

// Citizen Pages
import JobCardApplication from "./components/Citizen/JobCardApplication";
import JobApplication from "./components/Citizen/JobApplication";
import JobRequest from "./components/Citizen/JobRequest";
import ApplicationStatus from "./components/Citizen/ApplicationStatus";
import WorkList from "./components/Citizen/WorkList";
import MasterPlan from "./components/Citizen/MasterPlan";
import Analytics from "./components/Citizen/Analytics";
import Notifications from "./components/Citizen/Notifications";
import { Profile } from "./components/Citizen/Profile";

// State Pages
import StateActionPlanReview from "./components/State/ActionPlanReview";
import StateMasterPlan from "./components/State/MasterPlans";
import StateAnalytics from "./components/State/Analytics";
import StateNotifications from "./components/State/Notifications";
import StateReports from "./components/State/Reports";
import StateVideoConference from "./components/State/VideoConference";
import { DashboardLayout } from "./components/Layout/DashboardLayout";

function AppContent() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading MGNREGA Portal...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {/* Citizen Routes */}
          <Route path="/citizen/profile" element={<Profile />} />
          <Route path="/citizen/job-card" element={<JobCardApplication />} />
          <Route path="/citizen/job-application" element={<JobApplication />} />
          <Route path="/citizen/job-request" element={<JobRequest />} />
          <Route path="/citizen/application-status" element={<ApplicationStatus />} />
          <Route path="/citizen/work-list" element={<WorkList />} />
          <Route path="/citizen/master-plan" element={<MasterPlan />} />
          <Route path="/citizen/analytics" element={<Analytics />} />
          <Route path="/citizen/notifications" element={<Notifications />} />

          {/* State Routes */}
          <Route path="/state/action-plan" element={<StateActionPlanReview />} />
          <Route path="/state/master-plan" element={<StateMasterPlan />} />
          <Route path="/state/analytics" element={<StateAnalytics />} />
          <Route path="/state/notifications" element={<StateNotifications />} />
          <Route path="/state/reports" element={<StateReports />} />
          <Route path="/state/video-conference" element={<StateVideoConference />} />

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/citizen/profile" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
