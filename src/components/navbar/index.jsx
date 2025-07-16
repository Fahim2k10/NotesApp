import React from "react";
import logo from "../../assets/logo.png";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between py-3 px-4 sm:px-10 border-b-4 border-gray-400 bg-white shadow-md relative z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        {/* Hamburger - visible only on mobile */}
        <button
          className="lg:hidden text-3xl text-gray-800"
          onClick={onMenuClick}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="h-12 w-12">
          <img src={logo} alt="N" className="w-full h-full" />
        </div>
        <h1 className="text-stone-900 text-2xl sm:text-4xl font-bold">
          Notify
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
