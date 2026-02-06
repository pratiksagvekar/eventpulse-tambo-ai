'use client';

import { Loader2, Check } from 'lucide-react';
import type { DashboardCardProps } from '@/types';

export function DashboardCard({
    type,
    title,
    content,
    actionLabel,
    priority = 'low',
    onAction,
    isLoading = false,
    isSuccess = false,
    disabled = false,
}: DashboardCardProps) {
    const priorityStyles = {
        high: 'bg-red-100 text-red-800 border-red-200',
        medium: 'bg-amber-100 text-amber-800 border-amber-200',
        low: 'bg-green-100 text-green-800 border-green-200',
    };

    const priorityLabels = {
        high: 'CRITICAL',
        medium: 'WARNING',
        low: 'INFO',
    };

    const pulseColors = {
        high: 'bg-red-500',
        medium: 'bg-amber-500',
        low: 'bg-green-500',
    };

    return (
        <div className="bg-card border border-border rounded-xl p-5 hover:shadow-elevated hover:border-primary/50 hover:scale-[1.01] transition-all duration-300 group">
            {/* Priority Badge with Pulse Indicator */}
            {type === 'alert' && (
                <div className="mb-3 flex items-center gap-2">
                    {/* Pulsing Dot */}
                    <div className="relative">
                        <div className={`w-2 h-2 rounded-full ${pulseColors[priority]}`}
                            style={{ animation: 'statusPulse 1.5s ease-in-out infinite' }} />
                        <div className={`absolute inset-0 w-2 h-2 rounded-full ${pulseColors[priority]} opacity-50`}
                            style={{ animation: 'statusPulse 1.5s ease-in-out infinite 0.75s' }} />
                    </div>

                    <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${priorityStyles[priority]}`}
                    >
                        {priorityLabels[priority]}
                    </span>
                </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>

            {/* Content */}
            <p className="text-sm text-muted-foreground mb-4">{content}</p>

            {/* Action Button */}
            {type === 'action' && actionLabel && onAction && (
                <button
                    onClick={onAction}
                    disabled={disabled || isLoading || isSuccess}
                    className="relative overflow-hidden w-full px-4 py-2 rounded-lg font-medium text-white bg-linear-to-r from-primary to-secondary hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isSuccess && <Check className="w-4 h-4 animate-[scaleIn_0.3s_ease-out]" />}
                    {isLoading ? 'Processing...' : isSuccess ? '✓ Done' : actionLabel}
                </button>
            )}
        </div>
    );
}
