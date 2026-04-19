# LURNIX – Platform

Lurnix is a modern, high-performance e-commerce platform designed for students to explore and enroll in digital courses. The project focuses on a seamless UI/UX, utilizing a component-based architecture for scalability and maintainability.

## 🚀 Key Features
- **Dynamic Catalog:** Real-time data fetching from a JSON-based mock backend.
- **Modern UI:** Built with Tailwind CSS, featuring dark mode and high-fidelity components.
- **Bento Grid Architecture:** Optimized dashboard and course listings for clear information hierarchy.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop environments.
- **Smooth Navigation:** Handled via React Router DOM for a single-page application experience.

## 🛠️ Tech Stack
- **Library:** React.js
- **Styling:** Tailwind CSS + PostCSS
- **State Management:** React Hooks (useState, useEffect, Context API)
- **Data:** JSON Server (Mock Rest API)
- **Icons:** Lucide-react / React Icons

## 📁 Project Structure
```text
src/
├── components/     # Reusable UI elements and Main views
├── App.js          # Routing and core logic
├── index.js        # Entry point
└── App.css         # Global styles and Tailwind imports
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mariumrashad/lurnix-platform.git](https://github.com/mariumrashad/lurnix-platform.git)
   cd lurnix
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the Backend (Mock API):**
   The project requires `json-server` to serve the `db.json` file.
   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Start the application:**
   ```bash
   npm start
   ```



