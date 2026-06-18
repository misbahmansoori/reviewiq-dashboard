import PlatformTable from "../component/PlatformTable";
import RecentReviews from "../component/RecentReviews";

export default function Reviews() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Reviews Management
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Monitor customer feedback across all ecommerce platforms.
        </p>
      </div>

      {/* Platform Table + Critical Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PlatformTable />
        <RecentReviews />
      </div>

      {/* Recent Reviews Feed */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Recent Reviews Feed
        </h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="font-medium break-words">
              ⭐⭐⭐⭐⭐ Great Product Quality
            </p>

            <p className="text-gray-500 text-sm break-words">
              Customers loved the quality and durability.
            </p>
          </div>

          <div className="border-b pb-3">
            <p className="font-medium break-words">
              ⭐⭐ Packaging Issue
            </p>

            <p className="text-gray-500 text-sm break-words">
              Product arrived with damaged packaging.
            </p>
          </div>

          <div className="border-b pb-3">
            <p className="font-medium break-words">
              ⭐⭐⭐ Delivery Experience
            </p>

            <p className="text-gray-500 text-sm break-words">
              Delivery took longer than expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}