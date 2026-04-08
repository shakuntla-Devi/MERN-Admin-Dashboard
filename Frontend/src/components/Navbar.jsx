import { Link } from "react-router-dom";
import { FaBox, FaPlus, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 
    bg-white border-b border-gray-200 shadow-sm">

      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800 tracking-wide">
        Admin Panel
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-gray-600 font-medium">

        <Link 
          to="/" 
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <FaHome /> Dashboard
        </Link>

        <Link 
          to="/products" 
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <FaBox /> Products
        </Link>

        <Link 
          to="/add-product" 
          className="flex items-center gap-2 bg-indigo-500 px-4 py-2 rounded-lg text-white hover:bg-indigo-600 transition shadow-sm"
        >
          <FaPlus /> Add Product
        </Link>

      </div>
    </div>
  );
};

export default Navbar;