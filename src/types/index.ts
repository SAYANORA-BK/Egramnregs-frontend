export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  location?: string;
  phone?: string;
  address?: string;
}

export type UserRole = 'citizen' | 'panchayath' | 'block' | 'district' | 'state' | 'admin';

export interface JobCard {
  id: string;
  applicantName: string;
  applicantId: string;
  status: 'pending' | 'verified' | 'approved' | 'rejected';
  appliedDate: string;
  verifiedDate?: string;
  documents: {
    idProof: boolean;
    bankDetails: boolean;
    rationCard: boolean;
    photo: boolean;
  };
  verificationNotes?: string;
  panchayathOfficer?: string;
}

export interface JobApplication {
  id: string;
  applicantId: string;
  applicantName: string;
  workType: string;
  workId?: string;
  applicationDate: string;
  status: 'pending' | 'approved' | 'allocated' | 'completed' | 'rejected';
  location: string;
  preferredStartDate: string;
  isOwnWork: boolean;
}

export interface JobRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  workTitle: string;
  workDescription: string;
  location: string;
  estimatedWorkers: number;
  estimatedDuration: string;
  requestDate: string;
  status: 'pending' | 'under_review' | 'technical_sanction' | 'financial_sanction' | 'approved' | 'rejected';
  groupMembers: string[];
  priority: 'low' | 'medium' | 'high';
}

export interface Work {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  location: string;
  duration: string;
  wages: number;
  workersNeeded: number;
  workersAllocated: number;
  status: 'planned' | 'ongoing' | 'completed' | 'suspended';
  startDate: string;
  endDate?: string;
  technicalSanction: boolean;
  financialSanction: boolean;
  estimatedCost: number;
}

export type WorkCategory = 
  | 'rural_connectivity'
  | 'water_conservation'
  | 'drought_proofing'
  | 'micro_irrigation'
  | 'provision_irrigation'
  | 'renovation_traditional_water_bodies'
  | 'land_development'
  | 'flood_control'
  | 'rural_sanitation';

export interface ActionPlan {
  id: string;
  panchayathId: string;
  panchayathName: string;
  financialYear: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  submittedDate?: string;
  reviewedDate?: string;
  works: Work[];
  totalBudget: number;
  reviewComments?: string;
  reviewedBy?: string;
}

export interface MusterRoll {
  id: string;
  workId: string;
  workTitle: string;
  date: string;
  workers: WorkerAttendance[];
  status: 'draft' | 'submitted' | 'approved';
}

export interface WorkerAttendance {
  workerId: string;
  workerName: string;
  jobCardNumber: string;
  present: boolean;
  hoursWorked: number;
  wageEarned: number;
}

export interface Device {
  id: string;
  deviceName: string;
  deviceType: 'tablet' | 'smartphone' | 'laptop';
  assignedTo: string;
  location: string;
  status: 'active' | 'inactive' | 'maintenance';
  registrationDate: string;
}

export interface VideoConference {
  id: string;
  title: string;
  scheduledDate: string;
  scheduledTime: string;
  participants: string[];
  meetingLink: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  agenda: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  userId: string;
  actionUrl?: string;
}

export interface BudgetAnalysis {
  totalAllocated: number;
  totalUtilized: number;
  utilizationPercentage: number;
  categoryWiseBreakdown: {
    category: WorkCategory;
    allocated: number;
    utilized: number;
  }[];
}

export interface PerformanceMetrics {
  jobCardsIssued: number;
  worksCompleted: number;
  personDaysGenerated: number;
  averageWage: number;
  completionRate: number;
  budgetUtilization: number;
}

export interface GeographicData {
  state: string;
  district: string;
  block: string;
  panchayath: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  metrics: PerformanceMetrics;
}