import { createContext, useState } from "react";

export const Comics = createContext();

const ComicsProvider = ({ children }) => {
  const [comics, setComics] = useState([]);
  return (
    <Comics.Provider value={{ comics, setComics }}>{children} </Comics.Provider>
  );
};

export default ComicsProvider;
