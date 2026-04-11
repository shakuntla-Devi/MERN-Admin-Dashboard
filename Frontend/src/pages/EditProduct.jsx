import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const EditProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // 🔥 FETCH PRODUCT
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        toast.error("Product not found ❌");
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-gray-800 p-4 sm:p-6">

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Edit Product
      </h1>

      {/* CENTER FORM */}
      <div className="flex justify-center">

        <div className="w-full max-w-md bg-white border border-gray-200 
        rounded-2xl shadow-sm p-4 sm:p-6">

          {product ? (
            <ProductForm product={product} isEdit={true} />
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}

        </div>

      </div>

    </div>
  );
};

export default EditProduct;