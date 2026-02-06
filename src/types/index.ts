// EventPulse Type Definitions

// User Roles
export type RoleId = 'organizer' | 'volunteer' | 'vendor';

export interface EventRole {
    id: RoleId;
    title: string;
    description: string;
    icon: string;
}

// Priority System
export type Priority = 'high' | 'medium' | 'low';

// Volunteer Tasks
export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    duration?: string;
}

// Vendor Issues
export type IssueType = 'inventory' | 'demand' | 'power' | 'staff';

export interface IssueOption {
    id: IssueType;
    label: string;
}

export interface IssuePreview {
    title: string;
    content: string;
    priority: Priority;
}

// Dashboard Blocks
export type UiBlockType = 'alert' | 'info' | 'action';

export interface UiBlock {
    type: UiBlockType;
    priority: Priority;
    title: string;
    content: string;
    actionLabel?: string;
}

// Event States
export type EventState = 'Normal' | 'Crowd Heavy' | 'F&B Rush' | 'Volunteer Shortage';

// Component Props
export interface DashboardCardProps {
    type: UiBlockType;
    title: string;
    content: string;
    actionLabel?: string;
    priority?: Priority;
    onAction?: () => void;
    isLoading?: boolean;
    isSuccess?: boolean;
    disabled?: boolean;
}

export interface VolunteerTaskCardProps {
    title: string;
    description: string;
    priority?: Priority;
    duration?: string;
    onAccept: () => void;
    onDecline: () => void;
}

export interface LandingAnimationProps {
    onComplete: () => void;
}

export interface OrganizerDashboardProps {
    eventState?: EventState;
    blocks?: UiBlock[];
    onBack?: () => void;
}

export interface VolunteerDashboardProps {
    tasks?: Task[];
    onBack?: () => void;
}

export interface VendorDashboardProps {
    reason?: string;
    onBack?: () => void;
}
