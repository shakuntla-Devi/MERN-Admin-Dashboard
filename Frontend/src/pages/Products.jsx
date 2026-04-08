import { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";

const API = import.meta.env.VITE_API_URL; // ✅ env

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API}/products`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen p-6 bg-[#f8fafc] text-gray-800">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
        <ProductTable products={products} />
      </div>

    </div>
  );
};

export default Products;