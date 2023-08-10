import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Gallery = ({ id, type }) => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.jikan.moe/v4/${type}/${id}/pictures`;

  const carouselOptions = {
    perPage: 3,
    rewind: true,
    autoplay: true,
    gap: "1rem",
    autoHeight: true,
    breakpoints: {
      490: {
        perPage: 1,
      },
      990: {
        perPage: 2,
      },
    },
  };

  const getPictures = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setPictures(data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className="container box">Cargando...</div>;
  }

  if (error) {
    return (
      <div className="container box">Ha ocurrido un error: {error.message}</div>
    );
  }

  if (pictures.length === 0) {
    return (
      <div className="container box">No hay recomendaciones disponibles</div>
    );
  }

  return (
    <div className="carousel-container container box">
      <h4 className="section-title">Pictures</h4>
      <Splide options={carouselOptions}>
        {pictures.map((pic, index) => (
          <SplideSlide key={index}>
            <div className="carousel-recommendation">
              <img
                className="pictures-img"
                src={pic.webp.image_url}
                alt={`Imag${index}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Gallery;
