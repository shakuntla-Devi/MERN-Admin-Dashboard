import { useEffect, useState } from "react";
import axios from "axios";
import ProductChart from "../components/ProductChart";
import RecentProducts from "../components/RecentProducts";
import StatsCard from "../components/StatsCard";

const API = import.meta.env.VITE_API_URL; // ✅ env use

const Dashboard = () => {
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

  // Chart Data
  const chartData = [];

  products.forEach((p) => {
    const existing = chartData.find(
      (item) => item.category === p.category
    );

    if (existing) {
      existing.count += 1;
    } else {
      chartData.push({
        category: p.category,
        count: 1,
      });
    }
  });

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f8fafc] text-gray-800">

      <div className="flex-1 w-full p-6 space-y-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatsCard title="Total Products" value={products.length} />
          <StatsCard title="Categories" value={chartData.length} />
          <StatsCard title="Stock Items" value={products.length * 2} />
          <StatsCard title="Revenue" value={`₹${products.length * 500}`} />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <ProductChart data={chartData} />
          <RecentProducts products={products.slice(0, 5)} />

        </div>

      </div>
    </div>
  );
};

export default Dashboard;