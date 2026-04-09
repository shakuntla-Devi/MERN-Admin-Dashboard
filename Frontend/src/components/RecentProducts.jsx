const RecentProducts = ({ products }) => {
  return (
    <div className="bg-gray-50 p-3 sm:p-5 rounded-2xl shadow-sm">
      
      {/* Title with gray background */}
      <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 bg-gray-200 p-2 rounded">
        Recent Products
      </h2>

      <ul className="space-y-2">
        {products.map((p) => (
          <li 
            key={p._id} 
            className="flex justify-between border-b pb-1 hover:bg-white transition rounded"
          >
            <span className="text-gray-700 font-medium">{p.name}</span>
            <span className="text-indigo-600 font-semibold">₹{p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProducts;