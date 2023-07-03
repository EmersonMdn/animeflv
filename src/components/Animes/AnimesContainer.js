import { useContext, useEffect } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { Comics } from "../../context/MarvelContex";

const AnimesContainer = () => {
  const ts = process.env.REACT_APP_TS_VALUE;
  const apiKey = process.env.REACT_APP_API_KEY;
  const hash = process.env.REACT_APP_HASH_KEY;

  const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}`;

  const { comics, setComics } = useContext(Comics);

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data.results);
    return result.data;
  };

  useEffect(() => {
    getData().then((data) => {
      setComics(data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="animes_container" className="animes_container">
        <h1 className="section__title">Comics</h1>
        <ItemCard items={comics} />
      </section>
    </>
  );
};

export default AnimesContainer;
