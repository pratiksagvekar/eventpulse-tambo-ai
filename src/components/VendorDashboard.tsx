'use client';

import { useState } from 'react';
import { Store, ArrowLeft, Check } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import type { VendorDashboardProps, IssueType, IssueOption, IssuePreview } from '@/types';

const issueOptions: IssueOption[] = [
    { id: 'inventory', label: 'Low Inventory' },
    { id: 'demand', label: 'High Demand' },
    { id: 'power', label: 'Power Issue' },
    { id: 'staff', label: 'Staff Shortage' },
];

const issuePreviews: Record<IssueType, IssuePreview> = {
    inventory: {
        title: 'Restock Request Generated',
        content: 'Supply team notified. Estimated delivery: 15 minutes.',
        priority: 'medium',
    },
    demand: {
        title: 'Crowd Control Alert',
        content: 'Security team dispatched to manage queue. Additional staff en route.',
        priority: 'high',
    },
    power: {
        title: 'Technical Support Ticket',
        content: 'Electrician team alerted. Priority response initiated.',
        priority: 'high',
    },
    staff: {
        title: 'Staff Assistance',
        content: 'Backup staff from Zone A reassigned to your location.',
        priority: 'medium',
    },
};

export function VendorDashboard({
    reason,
    onBack,
}: VendorDashboardProps) {
    const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(reason as IssueType || null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleIssueSelect = (issueId: IssueType) => {
        if (!isSubmitted) {
            setSelectedIssue(issueId);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20 p-6 animate-[fadeInDashboard_0.5s_ease-out]">
            <div className="max-w-3xl mx-auto">
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
                                <Store className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold gradient-text">Vendor Portal</h1>
                                <p className="text-sm text-muted-foreground">
                                    Report operational issues to event command
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Issue Selector */}
                <div className="mb-8">
                    <h2 className="text-sm font-semibold text-foreground mb-4">Select Issue Type:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {issueOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleIssueSelect(option.id)}
                                disabled={isSubmitted}
                                className={`p-4 rounded-xl border-2 font-medium transition-all duration-200 ${selectedIssue === option.id
                                        ? 'border-primary bg-primary/5 text-primary'
                                        : 'border-border bg-card text-foreground hover:border-primary/50'
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI Preview Section */}
                {selectedIssue && (
                    <div className="mb-8 animate-[fadeInUp_0.3s_ease-out]">
                        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                            SYSTEM RESPONSE PREVIEW
                        </h2>
                        <DashboardCard
                            type="info"
                            title={issuePreviews[selectedIssue].title}
                            content={issuePreviews[selectedIssue].content}
                            priority={issuePreviews[selectedIssue].priority}
                        />
                    </div>
                )}

                {/* Submit Button */}
                {selectedIssue && !isSubmitted && (
                    <button
                        onClick={handleSubmit}
                        className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-primary to-secondary hover:shadow-lg transition-all duration-200 text-lg"
                    >
                        Notify Organizer
                    </button>
                )}

                {/* Success Confirmation */}
                {isSubmitted && (
                    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center animate-[scaleIn_0.3s_ease-out]">
                        <Check className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <p className="text-green-800 font-semibold text-lg">
                            Issue reported successfully!
                        </p>
                        <p className="text-green-700 text-sm mt-2">
                            Event command has been notified and will respond shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
