import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Characters = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const [resultsToShow, setResultsToShow] = useState(10);
  const [showButton, setShowButton] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  const { type } = useParams();

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchCharacters = async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/${type}/${id}/characters`
      );
      const data = await res.json();
      setCharacters(data.data);
    } catch (error) {
      setError("Error fetching characters");
    }
  };

  useEffect(() => {
    if (characters)
      if (characters.length <= resultsToShow) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
  }, [characters, resultsToShow]);

  const handleLoadMore = () => {
    setResultsToShow((prevResults) => prevResults + 10);
  };

  return (
    <>
      <div className="characters_voices-container box">
        <h2 className="section-title">Characters and voice actors</h2>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <div className="characters__group">
              {characters &&
                characters.slice(0, resultsToShow).map((e, index) => (
                  <div className="characters__voice-list" key={index}>
                    <div className="character-container">
                      <img src={e.character.images.webp.image_url} alt="" />
                      <p>{e.character.name}</p>
                    </div>

                    {e.voice_actors &&
                      (e.voice_actors.length === 0 ? (
                        <div className="voice-container">
                          <p className="no-info">No info</p>
                        </div>
                      ) : (
                        e.voice_actors.find(
                          (actor) => actor.language === "Japanese"
                        ) && (
                          <div className="voice-container">
                            <img
                              src={
                                e.voice_actors.find(
                                  (actor) => actor.language === "Japanese"
                                ).person.images.jpg.image_url
                              }
                              alt=""
                            />
                            <p>
                              {
                                e.voice_actors.find(
                                  (actor) => actor.language === "Japanese"
                                ).person.name
                              }
                            </p>
                          </div>
                        )
                      ))}
                  </div>
                ))}
            </div>

            {showButton && (
              <button className="showMore-btn" onClick={handleLoadMore}>
                Show more
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Characters;
