import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";

const AnimesContainer = () => {
  // 1c790537dc1197bee2d55d2a8c9e0282         PUBLIC KEY
  // 14c433f1dca1815d5506fef1fcb6ce858158b835         PRIVATE KEY

  const ts = "2/7/2023, 17:32:38";
  const apikey = "1c790537dc1197bee2d55d2a8c9e0282";
  const hash = "d9bcd17d145c479a3c03c3645ccad9ef";

  const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apikey}&ts=${ts}&hash=${hash}`;

  const [animes, setAnimes] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data.results);
    return result.data;
  };

  useEffect(() => {
    getData().then((data) => {
      setAnimes(data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="animes_container" className="animes_container">
      <ItemCard items={animes} />
    </section>
  );
};

export default AnimesContainer;
