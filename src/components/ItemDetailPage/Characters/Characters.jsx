import { useEffect, useState } from "react";

const Characters = ({ id }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/characters`
      );
      const data = await res.json();

      setCharacters(data.data);
    };

    setTimeout(() => {
      getCharacters();
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="characters_voices-container">
        <div className="characters_voices-group">
          {characters !== [] && characters.map((e) => <p>{e.character.name}</p>)}
        </div>

        <div className="characters_voices-group">2</div>
      </div>
    </>
  );
};

export default Characters;
