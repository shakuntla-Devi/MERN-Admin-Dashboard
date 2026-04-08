import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const API = import.meta.env.VITE_API_URL; // ✅ env

const ProductTable = ({ products, setProducts }) => {

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/products/${id}`);

      // ✅  reload ke UI update
      const updatedProducts = products.filter((p) => p._id !== id);
      setProducts(updatedProducts);

    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (id) => {
    alert("Edit feature coming soon 😄");
    // later: navigate(`/edit-product/${id}`)
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
      <table className="w-full text-left">

        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">Category</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b hover:bg-gray-50 transition">

              <td className="p-4 font-medium">{p.name}</td>
              <td className="p-4 text-indigo-600">₹{p.price}</td>
              <td className="p-4">{p.category}</td>

              <td className="p-4 flex justify-center gap-3">

                {/* EDIT */}
                <button
                  onClick={() => editProduct(p._id)}
                  className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-lg"
                >
                  <FaEdit /> Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => deleteProduct(p._id)}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  <FaTrash /> Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ProductTable;