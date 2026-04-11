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

  //  AUTO FILL (EDIT MODE)
  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
      });
    }
  }, [product]);

  //  HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit && product?._id) {
        await axios.put(`${API}/products/${product._id}`, form);
        toast.success("Product updated ✅");
      } else {
        await axios.post(`${API}/products`, form);
        toast.success("Product added ✅");
      }

      setForm({ name: "", price: "", category: "" });
      navigate("/");

    } catch (error) {
      toast.error("Something went wrong ❌");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* NAME */}
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Product Name"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* PRICE */}
      <input
        type="number"
        name="price"
        value={form.price}
        placeholder="Price"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* CATEGORY */}
      <input
        type="text"
        name="category"
        value={form.category}
        placeholder="Category"
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold text-white"
      >
        {isEdit ? "Update Product" : "Save Product"}
      </button>

    </form>
  );
};

export default ProductForm;