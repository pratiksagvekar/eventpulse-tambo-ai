# EventPulse ⚡

> **Generative Event Operations Platform**  
> Dynamic, role-adaptive interfaces for mission-critical event management

🚧 **Status:** In Development (Hackathon Project)

---

## 🎯 Overview

**EventPulse** is a Generative UI-powered event operations platform that dynamically adapts its interface based on user roles and live event conditions. Instead of fixed dashboards and hardcoded workflows, EventPulse generates role-specific interfaces in real time to support high-pressure, event-day decision making.

### The Problem

Traditional event management tools use static dashboards that don't adapt to changing conditions. When a crowd surge happens, or F&B runs low, or volunteers are needed urgently, organizers waste precious time navigating through rigid interfaces to find the right actions.

### The Solution

EventPulse uses **Generative UI** to create context-aware interfaces that:
- ✨ Adapt to live event conditions
- 🎭 Generate role-specific views
- 🚨 Surface urgent actions automatically
- 📱 Prioritize mobile-first, mission-critical UX

---

## 🎨 Product Theme

**Professional. Calm. Mission-Critical.**

EventPulse is designed for high-pressure event environments where clarity and speed matter. The UI is:
- Clean and readable
- Mobile-first
- Focused on actionable information
- Designed to reduce cognitive load during critical moments

---

## 👥 User Roles

### 🎪 Organizer (Point of Contact)
The event command center.

**Capabilities:**
- Select current event state (Normal, Crowd Heavy, F&B Rush, Volunteer Shortage)
- View dynamically generated dashboards
- Receive AI-suggested actions based on live conditions
- Monitor vendor issues and volunteer availability

### 🙋 Volunteer
The flexible workforce.

**Capabilities:**
- Mark availability ("I'm free now")
- Receive dynamically generated tasks
- Get assignments that adapt based on urgency and experience level
- View context-aware instructions

### 🍔 Vendor
The service providers.

**Capabilities:**
- Report issues (Low Inventory, High Demand, Power Issue, Staff Shortage)
- Receive adaptive assistance UI
- Notify organizers with priority levels
- Get context-specific guidance

---

## 🧠 Generative UI Architecture

EventPulse follows a **block-based Generative UI system** that separates logic from presentation:

```
┌─────────────────────────────────────┐
│   Generative AI System (Tambo AI)  │
│                                     │
│  Decides:                           │
│  • What UI blocks appear            │
│  • In what order                    │
│  • With what priority               │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│      UI System (Antigravity)        │
│                                     │
│  Renders:                           │
│  • Cards                            │
│  • Buttons                          │
│  • Badges                           │
│  • Layouts                          │
└─────────────────────────────────────┘
```

### Core Principle
**The AI controls logic. The UI system controls presentation.**

This separation allows the interface to be:
- Predictable in appearance
- Unpredictable in composition
- Contextually intelligent

---

## 🧩 UI Blocks

The interface is composed dynamically using reusable blocks:

| Block | Purpose |
|-------|---------|
| `InfoCard` | Display contextual information |
| `TaskCard` | Show actionable tasks |
| `IssueCard` | Surface vendor/operational issues |
| `AlertCard` | Highlight urgent notifications |
| `PriorityBadge` | Indicate urgency levels |
| `ActionButton` | Trigger role-specific actions |
| `SafetyNote` | Display safety-critical information |

These blocks are **rendered dynamically** based on:
- Current event state
- User role
- Live conditions
- AI-determined priority

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React |
| **Generative UI Logic** | Tambo AI |
| **UI System** | Antigravity |
| **State Management** | Mock / Local State |
| **Deployment** | Vercel / Netlify |

---

## 🎯 Scope Constraints

To keep the project hackathon-focused, we've intentionally excluded:

- ❌ Authentication
- ❌ Backend services
- ❌ Inventory tracking
- ❌ Payments
- ❌ GPS / Maps
- ❌ Multi-event support

**Focus:** Single event, Generative UI demonstration, clean system design.

---

## 🏆 Hackathon Context

This project is built as part of an **online hackathon** to demonstrate:

✅ Clear understanding of **Generative UI** principles  
✅ Real-world problem solving  
✅ Clean system design  
✅ Practical application of AI-driven UI generation  

### Team: **2 idiots** 😄

- **Pratik**
- **Sid**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/eventpulse-tambo-ai.git

# Navigate to project directory
cd eventpulse-tambo-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

1. Open the app in your browser
2. Select a user role (Organizer, Volunteer, or Vendor)
3. Interact with the dynamically generated interface
4. Change event conditions to see the UI adapt in real time

---

## 📸 Screenshots

*Coming soon...*

---

## 🎓 Key Learnings

This project explores:
- **Generative UI** as a paradigm shift from static interfaces
- **Context-aware design** for high-pressure environments
- **Block-based architecture** for dynamic composition
- **AI-driven UX** that adapts to real-time conditions

---

## 🔮 Future Enhancements

If we continue beyond the hackathon:
- Real-time collaboration between roles
- Integration with actual event management APIs
- Historical analytics and pattern recognition
- Voice-based task assignment
- Multi-event support

---

## 📄 License

MIT License - feel free to use this project for learning and inspiration.

---

## 🙏 Acknowledgments

- **Tambo AI** for Generative UI capabilities
- **Antigravity** for the UI system
- Hackathon organizers for the opportunity
- Event managers everywhere who inspired this solution

---

**Built with ❤️ by Team "2 idiots" for [Hackathon Name]**
