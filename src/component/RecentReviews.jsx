export default function RecentReviews() {
  const reviews = [
    {
      rating: 1,
      review: "Product arrived damaged."
    },
    {
      rating: 2,
      review: "Packaging was poor."
    },
    {
      rating: 1,
      review: "Delivery took too long."
    },
    {
      rating: 2,
      review: "Wrong size received."
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
         Recent Critical Reviews
      </h2>

      <div className="space-y-4">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-red-500 pl-4"
          >
            <p className="font-medium">
              {item.rating} Star Review
            </p>

            <p className="text-gray-600">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}