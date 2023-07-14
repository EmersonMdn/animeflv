import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./MangasRanking";

const AnimesRanking = () => {
  const { topAnime } = useContext(Context);
  console.log(topAnime);

  return (
    <div className="top-animes">
      <h3 className="section__title">Top animes</h3>
      <ol className="top-animes__container">
        {topAnime &&
          topAnime.map((item, index) => (
            <li key={index} className="top-animes__list">
              <p>{item.rank}</p>
              <img
                src={item.images.webp.small_image_url}
                className="top-animes__img"
                alt={item.title}
              />
              <p>{item.title}</p>
              <p>
                <i className="bx bxs-star score-icon"></i> {item.score}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default AnimesRanking;
