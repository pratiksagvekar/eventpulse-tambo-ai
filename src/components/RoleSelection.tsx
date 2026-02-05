'use client';

import { useState } from 'react';
import type { EventRole, RoleId } from '@/types';

interface RoleSelectionProps {
    roles: EventRole[];
    onRoleSelect: (roleId: RoleId) => void;
    shouldAnimate?: boolean;
}

export default function RoleSelection({ roles, onRoleSelect, shouldAnimate = true }: RoleSelectionProps) {
    const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);
    const [isConfirming, setIsConfirming] = useState(false);

    const handleRoleClick = (roleId: RoleId) => {
        if (isConfirming) return;

        setSelectedRole(roleId);
        setIsConfirming(true);

        setTimeout(() => {
            onRoleSelect(roleId);
        }, 300);
    };

    // If returning (shouldAnimate=false), skip delays and start visible
    const subtitleClass = shouldAnimate
        ? "opacity-0 translate-y-2 animate-[fadeInUp_300ms_ease-out_6.2s_forwards]"
        : "opacity-100 translate-y-0 animate-[fadeInUp_300ms_ease-out_forwards]"; // fast fade in

    const buttonAnimClass = shouldAnimate
        ? "opacity-0 translate-y-3 animate-[cardFadeIn_400ms_ease-out_forwards]"
        : "opacity-0 translate-y-3 animate-[cardFadeIn_400ms_ease-out_forwards]";

    return (
        <div className="fixed top-[200px] left-6 right-6 flex flex-col gap-12 z-[90]">
            {/* Subtitle */}
            <p
                className={`
          font-sans font-normal text-base text-gray-500 m-0
          ${subtitleClass}
        `}
            >
                Generative Event Operations Dashboard
            </p>

            {/* Role Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-[900px] mx-auto px-6">
                {roles.map((role, index) => (
                    <button
                        key={role.id}
                        className={`
              flex-1 max-w-full md:max-w-[280px] bg-card border border-border rounded-xl p-8 
              text-left shadow-sm
              ${buttonAnimClass}
              transition-all duration-200 ease-out
              hover:enabled:border-primary hover:enabled:shadow-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              ${selectedRole === role.id ? 'border-primary ring-2 ring-ring ring-offset-2' : ''}
              ${isConfirming && selectedRole !== role.id ? 'opacity-40 grayscale' : ''}
            `}
                        style={{
                            animationDelay: shouldAnimate ? `${6.6 + (index * 0.08)}s` : `${index * 0.1}s`
                        }}
                        onClick={() => handleRoleClick(role.id)}
                        disabled={isConfirming}
                        aria-pressed={selectedRole === role.id}
                    >
                        <h3 className="font-sans font-semibold text-lg text-foreground mb-2 tracking-tight">{role.title}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
