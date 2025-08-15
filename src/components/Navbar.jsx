import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [aboutOpen, setAboutOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { key: "home", url: "/" },
    {
      key: "about",
      url: "#about",
      dropdown: [
        { key: "aboutVision", url: "/vision" },
      ],
    },
   { key: "Academics", url: "/Academics" },
    { key: "admission", url: "#admission" },
    { key: "centres", url: "#centres" },
    { key: "mediaCenter", url: "#mediaCenter" },
    { key: "studentLife", url: "/studentlife" }, // ✅ تم ربط حياة الطلاب
    { key: "openData", url: "#openData" },
    { key: "digitalParticipation", url: "#digitalParticipation" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <img src="/logo.png.png" alt="شعار الكلية" className="college-logo" />
        <div className="language-switcher">
          <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>
            English
          </button>
          <button onClick={() => changeLanguage("ar")} className={i18n.language === "ar" ? "active" : ""}>
            العربية
          </button>
        </div>
      </div>

      <ul className={`nav-links ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
        {(isArabic ? [...navLinks].reverse() : navLinks).map((link) => (
          <li
            key={link.key}
            className={link.dropdown ? "has-dropdown" : ""}
            onMouseEnter={() => link.dropdown && setAboutOpen(true)}
            onMouseLeave={() => link.dropdown && setAboutOpen(false)}
          >
            {link.dropdown ? (
              <span>{t(link.key)}</span>
            ) : (
              <Link to={link.url}>{t(link.key)}</Link>
            )}

            {link.dropdown && aboutOpen && (
              <ul className="dropdown">
                {link.dropdown.map((item) => (
                  <li key={item.key}>
                    <Link to={item.url}>{t(item.key)}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="welcome">
        <a href="http://localhost:8080" className="moodle-btn">
          {t("moodleBtn")}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
