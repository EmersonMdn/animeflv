import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navegate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDetail = (id) => {
    navegate(`/${id}`);
  };

  return (
    <>
      {items.map((e) => {
        return (
          <div
            key={e.id}
            className="animes__card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="animes__card-img"
              src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
              alt=""
            />

            <p>{e.title}</p>

            {isHovered && (
              <div className="animes__card-overlay">
                <p className="animes__card-text">{e.title}</p>
                <button
                  className="animes__card-btn"
                  onClick={() => handleDetail(e.id)}
                >
                  Ver mas
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ItemCard;
