'use client';

import type { Priority } from '@/types';

interface VolunteerTaskCardProps {
    title: string;
    description: string;
    priority?: Priority;
    duration?: string;
    onAccept: () => void;
    onDecline: () => void;
}

export default function VolunteerTaskCard({
    title,
    description,
    priority = 'medium',
    duration,
    onAccept,
    onDecline
}: VolunteerTaskCardProps) {

    const priorityLabels = {
        high: 'High Priority',
        medium: 'Medium Priority',
        low: 'Normal Priority'
    };

    const badgeStyles = {
        high: 'bg-red-50 text-red-700 border-red-200',
        medium: 'bg-amber-50 text-amber-700 border-amber-200',
        low: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };

    const borderClass = priority === 'high' ? 'border-red-200 ring-1 ring-red-100' : 'border-border';

    return (
        <div
            className={`
        bg-card border rounded-xl p-5 flex flex-col gap-4 text-left shadow-sm
        transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
        ${borderClass}
      `}
        >
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border ${badgeStyles[priority]}`}>
                        {priorityLabels[priority]}
                    </span>
                    {duration && <span className="text-sm font-medium text-muted-foreground">Est: {duration}</span>}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-lg text-foreground m-0 tracking-tight">{title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed m-0">{description}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-1">
                <button
                    className="
            flex-1 bg-background text-foreground border border-input px-4 py-2.5 rounded-lg
            font-medium text-sm cursor-pointer transition-colors duration-200
            hover:bg-accent hover:text-accent-foreground
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          "
                    onClick={onDecline}
                    aria-label="Decline task"
                >
                    Decline
                </button>
                <button
                    className="
            flex-1 bg-primary text-primary-foreground border-none px-4 py-2.5 rounded-lg
            font-medium text-sm cursor-pointer transition-colors duration-200
            hover:bg-primary/90
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          "
                    onClick={onAccept}
                    aria-label="Accept task"
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
}
