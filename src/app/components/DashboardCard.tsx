'use client';

import type { UiBlockType, Priority } from '@/types';

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

export default function DashboardCard({
    type,
    title,
    content,
    actionLabel,
    priority = 'medium',
    onAction,
    isLoading = false,
    isSuccess = false,
    disabled = false
}: DashboardCardProps) {

    // Minimalist badge styles (Shadcn-like)
    const priorityBadges = {
        high: 'bg-red-50 text-red-700 border border-red-200',
        medium: 'bg-amber-50 text-amber-700 border border-amber-200',
        low: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    };

    const priorityLabels = {
        high: 'Critical',
        medium: 'Warning',
        low: 'Info'
    };

    return (
        <div
            className="
        bg-card text-card-foreground border border-border rounded-xl p-5 flex flex-col gap-3 h-full
        transition-all duration-200 ease-out hover:shadow-sm hover:border-zinc-300
      "
        >
            {/* Header with optional badge */}
            <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-sans font-semibold text-base text-foreground leading-tight tracking-tight">{title}</h3>
                {priority && (type === 'alert' || type === 'action') && (
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${priorityBadges[priority]}`}>
                        {priorityLabels[priority]}
                    </span>
                )}
            </div>

            {/* Content */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-grow">
                {content}
            </p>

            {/* Action Button (Shadcn Button Variant) */}
            {type === 'action' && actionLabel && (
                <button
                    onClick={onAction}
                    disabled={disabled || isLoading || isSuccess}
                    className={`
            mt-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
            h-9 px-4 py-2 w-full sm:w-auto self-start
            ${isSuccess
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'}
          `}
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Processing...
                        </span>
                    ) : isSuccess ? (
                        <span className="flex items-center gap-2">
                            ✓ Done
                        </span>
                    ) : (
                        actionLabel
                    )}
                </button>
            )}
        </div>
    );
}
