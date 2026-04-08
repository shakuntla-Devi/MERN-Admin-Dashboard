import OrderTable from "../components/OrderTable";

const Orders = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Orders</h1>

      <div className="bg-[#1e293b]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-5">
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;