// import { useContext, useEffect } from "react";
import ItemCard from "./ItemCard/ItemCard";
// import { Comics } from "../../context/MarvelContex";

import { useEffect, useState } from "react";

const AnimesContainer = () => {
  // const url =
  //   "https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortBy=ranking&sortOrder=asc";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "be2db38526msh77d08457b87faf4p1bc1a7jsnf4fe45d0237d",
  //     "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  //   },
  // };

  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getAnimes().then((data) => {
      setAnimes(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <section id="animes_container" className="animes_container">
        <h1 className="section__title">Most watcheds</h1>
        <ItemCard animes={animes} />
      </section>
    </>
  );
};

export default AnimesContainer;
