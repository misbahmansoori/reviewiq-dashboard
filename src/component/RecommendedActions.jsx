export default function RecommendedActions() {
  const actions = [
    "Improve packaging quality",
    "Audit Flipkart logistics",
    "Update size guide",
    "Enhance customer support",
    "Monitor delivery partners",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
         Recommended Actions
      </h2>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-3 rounded-lg"
          >
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}