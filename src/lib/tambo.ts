/**
 * @file tambo.ts
 * @description Central configuration file for Tambo components and tools
 *
 * This file serves as the central place to register your Tambo components and tools.
 * It exports arrays that will be used by the TamboProvider.
 *
 * Read more about Tambo at https://tambo.co/docs
 */

import { OrganizerDashboard } from "@/components/OrganizerDashboard";
import { VolunteerDashboard } from "@/components/VolunteerDashboard";
import { VendorDashboard } from "@/components/VendorDashboard";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";

/**
 * tools
 *
 * This array contains all the Tambo tools that are registered for use within the application.
 * For EventPulse, tools can be added here for event-specific data fetching.
 */

export const tools: TamboTool[] = [
  // Add EventPulse-specific tools here as needed
];

/**
 * components
 *
 * This array contains all the Tambo components that are registered for use within the application.
 * Each component is defined with its name, description, and expected props. The components
 * can be controlled by AI to dynamically render UI elements based on user interactions.
 */
export const components: TamboComponent[] = [
  {
    name: "OrganizerDashboard",
    description:
      "Dashboard for event organizers to view real-time operational insights. Displays alerts, metrics, and action items based on current event state (Normal, Crowd Heavy, F&B Rush, Volunteer Shortage).",
    component: OrganizerDashboard,
    propsSchema: z.object({
      eventState: z.enum(['Normal', 'Crowd Heavy', 'F&B Rush', 'Volunteer Shortage']).optional(),
      blocks: z.array(z.object({
        type: z.enum(['alert', 'info', 'action']),
        priority: z.enum(['high', 'medium', 'low']),
        title: z.string(),
        content: z.string(),
        actionLabel: z.string().optional(),
      })).optional(),
    }),
  },
  {
    name: "VolunteerDashboard",
    description:
      "Dashboard for volunteers to view assigned tasks and mark availability. Shows task priority, duration, and allows accepting or declining tasks.",
    component: VolunteerDashboard,
    propsSchema: z.object({
      tasks: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        priority: z.enum(['high', 'medium', 'low']).optional(),
        duration: z.string().optional(),
      })).optional(),
    }),
  },
  {
    name: "VendorDashboard",
    description:
      "Portal for vendors to report operational issues to event command. Supports reporting low inventory, high demand, power issues, and staff shortages with AI-generated response previews.",
    component: VendorDashboard,
    propsSchema: z.object({
      reason: z.string().optional(),
    }),
  },
];
