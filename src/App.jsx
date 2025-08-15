import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Vision from "./Vision";
import StudentLife from "./StudentLife"; // ✅ جديد
import Academics from "./Academics";





function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.body.className = direction;
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/studentlife" element={<StudentLife />} /> {/* ✅ جديد */}
          <Route path="/academics" element={<Academics Programs />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
