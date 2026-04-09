import { useEffect, useState } from "react";
import axios from "axios";
import ProductChart from "../components/ProductChart";
import RecentProducts from "../components/RecentProducts";
import StatsCard from "../components/StatsCard";
import ProductTable from "../components/ProductTable";

const API = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API}/products`);
        setProducts(res.data || []); // ✅ safe fallback
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Better chart data (no crash)
  const chartData = products.reduce((acc, p) => {
    const found = acc.find(item => item.category === p.category);
    if (found) {
      found.count += 1;
    } else {
      acc.push({ category: p.category, count: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-gray-800 p-3 sm:p-6">

      {/* Heading */}
      <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
        <StatsCard title="Total Products" value={products.length} />
        <StatsCard title="Categories" value={chartData.length} />
        <StatsCard title="Stock Items" value={products.length * 2} />
        <StatsCard title="Revenue" value={`₹${products.length * 500}`} />
      </div>

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="w-full min-w-0 h-[300px]">   {/* 🔥 important for chart */}
          <ProductChart data={chartData} />
        </div>

        <RecentProducts products={products.slice(0, 5)} />
      </div>

      {/* Product Table */}
      <div className="w-full min-w-0">
        <ProductTable products={products} setProducts={setProducts} />
      </div>

    </div>
  );
};

export default Dashboard;