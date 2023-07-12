import "./Header.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Inicio", path: "/" },
    { name: "Series", path: "/series" },
    { name: "Películas", path: "/peliculas" },
    // Agrega más elementos de navegación según tus necesidades
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header id="header" className="header">
        <nav className="navbar">
          <div className="navbar__title">Mi Aplicación</div>
          <div className="navbar__menu" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        <div className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
          <div className="sidebar__header">
            <div className="sidebar__title">Navegación</div>
            <div className="sidebar__close" onClick={toggleSidebar}>
              <FaTimes />
            </div>
          </div>
          <ul className="sidebar__list">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="sidebar__list-item"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
