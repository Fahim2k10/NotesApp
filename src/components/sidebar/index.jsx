import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const baseLink =
    "font-semibold text-lg flex items-center px-4 py-3 rounded-lg transition-all duration-200";
  const iconClass = "material-symbols-outlined";

  return (
    <>
      {/* 🔳 Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 📥 Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-indigo-100 to-indigo-200 border-r-4 border-gray-400 shadow-xl 
        transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:static lg:translate-x-0 lg:block overflow-y-auto`}
      >
        <div className="flex flex-col justify-between h-full px-4 py-6">
          <div className="flex flex-col gap-4">
            {/* ❌ Close button (only on mobile) */}
            <div className="flex justify-end lg:hidden mb-2">
              <button onClick={onClose} className="text-3xl text-gray-700">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* 🔗 Navigation Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-indigo-700 text-white border-l-4 border-white"
                    : "text-gray-800 hover:bg-indigo-600 hover:text-white"
                }`
              }
              onClick={onClose}
            >
              <span className={iconClass}>home</span>
              <span className="ml-3">Home</span>
            </NavLink>

            <NavLink
              to="/archive"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-indigo-700 text-white border-l-4 border-white"
                    : "text-gray-800 hover:bg-indigo-600 hover:text-white"
                }`
              }
              onClick={onClose}
            >
              <span className={iconClass}>archive</span>
              <span className="ml-3">Archive</span>
            </NavLink>

            <NavLink
              to="/trash"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-indigo-700 text-white border-l-4 border-white"
                    : "text-gray-800 hover:bg-indigo-600 hover:text-white"
                }`
              }
              onClick={onClose}
            >
              <span className={iconClass}>delete</span>
              <span className="ml-3">Trash</span>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
