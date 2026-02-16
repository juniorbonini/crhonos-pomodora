# Chronos Pomodora

Chronos Pomodora is a productivity-focused Pomodoro application built with React and TypeScript.  
The project was designed to deeply practice state management, reusable components, reducers, and side-effect handling, while delivering a clean and responsive user experience.

## 🚀 Features

- Focus, short break, and long break cycles (Pomodoro technique)
- Cycle history with detailed table:
  - Task name
  - Start date
  - Cycle type (focus, short break, long break)
  - Status (in progress, finished, interrupted)
  - Duration
- Configurable focus and break durations
- Light and dark theme support
- Toast notifications for user feedback (start, stop, validation errors)
- Confirmation dialog for destructive actions (e.g. reset history)
- Web Worker powered timer (keeps timer accurate even when the tab is inactive)
- Responsive layout for desktop and mobile

## 🧰 Tech Stack

- React
- TypeScript
- Vite
- date-fns
- react-toastify
- CSS Modules
- Web Workers

  ## 🗂️ Project Structure

```txt
src/
  components/
  pages/
  context/
  utils/
  workers/
  models/
  types/
  themes
```

🧠 Technical Highlights

Global state management using Context API + useReducer

Domain-driven separation between UI, state, and business logic

Reusable utility functions (sorting, formatting, cycle helpers)

Web Worker integration for reliable timers

Modular component architecture with CSS Modules

Strict TypeScript typing for better maintainability

UX feedback through toast notifications and confirmation dialogs


⚙️ Getting Started

Clone the repository and install dependencies:

yarn install

Run the development server:

yarn dev

The application will be available at:

http://localhost:5173
