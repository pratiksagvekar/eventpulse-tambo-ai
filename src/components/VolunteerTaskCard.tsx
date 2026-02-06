'use client';

import type { VolunteerTaskCardProps } from '@/types';

export function VolunteerTaskCard({
    title,
    description,
    priority = 'medium',
    duration,
    onAccept,
    onDecline,
}: VolunteerTaskCardProps) {
    const priorityStyles = {
        high: 'border-red-500 ring-2 ring-red-500/20',
        medium: 'border-amber-500',
        low: 'border-green-500',
    };

    const priorityBadgeStyles = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-amber-100 text-amber-800',
        low: 'bg-green-100 text-green-800',
    };

    const priorityLabels = {
        high: 'HIGH PRIORITY',
        medium: 'MEDIUM',
        low: 'LOW',
    };

    return (
        <div
            className={`bg-card border-2 ${priorityStyles[priority]} rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
        >
            {/* Header with Priority and Duration */}
            <div className="flex items-center justify-between mb-3">
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${priorityBadgeStyles[priority]}`}
                >
                    {priorityLabels[priority]}
                </span>
                {duration && (
                    <span className="text-xs text-muted-foreground font-medium">
                        {duration}
                    </span>
                )}
            </div>

            {/* Task Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

            {/* Task Description */}
            <p className="text-sm text-muted-foreground mb-4">{description}</p>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={onDecline}
                    className="flex-1 px-4 py-2 rounded-lg font-medium text-foreground bg-muted hover:bg-muted/80 transition-colors duration-200"
                >
                    Decline
                </button>
                <button
                    onClick={onAccept}
                    className="flex-1 px-4 py-2 rounded-lg font-medium text-white bg-linear-to-r from-primary to-secondary hover:shadow-md transition-all duration-200"
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
}
