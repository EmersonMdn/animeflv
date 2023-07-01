const url = "https://animes5.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be2db38526msh77d08457b87faf4p1bc1a7jsnf4fe45d0237d",
    "X-RapidAPI-Host": "animes5.p.rapidapi.com",
  },
};

const data = async () => {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result, );
};

data();
