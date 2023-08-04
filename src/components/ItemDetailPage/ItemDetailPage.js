/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";

const ItemDetailPage = ({ saludo }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar el loader
  const { type, id } = useParams();

  const getItemDetail = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/${type}/${id}`);
    const data = await res.json();
    setItem(data.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setItem(null);
    setTimeout(() => {
      getItemDetail();
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <Item item={item} />
    </>
  );
};

export default ItemDetailPage;
