import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Leaders from "./pages/Leaders"; // ✅ danh sách
import LeaderProfile from "./pages/LeaderProfile"; // ✅ chi tiết

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/leaders/:id" element={<LeaderProfile />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
