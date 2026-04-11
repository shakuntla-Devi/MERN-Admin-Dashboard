import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const ProductTable = ({ products, setProducts = () => {} }) => {

  const navigate = useNavigate();

  // DELETE
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      toast("Cancelled ❌");
      return;
    }

    try {
      await axios.delete(`${API}/products/${id}`);

      const res = await axios.get(`${API}/products`);
      setProducts(res.data || []);

      toast.success("Product deleted successfully ✅");

    } catch (error) {
      toast.error("Delete failed ❌");
      console.log(error);
    }
  };

  // EDIT
  const editProduct = (id) => {
    if (!window.confirm("Do you want to edit this product?")) {
      toast("Edit cancelled ❌");
      return;
    }

    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full">

      {/* ✅ ONLY ONE SCROLL AREA */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[600px] text-sm">

          {/* HEADER */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">

                {/* NAME */}
                <td className="px-4 py-3">
                  {p.name}
                </td>

                {/* PRICE */}
                <td className="px-4 py-3 text-indigo-600">
                  ₹{p.price}
                </td>

                {/* CATEGORY (FIXED ALIGNMENT) */}
                <td className="px-4 py-3">
                  {p.category}
                </td>

                {/* ACTION */}
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => editProduct(p._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center gap-1"
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