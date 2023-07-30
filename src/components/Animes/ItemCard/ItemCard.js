import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ data, type }) => {
  const carouselOptions = {
    type: "slide",
    rewind: true,
    autoplay: true,
    perPage: 5,
    gap: "1rem",
    autoWidth: "auto",
    breakpoints: {
      576: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
      1200: {
        perPage: 4,
      },
    },
  };

  const [hoveredItem, setHoveredItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // El mensaje se ocultará después de 2 segundos (2000 ms)
  };

  const handleDetail = (id) => {
    navigate(`/${type}/${id}`);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          {" "}
          <i className="bx bx-check check-fav"></i> Agregado a favoritos
        </div>
      )}
      <Splide options={carouselOptions}>
        {data ? (
          data.map((item, index) => (
            <SplideSlide key={index}>
              <div
                className="carousel-item "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.images.webp.large_image_url}
                  alt={`Foto ${item.title}`}
                  onClick={() => handleDetail(item.mal_id)}
                />

                {hoveredItem === index && (
                  <>
                    <div className="tooltip">{item.title}</div>
                    <i
                      onClick={() => {
                        handleClick();
                      }}
                      className="bx bxs-bookmark-plus fav-box"
                    ></i>
                  </>
                )}
              </div>
            </SplideSlide>
          ))
        ) : (
          //? SPINNER LOADER
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        )}
      </Splide>
    </>
  );
};

export default ItemCard;

// <div
//   className="carousel-item "
//   onMouseEnter={() => handleMouseEnter(index)}
//   onMouseLeave={handleMouseLeave}
// >
//   {item.isFavorite && (
//     <span className="bookmark-icon" onClick={() => handleToggleFavorite(index)}>
//       ✨
//     </span>
//   )}
//   <img src={item.images.jpg.image_url} alt={`Foto ${item.title}`} />
//   {hoveredItem === index && <div className="tooltip">{item.title}</div>}
//   <button
//     onClick={() => handleToggleFavorite(index)}
//     className={getButtonClassName(index)}
//   >
//     {item.isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
//   </button>
// </div>;
