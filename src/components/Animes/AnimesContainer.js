import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";

const AnimesContainer = () => {
  const url = "https://animes5.p.rapidapi.com/?limit=30";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "be2db38526msh77d08457b87faf4p1bc1a7jsnf4fe45d0237d",
      "X-RapidAPI-Host": "animes5.p.rapidapi.com",
    },
  };

  const [animes, setAnimes] = useState([]);

  const getData = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.nextPage);
    return result.animes;
  };

  useEffect(() => {
    getData().then((data) => {
      setAnimes(data);
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
