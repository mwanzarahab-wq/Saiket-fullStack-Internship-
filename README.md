# Full Stack Development Internship — SaiKet Systems

My work for the **Full Stack Development Internship Program** at [SaiKet Systems](https://www.saiket.in). This repository holds all six tasks, each in its own folder, progressing from a static website to a complete full stack application.

> **Intern:** [Rahab Mwanza] · **Duration:** [23-10-2026] – [23-11-2026]
> **LinkedIn:** [your-profile-url] 

---

## Repository Structure

```
.
├── task-1-portfolio-website/
├── task-2-responsive-landing-page/
├── task-3-todo-app/
├── task-4-rest-api/
├── task-5-database-integration/
├── task-6-full-stack-app/
└── README.md
```

Each task folder has its own README with setup steps and screenshots.

---

## Tasks Overview

| # | Task | Tech | Status |
|---|------|------|--------|
| 1 | Static portfolio website with a theme | HTML, CSS, JavaScript, Bootstrap/Tailwind | ⬜ |
| 2 | Responsive web page (e-commerce landing page) | HTML, CSS, Bootstrap/Tailwind, vanilla JS | ⬜ |
| 3 | Front-end framework basics (to-do app) | React.js or Angular | ⬜ |
| 4 | Basic REST API | Node.js, Express, Postman | ⬜ |
| 5 | Database integration | Express, MySQL or PostgreSQL | ⬜ |
| 6 | Full stack User Management System | Front-end + API + database | ⬜ |

### Task 1 — Static Portfolio Website
Homepage, a "Projects" section with placeholders, and a contact form with JavaScript validation. Responsive and styled with Bootstrap or Tailwind.

### Task 2 — Responsive Web Page
A responsive landing page (e.g. for an e-commerce site) with interactive features in vanilla JavaScript, such as form validation or a toggle button.

### Task 3 — Front-End Framework Basics
A small to-do app in React.js or Angular. Users can **add, edit, and delete** tasks.

### Task 4 — Basic REST API
Node.js + Express API with CRUD endpoints for a `User` entity (`name`, `email`, `age`), tested with Postman.

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create a user |
| GET | `/users` | List all users |
| GET | `/users/:id` | Get one user |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |

### Task 5 — Database Integration
The Task 4 API connected to MySQL or PostgreSQL, with SQL queries behind each endpoint to store and retrieve user data.

### Task 6 — Full Stack Application
A User Management System where users can **add, view, update, and delete** their profile. The front-end displays data from the back-end and database. Optional: login authentication.

---

## Tech Stack

- **Front-end:** HTML5, CSS3, JavaScript, Bootstrap / Tailwind, React.js / Angular
- **Back-end:** Node.js, Express
- **Database:** MySQL / PostgreSQL
- **Tools:** Git, GitHub, Postman, VS Code

---

## Getting Started

### Prerequisites
- Node.js (LTS) and npm
- MySQL or PostgreSQL (Tasks 5–6)
- Postman (Task 4 testing)

### Run a task

```bash
git clone [your-repo-url]
cd [repo-name]/task-N-name

# Tasks 1–2: open index.html in a browser

# Tasks 3–6
npm install
npm start
```

For Tasks 5–6, copy `.env.example` to `.env` and fill in your database credentials:

```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=5000
```

---

## Screenshots

| Task | Preview |
|------|---------|
| 1 | _add screenshot_ |
| 2 | _add screenshot_ |
| 3 | _add screenshot_ |
| 4 | _add Postman screenshot_ |
| 5 | _add screenshot_ |
| 6 | _add screenshot_ |

---

## Submission Checklist

- [ ] Each task is in its own folder (separate file/folder per level)
- [ ] Demo video recorded, covering all completed tasks
- [ ] Video posted on LinkedIn, tagging **SaiKet Systems**
- [ ] Hashtags included: `#saiketsystems #saiket #saiketsys` plus domain tags such as `#FullStackDevelopment`
- [ ] Submission form filled in once SaiKet shares it
- [ ] LinkedIn profile updated with the offer letter / internship certificate

---

## Originality

All code in this repository is my own work. Any external references or libraries are credited in the relevant task's README.

---

## Contact

**SaiKet Systems** · support@saiket.in · [www.saiket.in](https://www.saiket.in) · LinkedIn: @saiketsystems · Instagram: @saiket_systems

---

_Built during the SaiKet Systems Internship Program._
