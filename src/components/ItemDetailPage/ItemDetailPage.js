import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailPage = ({ saludo }) => {
  const [item, setItem] = useState(null);
  const { type, id } = useParams();

  useEffect(() => {
    const getItemDetail = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/${type}/${id}/full`);
      const data = await res.json();
      console.log(data.data);
      setItem(data.data);
    };
    getItemDetail();
  }, []);

  return (
    <div>
      {item ? (
        <img src={item.images.webp.large_image_url} alt="sd" /> //? SPINNER LOADER
      ) : (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
