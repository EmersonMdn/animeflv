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
              src={item.images.webp.large_image_url}
              alt="sd"
            />
            <p>{item.rating} </p>
          </div>

          <div className="item__card_right-side">
            <p>{item.synopsis}</p>
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
