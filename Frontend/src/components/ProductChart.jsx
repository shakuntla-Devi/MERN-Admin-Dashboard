import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const ProductChart = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 
    p-5 rounded-2xl shadow-sm w-full h-[320px]">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Products Overview
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis 
            dataKey="category" 
            stroke="#6b7280"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <YAxis 
            stroke="#6b7280"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <Tooltip 
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#111"
            }}
          />

          <Bar 
            dataKey="count" 
            fill="#6366f1" 
            radius={[6, 6, 0, 0]} 
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductChart;