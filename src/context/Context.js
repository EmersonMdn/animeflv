import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [popular, setPopular] = useState(null);
  const [topAnime, setTopAnime] = useState(null);
  const [topManga, setTopManga] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Agregar el estado isLoading

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      //?--------- GET MOST POPULAR ANIME -------------------
      const response1 = await fetch(
        "https://api.jikan.moe/v4/anime?order_by=popularity&limit=20"
      );
      const data1 = await response1.json();
      setPopular(data1.data);

      //?--------- GET TOP ANIMES -------------------
      const response2 = await fetch(
        "https://api.jikan.moe/v4/top/anime?limit=10"
      );
      const data2 = await response2.json();
      setTopAnime(data2.data);

      //?--------- GET TOP MANGAS -------------------
      // Delay before getting top manga
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response3 = await fetch(
        "https://api.jikan.moe/v4/top/manga?limit=10"
      );
      const data3 = await response3.json();
      setTopManga(data3.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setIsLoading(false); // Manejar el error y actualizar isLoading a false en caso de error
    }
  };

  return (
    <Context.Provider value={{ popular, topAnime, topManga, isLoading }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
