'use client';

import { useState } from 'react';
import DashboardCard from '@/app/components/DashboardCard';
import type { UiBlock } from '@/types';

interface OrganizerDashboardProps {
    eventState?: string;
    blocks?: UiBlock[];
    onBack: () => void;
}

export default function OrganizerDashboard({ eventState = 'Normal', blocks = [], onBack }: OrganizerDashboardProps) {
    const [actionStates, setActionStates] = useState<Record<number, 'idle' | 'loading' | 'success'>>({});

    // Simulate an AI action
    const handleAction = (index: number) => {
        if (actionStates[index] === 'loading' || actionStates[index] === 'success') return;

        setActionStates(prev => ({ ...prev, [index]: 'loading' }));

        // Simulate network/processing delay
        setTimeout(() => {
            setActionStates(prev => ({ ...prev, [index]: 'success' }));

            // Optional: Reset after a few seconds? 
            // For now, let's keep it as "Done" to show persistence
        }, 2000);
    };

    return (
        <div className="pt-[120px] px-6 pb-12 max-w-[1200px] mx-auto opacity-0 animate-[fadeInDashboard_500ms_ease-out_0.2s_forwards]">
            {/* Back Navigation */}
            <button
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm cursor-pointer border-none bg-transparent p-0"
            >
                ← Back to Roles
            </button>

            {/* Header */}
            <header className="flex justify-between items-start mb-12 flex-wrap gap-6 sm:flex-col sm:items-start">
                <div className="flex flex-col gap-2">
                    <h1 className="font-sans font-semibold text-2xl text-foreground tracking-tight m-0">Organizer Dashboard</h1>
                    <p className="font-sans text-sm text-muted-foreground m-0">Real-time generative operations view</p>
                </div>

                {/* Event State Selector */}
                <div className="flex items-center gap-3 bg-card border border-border py-2 px-4 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-muted-foreground">Event State:</span>
                    <div className="relative">
                        <select
                            className="appearance-none border-none bg-transparent text-sm font-medium text-foreground pr-5 cursor-pointer outline-none focus:ring-0"
                            defaultValue={eventState}
                            aria-label="Event State Selector"
                        >
                            <option value="Normal">Normal</option>
                            <option value="Crowd Heavy">Crowd Heavy</option>
                            <option value="F&B Rush">F&B Rush</option>
                            <option value="Volunteer Shortage">Volunteer Shortage</option>
                        </select>
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full">
                {blocks.map((block, index) => (
                    <DashboardCard
                        key={index}
                        type={block.type}
                        title={block.title}
                        content={block.content}
                        actionLabel={block.actionLabel}
                        priority={block.priority}
                        onAction={block.type === 'action' ? () => handleAction(index) : undefined}
                        isLoading={actionStates[index] === 'loading'}
                        isSuccess={actionStates[index] === 'success'}
                    />
                ))}
            </main>
        </div>
    );
}
