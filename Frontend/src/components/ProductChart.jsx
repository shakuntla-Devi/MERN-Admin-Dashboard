import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const ProductChart = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm w-full">

      <h2 className="text-md sm:text-lg font-semibold mb-4">
        Products Overview
      </h2>

      {/* 🔥 SCROLL FIX */}
      <div className="w-full overflow-x-auto">

        <BarChart
          width={Math.max(500, data.length * 80)} // 👈 dynamic width
          height={250}
          data={data || []}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="category" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>

      </div>

    </div>
  );
};

export default ProductChart;