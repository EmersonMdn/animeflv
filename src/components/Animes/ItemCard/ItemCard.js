import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";

const ItemCard = ({ animes }) => {
  const carouselOptions = {
    type: "slide",
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

  // const [hoveredItem, setHoveredItem] = useState(null);

  // const handleMouseEnter = (index) => {
  //   setHoveredItem(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  return (
    <>
      <Splide options={carouselOptions}>
        {animes.map((item, index) => (
          <SplideSlide key={index}>
            <div className="carousel-item">
              <img src={item.image} alt={`Foto ${item.title}`} />
              <p>{item.title}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default ItemCard;
