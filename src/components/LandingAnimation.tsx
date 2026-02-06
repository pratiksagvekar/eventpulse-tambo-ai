'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { LandingAnimationProps } from '@/types';

export function LandingAnimation({ onComplete }: LandingAnimationProps) {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Complete animation after 6.5 seconds
        const timer = setTimeout(() => {
            setIsComplete(true);
            onComplete();
        }, 6500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-1000 flex items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            style={{ background: 'hsl(210, 40%, 98%)' }}
        >
            {/* Logo Animation Container */}
            <div
                className="absolute z-1001"
                style={{
                    left: '50%',
                    top: '50%',
                    animation: 'moveToLogo 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 3.5s forwards',
                }}
            >
                <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-linear-to-br from-primary to-secondary text-white">
                        <Sparkles className="w-6 h-6" />
                    </div>

                    {/* Text */}
                    <div className="flex items-baseline gap-2 text-[clamp(3rem,8vw,5rem)] font-bold">
                        {/* "Event" word */}
                        <span
                            className="text-foreground"
                            style={{
                                animation: 'slideInWord 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s both',
                            }}
                        >
                            Event
                        </span>

                        {/* "Pulse" word */}
                        <span
                            className="gradient-text"
                            style={{
                                animation: 'slideInWord 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 1.2s both',
                            }}
                        >
                            Pulse
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
