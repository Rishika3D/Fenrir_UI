# 🛡️ Fenrir Security - Frontend Design Challenge

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A production-grade React application implementing a B2B SaaS security platform interface, built from scratch for the Fenrir Security Frontend Engineering assessment.

> **Candidate:** [Rishika Kherniwal]  
> **Live Demo:** [fenrir-ui.vercel.app]  


## 🎯 Project Overview

This project is a pixel-perfect, fully responsive translation of the provided design references into a functional React application. Following the strict requirements of the assessment, it was built **without** the use of pre-built UI component libraries (like Material UI or Chakra).

### Implemented Screens
1. **Authentication (Sign-up):** Split-layout with dark gradient branding, form validation, and social login buttons.
2. **Main Dashboard:** Responsive sidebar navigation and a data-rich scan list overview with progress indicators.
3. **Active Scan Detail:** Dynamic view showcasing a simulated live terminal/console alongside a categorized vulnerability log.

---

## ✨ Key Features & Highlights

- **🌗 Full Theme Support:** 100% support for both Light and Dark modes across all screens, seamlessly integrated using Tailwind CSS.
- **📱 Mobile Responsive:** Fluid layouts that adapt gracefully to all screen sizes. The sidebar transforms into a collapsible mobile drawer, and complex split-panels stack vertically.
- **🎨 Custom UI Architecture:** Custom-built data tables, status badges, progress bars, and form inputs designed to match the provided high-fidelity mockups.
- **🖱️ Interactive States:** Comprehensive hover, focus, and active states implemented for all interactive elements to ensure the UI feels alive.
- **✅ Robust Form Handling:** Client-side validation for the authentication forms with localized error states.

---

## 🛠️ Technology Stack

* **Core:** React 19 (via Create React App)
* **Styling:** Tailwind CSS (Utility-first CSS framework)
* **Icons:** `lucide-react` & Custom SVGs built to match the design reference exactly.
* **Routing:** Custom state-based navigation (to keep the application lightweight and focused strictly on UI/UX implementation).

---

## 🚀 Running Locally

To run this project locally, ensure you have Node.js (v16+) installed.

```bash
# 1. Clone the repository
git clone [https://github.com/](https://github.com/)[YourUsername]/[YourRepoName].git

# 2. Navigate into the directory
cd [YourRepoName]

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
