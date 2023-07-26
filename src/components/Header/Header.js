import "./Header.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Inicio", path: "/" },
    { name: "Series", path: "/series" },
    { name: "Películas", path: "/peliculas" },
    // Agrega más elementos de navegación según tus necesidades
  ];

  // SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //? SIDE BAR
  const handleNavigation = (path) => {
    navigate(path);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Realizando búsqueda:", searchQuery);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <header id="header" className="header">
        <nav className={scrolled ? "navbar scrolled" : "navbar "}>
          <div className="navbar__title-logo">
            <Link to="/" className="logo-text">
              aNi<span className="logo-red">M</span>
            </Link>
          </div>

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

          <div className={`search-bar ${isSearchVisible ? "visible" : ""}`}>
            <input
              type="text"
              placeholder="Buscar"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="button" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
            <button
              type="button"
              className="toggle-search"
              onClick={toggleSearchVisibility}
            >
              <i
                className={`fas ${isSearchVisible ? "fa-times" : "fa-search"}`}
              ></i>
            </button>
          </div>

          <ul className="sidebar__list">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="sidebar__list-item"
                onClick={() => {
                  handleNavigation(item.path);
                  toggleSidebar();
                }}
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
