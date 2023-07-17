import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const MangasRanking = () => {
  const { topManga } = useContext(Context);
  // console.log(
  //   "🚀 ~ file: MangasRanking.jsx:6 ~ MangasRanking ~ topManga:",
  //   topManga
  // );

  const navigate = useNavigate();

  const handlePage = (id) => {
    navigate(`/manga/${id}`);
  };

  return (
    <div className="top-mangas">
      <h3 className="section__title">Top mangas</h3>
      <ol className="top-mangas__container">
        {topManga &&
          topManga.map((item, index) => (
            <li key={index} className="top-mangas__list">
              <p className="top-mangas__rank">{item.rank}</p>
              <img
                src={item.images.webp.small_image_url}
                alt={item.title}
                className="top-mangas__img"
              />
              <p
                className="hovered"
                onClick={() => {
                  handlePage(item.mal_id);
                }}
              >
                {item.title}
              </p>
              <p>
                <i className="bx bxs-star score-icon"></i> {item.score}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default MangasRanking;
