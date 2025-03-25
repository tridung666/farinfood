import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Auto close khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 bg-white text-black flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo và tên thương hiệu */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-xl sm:text-2xl font-bold text-blue">Viễn Đông</h1>
      </div>

      {/* Icon menu cho mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Navbar cho desktop */}
      <nav className="hidden sm:flex space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          About
        </NavLink>
        {/* <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Contact
        </NavLink> */}
        <NavLink to="/leaders" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Leader
        </NavLink>
      </nav>

      {/* Navbar cho mobile (toggle + animation + auto-close) */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 w-full bg-yellow-400 flex flex-col items-center sm:hidden py-4 space-y-3 transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          About
        </NavLink>
        {/* <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Contact
        </NavLink> */}
        <NavLink to="/leaders" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-red-500 font-bold" : "hover:text-red-500"}>
          Leader
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
