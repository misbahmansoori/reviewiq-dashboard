import AIInsightsCard from "../component/AIInsightsCard";
import TopComplaints from "../component/TopComplaints";
import RecommendedActions from "../component/RecommendedActions";

export default function AIInsights() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          AI Insights
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          AI-powered review analysis and actionable recommendations.
        </p>
      </div>

      {/* Insights + Complaints */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <AIInsightsCard />
        <TopComplaints />
      </div>

      {/* Recommended Actions */}
      <div className="mt-6">
        <RecommendedActions />
      </div>

      {/* Executive Summary */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          AI Executive Summary
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-700 text-sm md:text-base">
              Overall Sentiment
            </h3>

            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Customer sentiment remains largely positive with 78% positive
              reviews.
            </p>
          </div>

          <div className="p-4 bg-red-50 rounded-xl">
            <h3 className="font-semibold text-red-700 text-sm md:text-base">
              Critical Issue Detected
            </h3>

            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Packaging-related complaints increased by 25% compared to last
              month.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-xl">
            <h3 className="font-semibold text-green-700 text-sm md:text-base">
              Growth Opportunity
            </h3>

            <p className="text-gray-600 mt-1 text-sm md:text-base">
              High-quality product mentions can be leveraged in marketing
              campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}