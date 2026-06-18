import StatCard from "../component/StatCard";
import SentimentChart from "../component/SentimentChart";
import ReviewTrend from "../component/ReviewTrend";
import { FiMessageCircle, FiSmile, FiFrown, FiStar } from "react-icons/fi";
import AIInsightsCard from "../component/AIInsightsCard";
import TopComplaints from "../component/TopComplaints";
import PlatformTable from "../component/PlatformTable";
import RecentReviews from "../component/RecentReviews";
import RecommendedActions from "../component/RecommendedActions";

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Review Intelligence Dashboard
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Track, analyze and take action on customer reviews.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Reviews"
          value="12,458"
          change="+18.6%"
          icon={<FiMessageCircle size={28} />}
          color="bg-purple-100 text-purple-600"
        />

        <StatCard
          title="Positive Reviews"
          value="9,870"
          change="+22.4%"
          icon={<FiSmile size={28} />}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Negative Reviews"
          value="1,240"
          change="-8.7%"
          icon={<FiFrown size={28} />}
          color="bg-red-100 text-red-600"
        />

        <StatCard
          title="Average Rating"
          value="4.3"
          change="+0.2"
          icon={<FiStar size={28} />}
          color="bg-blue-100 text-blue-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <SentimentChart />
        <ReviewTrend />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <AIInsightsCard />
        <TopComplaints />
      </div>

      {/* Platform + Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <PlatformTable />
        <RecentReviews />
      </div>

      {/* Actions */}
      <div className="mt-6">
        <RecommendedActions />
      </div>
    </div>
  );
}