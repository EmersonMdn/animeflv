import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Recomendations = () => {
  const { type } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  const carouselOptions = {
    perPage: 5,
    rewind: true,
    gap: "1rem",
    autoHeight: true,
    breakpoints: {
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

  const getRecentAnimeRecommendations = async () => {
    const res = await fetch("https://api.jikan.moe/v4/recommendations/anime");
    const data = await res.json();
    const firstTenElements = data.data.slice(0, 10);
    setRecommendations(firstTenElements);
  };

  const getRecentMangaRecommendations = async () => {
    const res = await fetch("https://api.jikan.moe/v4/recommendations/manga");
    const data = await res.json();
    const firstTenElements = data.data.slice(0, 10);
    setRecommendations(firstTenElements);
  };

  useEffect(() => {
    if (type === "anime") {
      getRecentAnimeRecommendations();
    } else if (type === "manga") {
      getRecentMangaRecommendations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="section-title">Recommendations</h2>
      <Splide options={carouselOptions}>
        {recommendations
          ? recommendations.map((item, index) => (
              <SplideSlide key={index}>
                <div className="carousel-recommendation">
                  <img
                    src={item.entry[0].images.jpg.image_url}
                    alt={item.entry[0].title}
                    className="recommendation-img"
                  />
                </div>
              </SplideSlide>
            ))
          : null}
      </Splide>
    </div>
  );
};

export default Recomendations;
