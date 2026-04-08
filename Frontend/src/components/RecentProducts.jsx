const RecentProducts = ({ products }) => {
  return (
    <div className="bg-[#1e293b]/80 backdrop-blur-lg border border-white/10 
    p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-semibold text-white mb-4">
        Recent Products
      </h2>

      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-sm text-left">

          {/* HEADER */}
          <thead className="bg-[#020617] text-gray-400 uppercase text-xs">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Category</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {products.map((p) => (
              <tr
                key={p._id}
                className="border-b border-gray-700 hover:bg-[#334155] transition duration-200"
              >
                <td className="p-3 text-white font-medium">
                  {p.name}
                </td>

                <td className="p-3 text-indigo-400 font-semibold">
                  ₹{p.price}
                </td>

                <td className="p-3 text-gray-300">
                  {p.category}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default RecentProducts;