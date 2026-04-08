import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Edit Product</h1>

      <div className="bg-[#1e293b]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 max-w-lg">
        <ProductForm />
      </div>
    </div>
  );
};

export default EditProduct;