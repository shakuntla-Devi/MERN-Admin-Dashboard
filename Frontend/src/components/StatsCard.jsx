const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col items-center">
      <span className="text-gray-500 text-sm sm:text-base">{title}</span>
      <span className="text-gray-800 text-lg sm:text-xl font-semibold">{value}</span>
    </div>
  );
};

export default StatsCard;