'use client';

import { useState } from 'react';
import DashboardCard from './DashboardCard';
import type { IssueType, IssueOption, IssuePreview } from '@/types';

interface VendorDashboardProps {
    onBack: () => void;
}

export default function VendorDashboard({ onBack }: VendorDashboardProps) {
    const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Fixed issue options
    const issueTypes: IssueOption[] = [
        { id: 'inventory', label: 'Low Inventory' },
        { id: 'demand', label: 'High Demand' },
        { id: 'power', label: 'Power Issue' },
        { id: 'staff', label: 'Staff Shortage' }
    ];

    // Mock AI generated preview content
    const getAiPreview = (issueId: IssueType): IssuePreview | null => {
        switch (issueId) {
            case 'inventory':
                return {
                    title: 'Restock Request Generated',
                    content: 'Logistics team notified for fast-track delivery to Booth A4.',
                    priority: 'medium'
                };
            case 'demand':
                return {
                    title: 'Crowd Control Alert',
                    content: 'Security dispatched to manage queue line overflow.',
                    priority: 'high'
                };
            case 'power':
                return {
                    title: 'Technical Support Ticket',
                    content: 'Electrician assigned. ETA 10 mins. Backup generated standby.',
                    priority: 'high'
                };
            case 'staff':
                return {
                    title: 'Staff Assistance',
                    content: 'Volunteer floaters requested for temporary coverage.',
                    priority: 'medium'
                };
            default:
                return null;
        }
    };

    const handleIssueSelect = (id: IssueType) => {
        if (isSubmitted) return;
        setSelectedIssue(id);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const activePreview = selectedIssue ? getAiPreview(selectedIssue) : null;

    return (
        <div className="pt-[120px] px-6 pb-12 max-w-[800px] mx-auto opacity-0 animate-[fadeInDashboard_500ms_ease-out_0.2s_forwards] sm:pt-[140px]">
            {/* Back Navigation */}
            <button
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer border-none bg-transparent p-0"
            >
                ← Back to Roles
            </button>

            {/* Header */}
            <header className="mb-10">
                <h1 className="font-sans font-semibold text-2xl text-foreground tracking-tight m-0 mb-2">Vendor Portal</h1>
                <p className="font-sans text-sm text-muted-foreground m-0">Report operational issues to event command</p>
            </header>

            {/* Main Content */}
            <main>

                {/* Issue Selector */}
                <section className="mb-8">
                    <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold m-0 mb-4">Report an Issue</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
                        {issueTypes.map((type) => (
                            <button
                                key={type.id}
                                className={`
                  bg-card border border-input rounded-xl p-6 h-[100px] flex items-center justify-center text-center
                  font-sans text-sm font-medium text-foreground cursor-pointer transition-all duration-200 ease-out shadow-sm
                  hover:enabled:border-primary/50 hover:enabled:bg-accent
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  disabled:cursor-default disabled:opacity-60
                  ${selectedIssue === type.id ? '!border-primary !text-primary !bg-primary/5 shadow-[0_0_0_1px_var(--color-primary)]' : ''}
                  ${isSubmitted && selectedIssue === type.id ? '!opacity-100' : ''}
                `}
                                onClick={() => handleIssueSelect(type.id)}
                                disabled={isSubmitted}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* AI Preview & Submission Area */}
                {activePreview && (
                    <section className="mt-10 pt-8 border-t border-dashed border-gray-200 animate-[fadeInBase_0.3s_ease-out_forwards]">
                        <h2 className="text-sm uppercase tracking-wider text-gray-400 font-semibold m-0 mb-4">System Response Preview</h2>

                        <div className="mb-6">
                            <DashboardCard
                                type={activePreview.priority === 'high' ? 'alert' : 'info'}
                                title={activePreview.title}
                                content={activePreview.content}
                                priority={activePreview.priority}
                            />
                        </div>

                        {/* Submission CTA or Feedback */}
                        {!isSubmitted ? (
                            <button
                                className="
                  w-full max-w-[300px] bg-primary text-primary-foreground border-none text-lg font-semibold py-4 px-8 rounded-xl cursor-pointer
                  transition-all duration-200 ease-out shadow-sm ring-offset-background
                  hover:bg-primary/90 hover:-translate-y-[1px]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                  sm:max-w-full
                "
                                onClick={handleSubmit}
                            >
                                Notify Organizer
                            </button>
                        ) : (
                            <div className="flex items-center gap-3 font-medium text-emerald-600 text-sm p-4 bg-emerald-50 rounded-xl border border-emerald-100 animate-[fadeInBase_0.3s_ease-out_forwards]">
                                <span className="font-bold text-lg">✓</span>
                                Issue reported. Operations team has been notified.
                            </div>
                        )}
                    </section>
                )}
            </main>
        </div>
    );
}
