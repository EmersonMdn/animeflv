import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
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
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {navigationItems.map((item, index) => (
            <li key={index} onClick={() => handleNavigation(item.path)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
