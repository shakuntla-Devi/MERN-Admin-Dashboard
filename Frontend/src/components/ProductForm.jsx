import { useState } from "react";

const ProductForm = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition shadow-md">
        Save Product
      </button>
    </form>
  );
};

export default ProductForm;