import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState(null);
  const [topManga, setTopManga] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Agregar el estado isLoading

  useEffect(() => {
    getTopAnime();
    getTopManga();
  }, []);

  const getTopAnime = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/anime?limit=10"
      );
      const data = await response.json();

      setTopAnime(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setIsLoading(false); // Manejar el error y actualizar isLoading a false en caso de error
    }
  };

  const getTopManga = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/manga?limit=10"
      );
      const data = await response.json();

      setTopManga(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setIsLoading(false); // Manejar el error y actualizar isLoading a false en caso de error
    }
  };

  return (
    <Context.Provider value={{ topAnime, topManga, isLoading }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
