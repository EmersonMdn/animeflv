import { useContext } from "react";
import AnimeReleaseCalendar from "../AnimeReleaseCalendar/AnimeReleaseCalendar";
import NewsContainer from "../NewsContainer/NewsContainer";
import ItemCard from "./ItemCard/ItemCard";
import { Context } from "../../context/Context";
import AnimesRanking from "../Rankings/AnimesRanking";
import MangasRanking from "../Rankings/MangasRanking";
import "../Rankings/Ranking.css";

const AnimesContainer = () => {
  const { topAnime, topManga } = useContext(Context);

  return (
    <>
      <section id="animes_container" className="animes_container box">
        <h1 className="section__title">Top Animes</h1>
        <ItemCard data={topAnime} type="anime" />
      </section>

      <section id="mangas_container" className="mangas_container box">
        <h1 className="section__title">Top Mangas</h1>
        <ItemCard data={topManga} type="manga" />
      </section>

      <div className="ranking__container">
        <AnimesRanking />
        <MangasRanking />
      </div>

      <section>
        <AnimeReleaseCalendar />
      </section>

      <section>
        <NewsContainer />
      </section>
    </>
  );
};

export default AnimesContainer;
