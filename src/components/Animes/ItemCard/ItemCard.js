import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const ItemCard = ({ animes }) => {
  const carouselOptions = {
    type: "slide",
    autoplay: true,
    perPage: 5,
    gap: "1rem",
    focus: "center",
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

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".carousel-item", {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      delay: 500,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Splide options={carouselOptions}>
        {animes.map((item, index) => (
          <SplideSlide key={index}>
            <div
              className="carousel-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.image} alt={`Foto ${item.title}`} />
              <p>{item.title}</p>
              {hoveredItem === index && (
                <div className="tooltip">{item.title}</div>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default ItemCard;
