import React from "react";
import { MdMenu } from "react-icons/md";
import { FaCar } from "react-icons/fa";

const Header = ({ user, onLogout = () => {}, onMenuClick }) => {
  return (
    <header className="w-full bg-white shadow-sm z-40 px-4 md:px-6 py-3 flex items-center justify-between fixed top-0 left-0 md:relative">
      
      <style>{`
        @media (max-width: 767px) {
          body { padding-top: 60px; }
        }
      `}</style>
      {/* Mobile: Menu Icon, Logo, and Name */}
      <div className="flex items-center justify-between w-full md:hidden">
        <span className="flex items-center gap-2">
          <FaCar size={28} className="text-[#e63946]" />
          <span className="font-bold text-lg text-[#181a20] tracking-wide">APEX AUTO MODS</span>
        </span>
        <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none">
          <MdMenu size={28} className="text-[#181a20]" />
        </button>
      </div>
      {/* Desktop: Centered Title */}
      <div className="flex-1 hidden md:flex justify-center items-center pointer-events-none select-none">
        <h1 className="text-xl md:text-2xl font-bold text-[#181a20] tracking-wide">APEX AUTO MODS</h1>
      </div>
      {/* Auth Buttons Top Right (Desktop) */}
      <div className="hidden md:block">
        {!user && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-3 z-50">
            <a href="/login" className="px-4 py-1 bg-[#e63946] text-white rounded-lg font-semibold shadow hover:bg-[#c82333] transition text-sm md:text-base">Login</a>
            <a href="/register" className="px-4 py-1 border border-black text-black rounded-lg font-semibold shadow hover:border-[#e63946] hover:text-[#e63946] transition text-sm md:text-base bg-white">Register</a>
          </div>
        )}
        {user ? (
          <button
            onClick={onLogout}
            className="absolute right-6 top-1/2 -translate-y-1/2 px-4 py-1 bg-[#e63946] text-white rounded-lg font-semibold shadow hover:bg-[#c82333] transition text-sm md:text-base z-50"
          >
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
