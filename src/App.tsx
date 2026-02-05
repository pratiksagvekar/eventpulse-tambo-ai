import { useState } from 'react';
import LandingAnimation from '@/components/LandingAnimation';
import RoleSelection from '@/components/RoleSelection';
import OrganizerDashboard from '@/components/OrganizerDashboard';
import VolunteerDashboard from '@/components/VolunteerDashboard';
import VendorDashboard from '@/components/VendorDashboard';
import type { EventRole, RoleId, UiBlock, Task } from '@/types';

// Roles configuration - In the future, this could be populated by AI context
const EVENT_ROLES: EventRole[] = [
    {
        id: 'organizer',
        title: 'Organizer',
        description: 'Manage event operations and coordinate teams'
    },
    {
        id: 'volunteer',
        title: 'Volunteer',
        description: 'Support event activities and assist attendees'
    },
    {
        id: 'vendor',
        title: 'Vendor',
        description: 'Provide services and manage your booth'
    }
];

// Mock AI-Generated Dashboard Content (Organizer)
const MOCK_AI_BLOCKS: UiBlock[] = [
    {
        type: 'alert',
        priority: 'high',
        title: 'Crowd Bottleneck Detected',
        content: 'Sensors indicate high density at North Entrance. Consider opening auxiliary lanes.'
    },
    {
        type: 'action',
        priority: 'medium',
        title: 'Volunteer Shortage',
        content: 'F&B Zone B is understaffed by 3 members. Reallocation recommended.',
        actionLabel: 'Reallocate Volunteers'
    },
    {
        type: 'info',
        priority: 'low',
        title: 'System Insights',
        content: 'Overall sentiment is positive (88%). Peak attendance expected in 45 minutes.'
    }
];

// Mock AI-Generated Tasks (Volunteer)
const MOCK_VOLUNTEER_TASKS: Task[] = [
    {
        id: 't1',
        title: 'Guide Guests to Zone B',
        description: 'North entrance is crowding. Please direct flow towards the east corridor.',
        priority: 'high',
        duration: '20 mins'
    },
    {
        id: 't2',
        title: 'Assist at Info Desk',
        description: 'Cover for a break at the main info kiosk near the stage.',
        priority: 'medium',
        duration: '15 mins'
    },
    {
        id: 't3',
        title: 'Check Hydration Station',
        description: 'Verify water levels at Station 3 and restock cups.',
        priority: 'low',
        duration: '10 mins'
    }
];

export default function Home() {
    const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    const handleRoleSelect = (roleId: RoleId) => {
        setSelectedRole(roleId);
        console.log('Role selected:', roleId);
    };

    const handleAnimationComplete = () => {
        setHasLoaded(true);
    };

    return (
        <main>
            <LandingAnimation onComplete={handleAnimationComplete} />

            {/* 
        Render Role Selection if no role is selected.
        Render appropriate dashboard based on selection.
      */}
            {!selectedRole && (
                <RoleSelection
                    roles={EVENT_ROLES}
                    onRoleSelect={handleRoleSelect}
                    shouldAnimate={!hasLoaded}
                />
            )}

            {selectedRole === 'organizer' && (
                <OrganizerDashboard
                    eventState="Normal"
                    blocks={MOCK_AI_BLOCKS}
                    onBack={() => setSelectedRole(null)}
                />
            )}

            {selectedRole === 'volunteer' && (
                <VolunteerDashboard
                    tasks={MOCK_VOLUNTEER_TASKS}
                    onBack={() => setSelectedRole(null)}
                />
            )}

            {selectedRole === 'vendor' && (
                <VendorDashboard
                    onBack={() => setSelectedRole(null)}
                />
            )}
        </main>
    );
}
