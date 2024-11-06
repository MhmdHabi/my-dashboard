// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <div className="flex bg-[#1f1f1f] font-[poppins] text-white h-screen">
        {/* Sidebar di sebelah kiri */}
        <Sidebar className="fixed h-full" />
        {/* Konten di sebelah kanan */}
        <div className="flex flex-col w-full px-5 overflow-auto">
          <Navbar />
          <main className="flex-grow py-3 mt-7 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
