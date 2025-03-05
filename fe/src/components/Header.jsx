import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-4 bg-[#01102E] text-white flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo và tên thương hiệu */}
      <div className="flex items-center ">
        <img src="../public/logovd.jpg" alt="logo" className="h-10 w-10 mx-auto " />
      <h1 className="text-2xl font-bold text-white mx-20">Viễn Đông</h1>
      </div>
      {/* Thanh tìm kiếm với icon kính lúp */}
      <div className="relative flex-1 mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-5 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
          <FaSearch size={20} />
        </button>
      </div>

      {/* Navbar */}
      <nav className="flex space-x-8 mr-44">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 font-bold text-xl" : "text-white hover:text-red-500"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold text-xl" : "text-white hover:text-red-500"}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold text-xl" : "text-white hover:text-red-500"}>
          Contact
        </NavLink>
        <NavLink to="/Leader" className={({ isActive }) => isActive ? "text-red-500 font-bold text-xl" : "text-white hover:text-red-500"}>
          Leader
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
