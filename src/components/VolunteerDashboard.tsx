'use client';

import { useState } from 'react';
import VolunteerTaskCard from './VolunteerTaskCard';
import type { Task } from '@/types';

interface VolunteerDashboardProps {
    tasks?: Task[];
    onBack: () => void;
}

export default function VolunteerDashboard({ tasks = [], onBack }: VolunteerDashboardProps) {
    const [isAvailable, setIsAvailable] = useState(false);

    const handleAvailability = () => {
        setIsAvailable(true);
    };

    const handleTaskAccept = (taskId: string) => {
        console.log(`Task accepted: ${taskId}`);
    };

    const handleTaskDecline = (taskId: string) => {
        console.log(`Task declined: ${taskId}`);
    };

    return (
        <div className="pt-[120px] px-6 pb-12 max-w-[800px] mx-auto opacity-0 animate-[fadeInDashboard_500ms_ease-out_0.2s_forwards] sm:pt-[140px]">
            {/* Back Navigation */}
            <button
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm cursor-pointer border-none bg-transparent p-0"
            >
                ← Back to Roles
            </button>

            {/* Header */}
            <header className="mb-8">
                <h1 className="font-sans font-semibold text-2xl text-foreground tracking-tight m-0 mb-2">Volunteer Hub</h1>
                <p className="font-sans text-sm text-muted-foreground m-0">Tasks adapted to live event needs</p>
            </header>

            {/* Primary CTA */}
            <section className="mb-10">
                <button
                    className={`
            w-full max-w-[400px] bg-primary text-primary-foreground border-none text-lg font-semibold py-4 px-6 rounded-xl cursor-pointer
            transition-all duration-200 ease-out shadow-sm ring-offset-background
            hover:enabled:bg-primary/90 hover:enabled:-translate-y-[1px]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-default sm:max-w-full
            ${isAvailable ? '!bg-muted !text-muted-foreground !border-2 !border-muted-foreground/20 shadow-none' : ''}
          `}
                    onClick={handleAvailability}
                    disabled={isAvailable}
                >
                    {isAvailable ? 'Status: Available (Scanning for tasks...)' : "I'm free now"}
                </button>
            </section>

            {/* Task Stream */}
            <main className="flex flex-col gap-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-400 font-semibold m-0 mb-4">Suggested Tasks</h2>

                {tasks.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {tasks.map((task, index) => (
                            <VolunteerTaskCard
                                key={index}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                duration={task.duration}
                                onAccept={() => handleTaskAccept(task.id)}
                                onDecline={() => handleTaskDecline(task.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded-xl text-center text-gray-500 border border-dashed border-gray-200">
                        <p>No immediate tasks. Stay on standby.</p>
                    </div>
                )}
            </main>

            {/* Safety Info Slot */}
            <aside className="mt-12">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                    <span className="text-xl">ℹ️</span>
                    <p className="m-0 text-sm text-slate-600 leading-relaxed">
                        Hydration stations are now open in Zone B. Direct guests accordingly.
                    </p>
                </div>
            </aside>
        </div>
    );
}
