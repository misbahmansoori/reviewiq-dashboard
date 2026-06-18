import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./component/Sidebar";

import Dashboard from "./pages/Dashboard";
import Reviews from "./pages/Reviews";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">

        <Sidebar />

        <main className="p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/insights" element={<AIInsights />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;