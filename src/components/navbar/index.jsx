import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="flex py-3 px-10 gap-3 border-b-4 border-gray-400">
      <div className="h-12 w-12">
        <img src={logo} alt="N" className="w-full h-full" />
      </div>
      <h1 className="text-stone-900 text-4xl font-bold pt-1 pl-3">Notify</h1>
    </header>
  );
};

export default Navbar;
