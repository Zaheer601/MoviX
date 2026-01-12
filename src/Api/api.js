// const API_KEY = "4436ebc23a406f632d2de0c982af060c";
// const BASE_URL = "https://www.themoviedb.org/";



const GetMovies = async() => {
const response = await fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=4436ebc23a406f632d2de0c982af060c",
  {
    method: "GET",
  }
);
const data = await response.json();
return data.results;

};



export default GetMovies;