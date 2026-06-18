export default function AIInsightsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        AI Insights
      </h2>

      <div className="space-y-4">

        <div className="p-4 bg-red-50 rounded-xl">
          <h3 className="font-semibold text-red-600">
            Packaging Issues Rising
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            32% of negative reviews mention damaged packaging.
          </p>
        </div>

        <div className="p-4 bg-yellow-50 rounded-xl">
          <h3 className="font-semibold text-yellow-600">
            Delivery Delays
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Most complaints are coming from Flipkart orders.
          </p>
        </div>

        <div className="p-4 bg-green-50 rounded-xl">
          <h3 className="font-semibold text-green-600">
            Product Quality Appreciated
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Customers consistently praise product quality.
          </p>
        </div>

      </div>
    </div>
  );
}