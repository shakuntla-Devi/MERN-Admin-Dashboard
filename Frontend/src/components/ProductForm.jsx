import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const ProductForm = ({ product, isEdit }) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  // 🔥 AUTO FILL (EDIT MODE)
  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
      });
    }
  }, [product]);

  // 🔥 HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ UPDATE
      if (isEdit && product?._id) {
        await axios.put(`${API}/products/${product._id}`, form);
        toast.success("Product updated ✅");
      } 
      // ✅ ADD
      else {
        await axios.post(`${API}/products`, form);
        toast.success("Product added ✅");
      }

      // 🔥 RESET + REDIRECT
      setForm({ name: "", price: "", category: "" });
      navigate("/");

    } catch (error) {
      toast.error("Something went wrong ❌");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Product Name"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="number"
        name="price"
        value={form.price}
        placeholder="Price"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        name="category"
        value={form.category}
        placeholder="Category"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#020617] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition shadow-md text-white"
      >
        {isEdit ? "Update Product" : "Save Product"}
      </button>

    </form>
  );
};

export default ProductForm;