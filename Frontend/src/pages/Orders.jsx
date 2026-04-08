import OrderTable from "../components/OrderTable";

const Orders = () => {
  return (
    <div className="w-full min-h-screen p-6 
    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] 
    text-white space-y-6">

      <h1 className="text-3xl font-bold">
        Orders
      </h1>

      <div className="bg-[#1e293b]/80 backdrop-blur-lg 
      border border-white/10 rounded-2xl shadow-xl p-5">

        <OrderTable />

      </div>

    </div>
  );
};

export default Orders;