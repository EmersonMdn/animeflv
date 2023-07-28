import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Characters = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const [resultsToShow, setResultsToShow] = useState(10);
  const [showButton, setShowButton] = useState(true);

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
      console.log(data.data);
      setCharacters(data.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
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
      <div className="characters_voices-container">
        <h2 className="section-title">Characters and voice actors</h2>
        <div className="characters__group">
          {characters.slice(0, resultsToShow).map((e, index) => (
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

        {/* <div className="characters__group">
          {characters.slice(0, resultsToShow).map((e, index) => (
            <div key={index}>
              {e.voice_actors.length === 0 ? (
                <div className="characters__voice-list">
                  <img
                    src="https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                    alt=""
                  />
                  <p>F</p>
                </div>
              ) : (
                e.voice_actors.find(
                  (actor) => actor.language === "Japanese"
                ) && (
                  <div className="characters__voice-list">
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
              )}
            </div>
          ))}
        </div> */}

        {showButton && (
          <button className="showMore-btn" onClick={handleLoadMore}>
            Show more
          </button>
        )}
      </div>
    </>
  );
};

export default Characters;
