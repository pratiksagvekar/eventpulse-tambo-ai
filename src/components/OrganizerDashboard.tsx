'use client';

import { useState } from 'react';
import { LayoutDashboard, ArrowLeft } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import type { OrganizerDashboardProps, EventState, UiBlock } from '@/types';

const defaultBlocks: UiBlock[] = [
    {
        type: 'alert',
        priority: 'high',
        title: 'Crowd Density Alert',
        content: 'Main stage area approaching capacity. Consider opening overflow zones.',
    },
    {
        type: 'info',
        priority: 'medium',
        title: 'Current Attendance',
        content: '2,847 attendees checked in. 15% above projected turnout.',
    },
    {
        type: 'action',
        priority: 'low',
        title: 'Volunteer Check-in',
        content: '23 volunteers on-site and ready. All zones covered.',
        actionLabel: 'View Assignments',
    },
];

export function OrganizerDashboard({
    eventState = 'Normal',
    blocks = defaultBlocks,
    onBack,
}: OrganizerDashboardProps) {
    const [selectedState, setSelectedState] = useState<EventState>(eventState);
    const [actionStates, setActionStates] = useState<Record<number, { loading: boolean; success: boolean }>>({});

    const handleAction = (index: number) => {
        setActionStates(prev => ({ ...prev, [index]: { loading: true, success: false } }));

        setTimeout(() => {
            setActionStates(prev => ({ ...prev, [index]: { loading: false, success: true } }));
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20 p-6 animate-[fadeInDashboard_0.5s_ease-out]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="p-2 rounded-lg hover:bg-muted transition-colors"
                                aria-label="Back to roles"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-linear-to-br from-primary to-secondary text-white">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold gradient-text">Organizer Dashboard</h1>
                                <p className="text-sm text-muted-foreground">Real-time generative operations view</p>
                            </div>
                        </div>
                    </div>

                    {/* Event State Selector */}
                    <div className="flex items-center gap-3">
                        <label htmlFor="event-state" className="text-sm font-medium text-foreground">
                            Event State:
                        </label>
                        <select
                            id="event-state"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value as EventState)}
                            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="Normal">Normal</option>
                            <option value="Crowd Heavy">Crowd Heavy</option>
                            <option value="F&B Rush">F&B Rush</option>
                            <option value="Volunteer Shortage">Volunteer Shortage</option>
                        </select>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blocks.map((block, index) => (
                        <DashboardCard
                            key={index}
                            {...block}
                            onAction={block.type === 'action' ? () => handleAction(index) : undefined}
                            isLoading={actionStates[index]?.loading}
                            isSuccess={actionStates[index]?.success}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
