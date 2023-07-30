import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useNavigate, useParams } from "react-router-dom";

const Recomendations = ({ id }) => {
  const { type } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isLoading, setIsLoading] = useState(true);
  const navegate = useNavigate();

  const carouselOptions = {
    perPage: 5,
    rewind: true,
    autoplay: true,
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
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/recommendations`
      );
      const data = await res.json();
      const firstTenElements = data.data.slice(0, 10);
      setRecommendations(firstTenElements);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching anime recommendations");
      setIsLoading(false);
    }
  };

  const getRecentMangaRecommendations = async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/manga/${id}/recommendations`
      );
      const data = await res.json();
      const firstTenElements = data.data.slice(0, 10);
      setRecommendations(firstTenElements);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching manga recommendations");
      setIsLoading(false);
    }
  };

  const navegateItem = async (type, id) => {
    setIsLoading(true);
    navegate(`/${type}/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (type === "anime") {
      getRecentAnimeRecommendations();
    } else if (type === "manga") {
      getRecentMangaRecommendations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type]);

  return (
    <div className="carousel-container">
      <h2 className="section-title">Recommendations</h2>
      {isLoading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Splide options={carouselOptions}>
          {recommendations.map((item, index) => (
            <SplideSlide key={index}>
              <div className="carousel-recommendation">
                <img
                  src={item.entry.images.webp.large_image_url}
                  alt={item.entry.title}
                  className="recommendation-img"
                  onClick={() => navegateItem(type, item.entry.mal_id)}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Recomendations;
