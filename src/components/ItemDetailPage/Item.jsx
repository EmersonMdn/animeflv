import moment from "moment";

export const Item = ({ item }) => {
  console.log("🚀 ~ file: Item.jsx:4 ~ Item ~ item:", item);
  return (
    <div>
      {item ? (
        <div className="item__card">
          <div className="item__card_left-side">
            <h2>{item.title}</h2>
            <img
              className="item__card_left-side-img"
              src={item.images.webp.image_url}
              alt="sd"
            />

            <div className="item__card_information">
              <h4>Information</h4>
              <p>
                <strong>Rating: </strong> {item.rating}{" "}
              </p>
              <p>
                <strong>Type: </strong>
                {item.type}
              </p>
              <p>
                <strong>Episodes: </strong> {item.episodes}{" "}
              </p>
              <p>
                <strong>Status: </strong>
                {item.status}{" "}
              </p>

              {item.aired && (
                <p>
                  <strong>Aired:</strong>
                  {moment(item.aired.from).format("DD MMM, YYYY")} to{" "}
                  {moment(item.aired.to).format("DD MMM, YYYY")}
                </p>
              )}

              <p>
                <strong>Genres: </strong>
                {item.genres.map((e, index) => (
                  <span key={index}>{e.name} </span>
                ))}
              </p>

              <p>
                <strong>Demographic: </strong>
                {item.demographics.map((e, index) => (
                  <span key={index}>{e.name} </span>
                ))}
              </p>

              {item.producers && (
                <p>
                  <strong>Producers: </strong>
                  {item.producers.map((e, index) => (
                    <a href={e.url} key={index}>
                      {e.name},{" "}
                    </a>
                  ))}
                </p>
              )}

              <p>
                <strong>Themes: </strong>{" "}
                {item.themes.map((e, index) => (
                  <span key={index}>{e.name} </span>
                ))}
              </p>
            </div>
          </div>

          <div className="item__card_right-side">
            <div className="scoreboar">
              <div className="scoreboard__score">
                <p className="scoreboard__score-title">SCORE</p>
                <span className="scoreboard__score-score">
                  {" "}
                  <strong>{item.score}</strong>{" "}
                </span>
                <p className="scoreboard__score-scored_by">
                  {item.scored_by} users
                </p>
              </div>

              <div className="scoreboard__ranked">
                {" "}
                Ranked <strong>#{item.rank}</strong>{" "}
              </div>

              <div className="scoreboard__popularity">
                Popularity <strong>{item.popularity}</strong>#
              </div>

              {item.trailer && (
                <div className="scoreboard__trailer">
                  <img src={item.trailer.images.small_image_url} alt="" />
                  <div className="scoreboard-play">
                    <i className="bx bx-play-circle play-button"></i>
                  </div>
                </div>
              )}
            </div>

            <div className="synopsis">
              <h3>Synopsis</h3> <hr />
              <p className="synopsis__text">{item.synopsis}</p>
            </div>

            <div className="background">
              <h3>Background</h3> <hr />
              <p className="synopsis__text">{item.background}</p>
            </div>
          </div>
        </div>
      ) : (
        //? SPINNER LOADER
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
};
