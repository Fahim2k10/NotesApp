import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseLink =
    "font-semibold text-2xl flex items-center px-4 py-3 rounded-lg transition-all duration-200";
  const iconClass = "material-symbols-outlined";

  return (
    <aside className="flex flex-col gap-4 pl-6 pr-2 py-6 border-r-4 border-gray-400 w-64 h-screen bg-gradient-to-b from-indigo-100 to-indigo-200 shadow-xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseLink} ${
            isActive
              ? "bg-indigo-700 text-white border-l-4 border-white"
              : "text-gray-800 hover:bg-indigo-600 hover:text-white"
          }`
        }
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
      >
        <span className={iconClass}>archive</span>
        <span className="ml-3">Archive</span>
      </NavLink>

      <NavLink
        to="/important"
        className={({ isActive }) =>
          `${baseLink} ${
            isActive
              ? "bg-indigo-700 text-white border-l-4 border-white"
              : "text-gray-800 hover:bg-indigo-600 hover:text-white"
          }`
        }
      >
        <span className={iconClass}>flag</span>
        <span className="ml-3">Important</span>
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
      >
        <span className={iconClass}>delete</span>
        <span className="ml-3">Trash</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
