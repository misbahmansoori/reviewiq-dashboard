import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Positive", value: 78 },
  { name: "Neutral", value: 12 },
  { name: "Negative", value: 10 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function SentimentChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm h-[350px]">
      <h2 className="text-xl font-semibold mb-4">
        Sentiment Analysis
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}