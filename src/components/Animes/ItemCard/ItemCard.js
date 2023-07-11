// import { useNavigate } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ItemCard = ({ animes }) => {
  // const [isHovered, setIsHovered] = useState(false);
  //  const navegate = useNavigate();

  // const handleMouseEnter = () => {
  //   console.log("dentro");
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   console.log("fuera");
  //   setIsHovered(false);
  // };

  // const handleDetail = (id) => {
  //   navegate(`/${id}`);
  // };

  return (
    <>
      <Splide
        options={{
          perPage: 5,
          rewind: true,
          gap: "1rem",
          height: "19.7rem",
          width: "70rem ",

          breakpoints: {
            1200: {
              perPage: 4,
              width: "100%",
              height: "19rem",
            },
            840: {
              perPage: 3,
              width: "100%",
              height: "19rem",
            },
            640: {
              perPage: 2,
            },
            450: {
              perPage: 1,
              width: "15rem",
              gap: "1rem",
              autoHeight: true,
            },
            286: {
              perPage: 1,
              height: "16rem",
              autoWidth: true,
            },
          },
        }}
        hasTrack={false}
        aria-label="My Favorite Images"
      >
        <SplideTrack>
          {animes.map((e) => (
            <SplideSlide key={e._id}>
              <img src={e.image} alt={e._id} />
              {/* {isHovered && (
                  <div className="animes__card-overlay">
                    <p className="animes__card-text">{e.title}</p>
                    <button className="animes__card-btn">Ver mas</button>
                  </div>
                )} */}
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default ItemCard;
