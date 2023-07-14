import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";

const ItemCard = ({ animes }) => {
  const carouselOptions = {
    type: "slide",
    rewind: true,
    autoplay: true,
    perPage: 5,
    gap: "1rem",
    autoHeight: "auto",
    focus: "center",
    // autoWidth: true,
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
  const [animeList, setAnimeList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleFavItem = (malId) => {
    const updatedAnimes = animeList.map((anime) => {
      if (anime.mal_id === malId) {
        return { ...anime, isFavorite: !anime.isFavorite };
      }
      return anime;
    });
    setAnimeList(updatedAnimes);
  };

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // El mensaje se ocultará después de 2 segundos (2000 ms)
  };

  const getButtonClassName = (index) => {
    return animeList[index].isFavorite
      ? "bx bxs-bookmark-plus fav-box active"
      : "bx bx-bookmark-plus fav-box ";
  };

  useEffect(() => {
    setAnimeList(animes);
  }, [animes]);

  return (
    <>
      <Splide options={carouselOptions}>
        {animeList ? (
          animeList.map((item, index) => (
            <SplideSlide key={index}>
              <div
                className="carousel-item "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.images.jpg.image_url}
                  alt={`Foto ${item.title}`}
                />
                {hoveredItem === index && (
                  <>
                    <div className="tooltip">{item.title}</div>
                    <i
                      onClick={() => {
                        handleFavItem(item.mal_id);
                        handleClick();
                      }}
                      className={getButtonClassName(index)}
                    ></i>
                  </>
                )}

                {showPopup && (
                  <div className="popup">
                    {item.isFavorite
                      ? "Quitado de favoritos"
                      : "Agregado a favoritos"}
                  </div>
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
