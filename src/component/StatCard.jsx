export default function StatCard({
  title,
  value,
  icon,
  color,
  change,
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
          <p className="text-green-600 text-sm mt-2">{change}</p>
        </div>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}