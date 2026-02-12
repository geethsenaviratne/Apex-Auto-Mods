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

- The frontend can be built with `npm run build` and served with a static server or via Nginx (see `nginx.conf`).
- The backend can be deployed on any Node.js-compatible server.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
