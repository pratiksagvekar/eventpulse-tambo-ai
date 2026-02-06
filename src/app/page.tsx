'use client';

import { useState } from 'react';
import { LandingAnimation } from '@/components/LandingAnimation';
import { ChatInterface } from '@/components/ChatInterface';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  const handleAnimationComplete = () => {
    setShowLanding(false);
  };

  return (
    <>
      {showLanding && <LandingAnimation onComplete={handleAnimationComplete} />}
      <ChatInterface />
    </>
  );
}
