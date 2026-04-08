import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBox, FaPlus } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Products", path: "/products", icon: <FaBox /> },
    { name: "Add Product", path: "/add-product", icon: <FaPlus /> },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 text-gray-700 
      min-h-screen p-5 transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"}`}
    >

      {/* LOGO */}
      <h2 className={`text-2xl font-bold mb-10 tracking-wide text-gray-800 
        ${!isOpen && "hidden"}`}>
        Admin
      </h2>

      {/* MENU */}
      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200
              ${
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-500 hover:bg-gray-100 hover:text-indigo-600"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidebar;