import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Join from "./pages/Join.jsx";
import Officers from "./pages/Officers.jsx";
import Events from "./pages/Events.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Layout>
  );
}
