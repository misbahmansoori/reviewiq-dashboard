import SentimentChart from "../component/SentimentChart";
import ReviewTrend from "../component/ReviewTrend";import {
  FiTrendingUp,
  FiSmile,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

export default function Analytics() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Analyze review trends, customer sentiment, and performance metrics.
        </p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SentimentChart />
        <ReviewTrend />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-base md:text-lg">
            Customer Satisfaction
          </h3>

          <p className="text-3xl md:text-4xl font-bold text-green-600 mt-4">
            87%
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-base md:text-lg">
            Average Response Time
          </h3>

          <p className="text-3xl md:text-4xl font-bold text-blue-600 mt-4">
            2.4h
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-base md:text-lg">Review Growth</h3>

          <p className="text-3xl md:text-4xl font-bold text-purple-600 mt-4">
            +18%
          </p>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Key Analytics Insights
        </h2>
        <ul className="space-y-4 text-gray-600 text-sm md:text-base">
          <li className="flex items-center gap-3">
            <FiTrendingUp className="text-green-500 text-lg shrink-0" />
            <span>Review volume increased by 18% this month.</span>
          </li>

          <li className="flex items-center gap-3">
            <FiSmile className="text-yellow-500 text-lg shrink-0" />
            <span>Positive sentiment remains above 75%.</span>
          </li>

          <li className="flex items-center gap-3">
            <FiPackage className="text-red-500 text-lg shrink-0" />
            <span>Packaging-related complaints increased by 25%.</span>
          </li>

          <li className="flex items-center gap-3">
            <FiTruck className="text-blue-500 text-lg shrink-0" />
            <span>Delivery issues are decreasing steadily.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
