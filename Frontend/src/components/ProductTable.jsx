import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const API = import.meta.env.VITE_API_URL;

const ProductTable = ({ products, setProducts }) => {

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/products/${id}`);
      const updatedProducts = products.filter((p) => p._id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (id) => alert("Edit feature coming soon 😄");

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-2 sm:p-4">

      {/* 🔥 SCROLL WRAPPER */}
      <div className="w-full overflow-x-scroll">

        <table className="w-[700px] text-left text-sm">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs sm:text-sm">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50 transition">

                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  {p.name}
                </td>

                <td className="px-4 py-2 text-indigo-600 whitespace-nowrap">
                  ₹{p.price}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {p.category}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => editProduct(p._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-blue-600"
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-red-600"
                    >
                      <FaTrash /> Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default ProductTable;