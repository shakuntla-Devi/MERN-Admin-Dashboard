import { useState } from "react";
import axios from "axios";


const API = import.meta.env.VITE_API_URL;

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

     await axios.post(`${API}/products`, {
        name,
        price,
        category,
      });


    alert("Product Added");

    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-[#f8fafc] p-6">

      {/* FORM CARD */}
      <div className="w-full max-w-md bg-white 
      border border-gray-200 rounded-2xl shadow-sm p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 
          py-3 rounded-lg font-semibold text-white transition shadow-sm">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;