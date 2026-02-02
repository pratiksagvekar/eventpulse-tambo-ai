'use client';

import { useState, useEffect } from 'react';

interface LandingAnimationProps {
    onComplete: () => void;
}

export default function LandingAnimation({ onComplete }: LandingAnimationProps) {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
            onComplete();
        }, 6500); // Slightly longer than 6000 to ensure full settling

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`
        fixed inset-0 w-screen h-screen bg-[#F9FAFB] z-[1000] overflow-hidden transition-colors duration-500 ease-out
        ${animationComplete ? '!bg-transparent pointer-events-none' : ''}
      `}
        >
            <div
                className={`
          flex items-center gap-0 absolute whitespace-nowrap z-[1001]
          top-1/2 left-1/2 origin-top-left
          animate-[moveToLogo_2.5s_cubic-bezier(0.25,0.1,0.25,1)_3.5s_forwards]
          ${animationComplete ? 'pointer-events-auto' : ''}
        `}
                style={{
                    transform: 'translate(-50%, -50%) scale(1)'
                }}
            >
                <span
                    className="
            font-sans font-semibold text-primary text-[clamp(3rem,8vw,5rem)] tracking-tight select-none inline-block
            opacity-0 -translate-x-[100px]
            animate-[slideInWord_1.2s_cubic-bezier(0.25,0.1,0.25,1)_0.2s_forwards]
          "
                >
                    Event
                </span>
                <span
                    className="
            font-sans font-semibold text-primary text-[clamp(3rem,8vw,5rem)] tracking-tight select-none inline-block
            opacity-0 -translate-x-[100px]
            animate-[slideInWord_1.2s_cubic-bezier(0.25,0.1,0.25,1)_1.2s_forwards]
          "
                >
                    Pulse
                </span>
            </div>
        </div>
    );
}
