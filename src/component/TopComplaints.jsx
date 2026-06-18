export default function TopComplaints() {
  const complaints = [
    "Packaging Damage",
    "Delivery Delay",
    "Wrong Size",
    "Missing Accessories",
    "Poor Customer Support",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Top Complaints
      </h2>

      <div className="space-y-3">
        {complaints.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-50 p-3 rounded-lg"
          >
            <span>{item}</span>
            <span className="text-red-500">
              {320 - index * 40}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}