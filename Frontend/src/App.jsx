import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct"; // ✅ IMPORTANT ADD
import Orders from "./pages/Orders";
import Users from "./pages/Users";

const App = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>

      {/* 🔥 TOASTER */}
      <Toaster position="top-right" />

      {/* MAIN LAYOUT */}
      <div className="flex min-h-screen w-full">

        {/* SIDEBAR */}
        <Sidebar isOpen={isOpen} />

        {/* MAIN CONTENT */}
        <div className="flex-1 min-h-screen bg-[#0f172a] w-full overflow-x-hidden">

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="m-4 bg-indigo-600 hover:bg-indigo-700 
            text-white px-4 py-2 rounded-lg transition shadow-md"
          >
            ☰
          </button>

          {/* ROUTES */}
          <div className="w-full">
            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products />} />

              <Route path="/add-product" element={<AddProduct />} />

              {/* 🔥 FIXED EDIT ROUTE */}
              <Route path="/edit-product/:id" element={<EditProduct />} />

              <Route path="/orders" element={<Orders />} />

              <Route path="/users" element={<Users />} />

            </Routes>
          </div>

        </div>

      </div>

    </BrowserRouter>
  );
};

export default App;