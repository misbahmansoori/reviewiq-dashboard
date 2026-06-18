export default function Reports() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Reports Center
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Generate and export review analytics reports.
        </p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold">
            Monthly Report
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Comprehensive monthly review summary.
          </p>

          <button className="mt-4 w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
            Download PDF
          </button>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold">
            Platform Report
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Compare Amazon, Flipkart and Shopify performance.
          </p>

          <button className="mt-4 w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
            Export CSV
          </button>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold">
            AI Summary
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Generate AI-powered business recommendations.
          </p>

          <button className="mt-4 w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
            Generate
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Recent Generated Reports
        </h2>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b pb-3">
            <span className="break-words">
              May 2026 Review Summary
            </span>

            <span className="text-indigo-600 cursor-pointer">
              Download
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b pb-3">
            <span className="break-words">
              Platform Performance Report
            </span>

            <span className="text-indigo-600 cursor-pointer">
              Download
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <span className="break-words">
              AI Executive Summary
            </span>

            <span className="text-indigo-600 cursor-pointer">
              Download
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}