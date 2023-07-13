import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";

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

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <Splide options={carouselOptions}>
        {animes ? (
          animes.map((item, index) => (
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
                  <div className="tooltip">{item.title}</div>
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
