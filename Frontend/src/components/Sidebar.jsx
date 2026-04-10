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
      min-h-screen transition-all duration-300 
      ${isOpen ? "w-48" : "w-16"} flex flex-col`}
    >

      {/* LOGO */}
      <h2
        className={`text-lg font-semibold px-4 py-4 text-gray-800 
        ${!isOpen && "hidden"}`}
      >
        Admin
      </h2>

      {/* MENU */}
      <ul className="flex flex-col gap-2 px-2">

        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
              ${
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-500 hover:bg-gray-100 hover:text-indigo-600"
              }`}
            >
              {/* ICON */}
              <span className="text-base flex justify-center w-5">
                {item.icon}
              </span>

              {/* TEXT */}
              {isOpen && (
                <span className="text-sm whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
};

export default Sidebar;