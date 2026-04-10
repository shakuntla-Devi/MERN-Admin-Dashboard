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
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-2 sm:p-4 w-full">

      <table className="w-full text-xs sm:text-sm">

        <thead className="bg-gray-100 text-gray-600 uppercase">
          <tr>
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Price</th>
            <th className="px-2 py-2">Category</th>
            <th className="px-2 py-2 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b">

              {/* ✅ text wrap */}
              <td className="px-2 py-2 break-words">
                {p.name}
              </td>

              <td className="px-2 py-2 text-indigo-600">
                ₹{p.price}
              </td>

              <td className="px-2 py-2 break-words">
                {p.category}
              </td>

              <td className="px-2 py-2">
                {/* ✅ mobile me stack */}
                <div className="flex flex-col sm:flex-row gap-1 justify-center">

                  <button
                    onClick={() => editProduct(p._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs flex items-center justify-center gap-1"
                  >
                    <FaEdit /> Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center justify-center gap-1"
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
  );
};

export default ProductTable;