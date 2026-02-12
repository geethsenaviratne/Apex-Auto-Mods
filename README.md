# Apex Auto Mods

A full-stack web application for car customization and service management.

## Project Structure

```
Apex-Auto-Mods/
│
├── backend/   # Node.js/Express backend API
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Authentication middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API route definitions
│   ├── index.js        # Entry point
│   └── package.json    # Backend dependencies
│
└── front/     # React frontend
    ├── public/         # Static assets
    ├── src/
    │   ├── assets/     # Images and icons
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Page components
    │   ├── App.jsx     # Main app component
    │   └── main.jsx    # Entry point
    ├── package.json    # Frontend dependencies
    └── vite.config.js  # Vite config
```

## Features

- User registration and login
- Car customization interface
- Service management
- User dashboard
- Responsive UI

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Backend Setup

1. Navigate to the backend folder:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Configure your database in `config/db.js`.
4. Start the backend server:
    ```sh
    npm start
    ```
   The backend will run on `http://localhost:5000` (or as configured).

### Frontend Setup

1. Navigate to the front folder:
    ```sh
    cd front
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm run dev
    ```
   The frontend will run on `http://localhost:5173` (or as configured).

## Deployment

### Deployment Steps

#### Backend
1. Ensure all environment variables and database configuration are set in `config/db.js` and your environment.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the backend server:
    ```sh
    npm start
    ```
4. The backend is deployed at Render:
    **Production URL:** https://apex-auto-mods.onrender.com

#### Frontend
1. Install dependencies:
    ```sh
    npm install
    ```
2. Build the frontend:
    ```sh
    npm run build
    ```
3. Deploy the contents of the `dist` folder to your static hosting provider (e.g., Vercel).
4. The frontend is deployed at Vercel:
    **Production URL:** https://apex-auto-mods-nine.vercel.app/

---

