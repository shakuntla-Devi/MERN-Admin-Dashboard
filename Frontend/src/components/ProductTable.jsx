import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const ProductTable = ({ products, setProducts = () => {} }) => {

  const navigate = useNavigate();

  // 🔥 DELETE
const deleteProduct = async (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this product?");

  if (!confirmDelete) {
    toast("Cancelled ❌");
    return;
  }

  try {
    // ✅ DELETE API
    await axios.delete(`${API}/products/${id}`);

    // ✅ AGAIN FETCH UPDATED DATA
    const res = await axios.get(`${API}/products`);

    setProducts(res.data || []);

    toast.success("Product deleted successfully ✅");

  } catch (error) {
    toast.error("Delete failed ❌");
    console.log(error);
  }
};

  // 🔥 EDIT
  const editProduct = (id) => {

    const confirmEdit = window.confirm("Do you want to edit this product?");

    if (!confirmEdit) {
      toast("Edit cancelled ❌");
      return;
    }

    toast.success("Redirecting to edit... ✏️");

    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="bg-white border rounded-2xl p-4 w-full">

      {/* ✅ ONLY TABLE SCROLL */}
      <div className="overflow-x-auto">

        <table className="min-w-[650px] w-full text-sm">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">

                <td className="px-4 py-2 whitespace-nowrap">
                  {p.name}
                </td>

                <td className="px-4 py-2 text-indigo-600 whitespace-nowrap">
                  ₹{p.price}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {p.category}
                </td>

                <td className="px-4 py-2 text-center whitespace-nowrap">

                  {/* EDIT */}
                  <button
                    onClick={() => editProduct(p._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs mr-2 inline-flex items-center gap-1 focus:outline-none"
                  >
                    <FaEdit /> Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs inline-flex items-center gap-1 focus:outline-none"
                  >
                    <FaTrash /> Delete
                  </button>

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