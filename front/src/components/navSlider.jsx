import React from "react";
import { FaCar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavSlider = ({ open, onClose, navItems, user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  if (!open) return null;
  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
    onClose && onClose();
  };
  return (
    <div className="fixed inset-0 z-[100] flex" style={{backdropFilter: 'blur(8px)', background: 'rgba(30, 30, 30, 0.35)'}}>
      <div className="w-72 max-w-[90vw] bg-white h-full flex flex-col relative animate-slideInLeft">
        {/* Top: Logo, Name, Close */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <span className="flex items-center gap-2">
            <span className="bg-white rounded-2xl p-2 flex items-center justify-center shadow">
              <FaCar size={28} className="text-[#e63946]" />
            </span>
            <span className="font-bold text-lg text-black tracking-wide">APEX GARAGE</span>
          </span>
          <button onClick={onClose} className="p-2 ml-2 rounded-lg hover:bg-gray-100 focus:outline-none">
            <IoMdClose size={28} className="text-[#181a20]" />
          </button>
        </div>
        {/* Nav Links */}
        <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium text-base transition ${location.pathname === item.to ? "bg-[#23272f] text-white" : "text-[#232b36] hover:bg-[#f5f6fa]"}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        {/* Auth Buttons at Bottom */}
        <div className="px-4 pb-6 flex flex-col gap-3">
          {!user && (
            <>
              <a href="/login" className="w-full px-4 py-3 bg-[#e63946] text-white rounded-lg font-semibold shadow hover:bg-[#c82333] transition text-base text-center">Login</a>
              <a href="/register" className="w-full px-4 py-3 bg-[#232b36] text-white rounded-lg font-semibold shadow hover:bg-[#181a20] transition text-base text-center">Sign Up</a>
            </>
          )}
          {user && (
            <button onClick={handleLogout} className="w-full px-4 py-3 bg-[#e63946] text-white rounded-lg font-semibold shadow hover:bg-[#c82333] transition text-base text-center">Logout</button>
          )}
        </div>
      </div>
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};

export default NavSlider;
