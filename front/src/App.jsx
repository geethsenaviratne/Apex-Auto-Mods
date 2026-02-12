import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CarCustomize from "./pages/carcustormize";
import UserDashboard from "./pages/userdashboard";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Homepage from "./pages/homepage";
import Service from "./pages/service";
import About from "./pages/about";
import Contact from "./pages/contact";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Custom hook to get navigate
  function useLogoutWithRedirect() {
    const navigate = useNavigate();
    return () => {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/");
    };
  }

  function AppRoutes() {
    const logoutAndRedirect = useLogoutWithRedirect();
    return (
      <>
        <Toaster />
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && (
          <>
            <Header user={user} onLogout={logoutAndRedirect} onMenuClick={() => setMobileOpen(true)} />
            <Navbar user={user} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          </>
        )}
        <Routes>
          <Route path="/" element={<Homepage user={user} onLogout={logoutAndRedirect} />} />
          <Route path="/customize" element={
            localStorage.getItem("token") && localStorage.getItem("user")
              ? <CarCustomize user={user} onLogout={logoutAndRedirect} />
              : <Navigate to="/login" />
          } />
          <Route path="/dashboard" element={
            localStorage.getItem("token") && localStorage.getItem("user")
              ? <UserDashboard user={user} onLogout={logoutAndRedirect} />
              : <Navigate to="/login" />
          } />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} />} />
          <Route path="/services" element={<Service user={user} onLogout={logoutAndRedirect} />} />
          {/* Add more routes as needed */}
          <Route path="/about" element={<About user={user} onLogout={logoutAndRedirect} />} />
          <Route path="/contact" element={<Contact user={user} onLogout={logoutAndRedirect} />} />
        </Routes>
      </>
    );
  }

  useEffect(() => {
    // Load user from localStorage if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;

