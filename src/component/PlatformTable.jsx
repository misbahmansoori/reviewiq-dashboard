export default function PlatformTable() {
  const platforms = [
    {
      platform: "Amazon",
      reviews: 5200,
      rating: 4.5,
    },
    {
      platform: "Flipkart",
      reviews: 3100,
      rating: 4.2,
    },
    {
      platform: "Meesho",
      reviews: 2400,
      rating: 3.8,
    },
    {
      platform: "Shopify",
      reviews: 1758,
      rating: 4.6,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Platform Breakdown
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Platform
            </th>

            <th className="text-left py-3">
              Reviews
            </th>

            <th className="text-left py-3">
              Rating
            </th>
          </tr>
        </thead>

        <tbody>
          {platforms.map((item, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="py-3">
                {item.platform}
              </td>

              <td className="py-3">
                {item.reviews}
              </td>

              <td className="py-3">
                ⭐ {item.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}