import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", reviews: 1200 },
  { month: "Feb", reviews: 1800 },
  { month: "Mar", reviews: 2200 },
  { month: "Apr", reviews: 2600 },
  { month: "May", reviews: 3100 },
  { month: "Jun", reviews: 3800 },
];

export default function ReviewTrend() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm h-[350px]">
      <h2 className="text-xl font-semibold mb-4">
        Reviews Over Time
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="reviews"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}