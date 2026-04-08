const StatsCard = ({ title, value }) => {
  return (
    <div className="relative overflow-hidden 
    bg-gradient-to-r from-indigo-500 to-purple-600 
    p-6 rounded-2xl shadow-lg 
    hover:scale-105 transition duration-300">

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-20 blur-2xl 
      bg-indigo-400"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-sm text-indigo-100 tracking-wide">
          {title}
        </h2>

        <p className="text-3xl font-bold text-white mt-2">
          {value}
        </p>
      </div>

    </div>
  );
};

export default StatsCard;