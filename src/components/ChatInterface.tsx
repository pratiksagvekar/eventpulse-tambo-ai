'use client';

import { useState } from 'react';
import { Sparkles, LayoutDashboard, HeartHandshake, Store } from 'lucide-react';
import { OrganizerDashboard } from './OrganizerDashboard';
import { VolunteerDashboard } from './VolunteerDashboard';
import { VendorDashboard } from './VendorDashboard';
import type { EventRole, RoleId } from '@/types';

const roles: EventRole[] = [
    {
        id: 'organizer',
        title: 'Organizer',
        description: 'Manage ops & alerts',
        icon: 'LayoutDashboard',
    },
    {
        id: 'volunteer',
        title: 'Volunteer',
        description: 'View assigned tasks',
        icon: 'HeartHandshake',
    },
    {
        id: 'vendor',
        title: 'Vendor',
        description: 'Report issues',
        icon: 'Store',
    },
];

const iconMap = {
    LayoutDashboard,
    HeartHandshake,
    Store,
};

export function ChatInterface() {
    const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);

    const handleRoleSelect = (roleId: RoleId) => {
        // 300ms confirmation delay as per spec
        setTimeout(() => {
            setSelectedRole(roleId);
        }, 300);
    };

    const handleBack = () => {
        setSelectedRole(null);
    };

    // If a role is selected, render the corresponding dashboard
    if (selectedRole === 'organizer') {
        return <OrganizerDashboard onBack={handleBack} />;
    }

    if (selectedRole === 'volunteer') {
        return <VolunteerDashboard onBack={handleBack} />;
    }

    if (selectedRole === 'vendor') {
        return <VendorDashboard onBack={handleBack} />;
    }

    // Otherwise, show role selection interface

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-linear-to-br from-primary to-secondary text-white">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold gradient-text">EventPulse AI</h1>
                            <p className="text-xs text-muted-foreground">Generative Operations Assistant</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Subtitle */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Generative Event Operations Dashboard
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Select your role to get started
                    </p>
                </div>

                {/* Role Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {roles.map((role, index) => {
                        const Icon = iconMap[role.icon as keyof typeof iconMap];

                        return (
                            <button
                                key={role.id}
                                onClick={() => handleRoleSelect(role.id)}
                                className="group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left border-border bg-card hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]"
                                style={{
                                    animation: `slideInFromRight 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 100}ms both`
                                }}
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{ boxShadow: 'var(--glow-primary)' }} />

                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${role.id === 'organizer' ? 'bg-linear-to-br from-primary to-secondary' :
                                    role.id === 'volunteer' ? 'bg-linear-to-br from-blue-500 to-blue-600' :
                                        'bg-linear-to-br from-orange-500 to-orange-600'
                                    } text-white`}>
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                                    {role.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {role.description}
                                </p>

                                {/* Focus Ring */}
                                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary opacity-0 group-focus-visible:opacity-100 transition-opacity" />
                            </button>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
