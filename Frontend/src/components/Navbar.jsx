
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 
    bg-gray-100 border-b border-gray-300">

      {/* ✅ ONLY HEADING */}
      <h1 className="text-lg sm:text-2xl font-semibold text-gray-700 tracking-wide">
        Product Dashboard
      </h1>

      {/* (optional) future right side */}
      <div></div>

    </div>
  );
};

export default Navbar;