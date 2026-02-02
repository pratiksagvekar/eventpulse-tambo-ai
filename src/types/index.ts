export type RoleId = 'organizer' | 'volunteer' | 'vendor';

export interface EventRole {
    id: RoleId;
    title: string;
    description: string;
}

export type Priority = 'high' | 'medium' | 'low';

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    duration?: string;
}

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

export type UiBlockType = 'alert' | 'info' | 'action';

export interface UiBlock {
    type: UiBlockType;
    priority: Priority;
    title: string;
    content: string;
    actionLabel?: string;
}
