'use client';

import { useState } from 'react';
import { HeartHandshake, ArrowLeft, Info } from 'lucide-react';
import { VolunteerTaskCard } from './VolunteerTaskCard';
import type { VolunteerDashboardProps, Task } from '@/types';

const defaultTasks: Task[] = [
    {
        id: '1',
        title: 'Assist at Registration Desk',
        description: 'Help check in attendees at the main entrance. Training provided on-site.',
        priority: 'high',
        duration: '2 hours',
    },
    {
        id: '2',
        title: 'Distribute Water Bottles',
        description: 'Hand out water bottles to attendees in Zone B hydration station.',
        priority: 'medium',
        duration: '1 hour',
    },
];

export function VolunteerDashboard({
    tasks = defaultTasks,
    onBack,
}: VolunteerDashboardProps) {
    const [isAvailable, setIsAvailable] = useState(false);
    const [acceptedTasks, setAcceptedTasks] = useState<string[]>([]);

    const handleAvailability = () => {
        setIsAvailable(true);
    };

    const handleAccept = (taskId: string) => {
        setAcceptedTasks(prev => [...prev, taskId]);
    };

    const handleDecline = (taskId: string) => {
        console.log('Declined task:', taskId);
    };

    const availableTasks = tasks.filter(task => !acceptedTasks.includes(task.id));

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20 p-6 animate-[fadeInDashboard_0.5s_ease-out]">
            <div className="max-w-4xl mx-auto">
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
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold gradient-text">Volunteer Hub</h1>
                                <p className="text-sm text-muted-foreground">Tasks adapted to live event needs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Availability Section */}
                <div className="mb-8">
                    {!isAvailable ? (
                        <button
                            onClick={handleAvailability}
                            className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-primary to-secondary hover:shadow-lg transition-all duration-200 text-lg"
                        >
                            I'm free now
                        </button>
                    ) : (
                        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 text-center">
                            <p className="text-green-800 font-semibold">
                                Status: Available (Scanning for tasks...)
                            </p>
                        </div>
                    )}
                </div>

                {/* Task Stream */}
                <div className="mb-8">
                    <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        SUGGESTED TASKS
                    </h2>
                    <div className="space-y-4">
                        {availableTasks.length > 0 ? (
                            availableTasks.map((task) => (
                                <VolunteerTaskCard
                                    key={task.id}
                                    title={task.title}
                                    description={task.description}
                                    priority={task.priority}
                                    duration={task.duration}
                                    onAccept={() => handleAccept(task.id)}
                                    onDecline={() => handleDecline(task.id)}
                                />
                            ))
                        ) : (
                            <div className="bg-card border-2 border-dashed border-border rounded-xl p-8 text-center">
                                <p className="text-muted-foreground">No immediate tasks available</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Safety Info */}
                <div className="bg-muted/50 border border-border rounded-xl p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                        Hydration stations are now open in Zone B. Remember to take breaks and stay hydrated!
                    </p>
                </div>
            </div>
        </div>
    );
}
