# Product Requirements Document (PRD): Acme Services CRM

## 1. Company Overview

**Name:** Acme Services

- **Type:** B2B consulting & maintenance for SMEs; offers IT support, equipment maintenance, and strategic consulting nationwide.
- **Brand Tone:** Professional, reliable, adaptable, tech-savvy, focused on customer success.
- **Sample Tagline:** “Simplifying business, one relationship at a time”
- **Visuals:** Logo is a simple geometric wrench+graph motif; blue and green theme.

---

## 2. Purpose, Goals & Vision

- **Why:** Current workflows are spread across spreadsheets, emails, and sticky notes, making it hard to track leads, follow up, and see results.
- **Goals:**
  - Organize all contacts and communication in one central platform.
  - Empower sales and support to collaborate and never miss a follow-up.
  - Visualize revenue pipeline for better forecasting.
- **Not In Scope:** No payment processing, inventory, or POS functionality.

---

## 3. User Personas

**a) Sales Rep — Jane Smith**

- Needs a quick way to enter/update contacts and deals, see her to-dos, log calls, and view progress at a glance.

**b) Sales/Support Manager — Mike Tan**

- Needs real-time pipeline overview, easy reporting, user/team management, and ability to assign/monitor deals and tasks.

---

## 4. Key Product Features & Requirements

### 4.1 Dashboard

- Overview cards: This Month’s Revenue, New Leads, Deals In Pipeline, Overdue Tasks
- Activity timeline (last 10 actions)
- “My Tasks” reminder list

### 4.2 Contact & Company Management

- Tables of contacts (name, email, company, status, last activity)
- Company profiles (industry, website, address, all associated contacts and deals)
- Contact profile: timeline of all calls/notes/deals/tasks/files
- Add/edit/delete/search/filter (by status, company, owner)

### 4.3 Deal/Pipeline Management

- Kanban board: Stages = New Lead, Contacted, Proposal Sent, In Negotiation, Won, Lost
- Each deal: name, company, value, stage, probability, expected close, owner, notes
- Drag and drop deals across stages
- Bulk actions: assign/merge/archive

### 4.4 Task/Activity Tracking

- Attach tasks (“Call”, “Email”, “Meeting”, “Send Proposal”) to contacts/deals/companies
- Due date/reminders with notification badge
- Activity log across all users (“Jane emailed John at ExampleBooks”)

### 4.5 Reporting and Analytics

- Charts: Revenue by Stage (bar), Win Rate over Time (line), Activity by User (pie)
- Deal forecasts by month/quarter
- Export tables/charts as CSV/PDF

### 4.6 User & Team Management

- Role-based access: Admin, Manager, Rep (CRUD rules by role)
- Invite users by email, set/reset passwords
- Team assignment on deals and tasks

### 4.7 General Requirements

- Responsive design (mobile support for viewing/updating contacts/tasks)
- Branding: “Acme Services” logo, blue-green theme, subtle gradients
- Accessibility for forms and navigation
- Dark mode toggle

---

## 5. Example User Stories

- As a sales rep, I can create a new deal from a contact page, so I can quickly track sales opportunities.
- As a manager, I can assign tasks to any team member and see their completion on the dashboard.
- As a user, I can drag deals between stages, and the updates auto-save.
- As a manager, I can run a report to see which industry has most closed deals this quarter.

---

## 6. Sample Data & Entities

**Entities:**

- **Contact:** `{id, name, email, phone, companyId, status, lastActivity, assignedTo}`
- **Company:** `{id, name, industry, website, address, contacts[]}`
- **Deal:** `{id, title, value, stage, probability, closeDate, assignedTo, companyId, contactIds[], notes, created, updated}`
- **Task:** `{id, type[call/email/meeting], title, due, contactId, dealId, assignedTo, status}`
- **User:** `{id, name, email, role, team, avatar}`
- **Activity:** `{id, type, description, userId, entityType, entityId, date}`

**Sample Companies/Contacts:**

- Acme Engineering (Manufacturing) — Contact: Sarah Zhou, CTO
- ExampleBooks (Publishing) — Contact: Tyler Green, Ops Manager

---

## 7. UX / Visual Guidelines

- Main menu: left sidebar with icons & quickcounts, persistent
- Use status colors: blue (New), yellow (In Negotiation), green (Won), gray (Lost)
- All tables filterable/sortable; sticky headers; pagination
- Card layouts for summary KPIs, modals for forms
- Dashboard: subtle microinteractions (hover/drag highlights), smooth drag-and-drop on Kanban

---

## 8. MVP & Stretch Goals

**MVP:**

- Dashboard, contact/company/deal management, Kanban board, task manager, basic analytics, role-based user system, responsive design.

**Stretch:**

- Basic email integration (log outgoing emails), calendar integration (Google Calendar sync), file upload & preview in contacts/deals, push notifications.

---

## 9. Brand & Demo Flavor

- Demo “team” seeded: Jane Smith (Rep), Mike Tan (Manager), Alex Cruz (Support)
- Sample deals: “IT Contract Renewal – ExampleBooks ($22,500, Proposal Sent)”
- Welcome splash screen with Acme logo and company mission snippet.

---

## 10. Tech Stack

- **Angular 20** – frontend application framework
- **Tailwind CSS v4** – modern utility-first CSS styling
- **TypeScript** – type-safe JavaScript superset
- **ng-apexcharts** – charting library for dashboards and analytics ([docs](https://apexcharts.com/docs/angular-charts/))
- **Firebase** (optional, for backend/database/auth/hosting if needed for production or real data sharing)
- **Demo uses mock/static data by default.** Add Firebase for real-time, multi-user, and persistence features if you want to scale the app or launch it as a SaaS.
