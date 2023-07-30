/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";

const ItemDetailPage = ({ saludo }) => {
  const [item, setItem] = useState(null);
  const { type, id } = useParams();

  const getItemDetail = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/${type}/${id}`);
    const data = await res.json();
    setItem(data.data);
  };
  
  useEffect(() => {
    getItemDetail();
  }, [item]);

  return (
    <>
      <Item item={item} />
    </>
  );
};

export default ItemDetailPage;
