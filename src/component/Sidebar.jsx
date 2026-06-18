import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiMessageSquare,
  FiBarChart2,
  FiCpu,
  FiFileText,
} from "react-icons/fi";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/", icon: <FiGrid /> },
    { name: "Reviews", path: "/reviews", icon: <FiMessageSquare /> },
    { name: "Analytics", path: "/analytics", icon: <FiBarChart2 /> },
    { name: "AI Insights", path: "/insights", icon: <FiCpu /> },
    { name: "Reports", path: "/reports", icon: <FiFileText /> },
  ];

  return (
    <aside
      className="
    w-64
    h-screen
    sticky
    top-0
    bg-slate-950
    text-white
    p-6
    border-r
    border-slate-800
  "
    >
      {" "}
      <h1 className="text-3xl font-bold mb-10">ReviewIQ</h1>
      <div className="space-y-3">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl ${
                isActive ? "bg-indigo-600" : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
