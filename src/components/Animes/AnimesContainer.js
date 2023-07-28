import { useContext } from "react";
import AnimeReleaseCalendar from "../AnimeReleaseCalendar/AnimeReleaseCalendar";
// import NewsContainer from "../NewsContainer/NewsContainer";
import ItemCard from "./ItemCard/ItemCard";
import { Context } from "../../context/Context";
import AnimesRanking from "../Rankings/AnimesRanking";
import MangasRanking from "../Rankings/MangasRanking";
import "../Rankings/Ranking.css";

const AnimesContainer = () => {
  const { popular, topManga } = useContext(Context);

  return (
    <>
      <section id="animes_container" className="animes_container box">
        <h1 className="section__title">Most popular anime</h1>
        <ItemCard data={popular} type="anime" />
      </section>

      <div className="banner__container box">
        <div className="banner__container-item">
          Subscribe now and immerse yourself in the world of anime with our
          exclusive app!
        </div>

        <div className="banner__container-item">
          <div className="banner__container-wrapper">
            <button className="banner__container-btn btn subscribe-button">
              Subscribe Now!
            </button>
          </div>

          <div className="banner__container-wrapper">
            <button className="banner__container-btn btn explore-button">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="ranking__container box">
        <AnimesRanking />
        <MangasRanking />
      </div>

      <section id="mangas_container" className="mangas_container box">
        <h1 className="section__title">Top Mangas</h1>
        <ItemCard data={topManga} type="manga" />
      </section>

      <section>
        <AnimeReleaseCalendar />
      </section>

      {/* <section>
        <NewsContainer />
      </section> */}
    </>
  );
};

export default AnimesContainer;
