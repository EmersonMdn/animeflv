import React, { useState, useEffect } from "react";
import "./AnimeReleaseCalendar.css";

const AnimeReleaseCalendar = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/seasons/upcoming"
        );
        const data = await response.json();
        setReleases(data.data);
      } catch (error) {
        console.error("Error fetching upcoming releases:", error);
      }
    };

    fetchReleases();
  }, []);

  return (
    <div className="upcoming-releases">
      <h2 className="upcoming-releases__title">Upcoming Releases</h2>
      <div className="release-grid">
        {releases.map((release, index) => (
          <div className="release-card" key={index}>
            <img
              className="release-card__image"
              src={release.images.webp.large_image_url}
              alt={release.title}
            />
            <div className="release-card__content">
              <h3 className="release-card__title">{release.title}</h3>
              <p className="release-card__synopsis">{release.synopsis}</p>
              <p className="release-card__episodes">
                Episodes: {release.episodes}
              </p>
              <p className="release-card__date">
                Release Date: {release.aired.from}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimeReleaseCalendar;
