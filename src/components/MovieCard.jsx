import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { MovieContext } from "../MovieContext.jsx";

function MovieCard({ movie }) {
  const { favoritemovies, setFavoriteMovies } = useContext(MovieContext);

  const isFavorite = favoritemovies.some((m) => m.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavoriteMovies(favoritemovies.filter((m) => m.id !== movie.id));
    } else {
      setFavoriteMovies([...favoritemovies, movie]);
    }
  };

  // function addTofavorites() {
  //   setFavoriteMovies([...favoritemovies, movie]);
  // }

  return (
    <div className="movie-card">
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "/no-image.png"
          }
          alt={movie.title}
        />

        <div
          style={{
            color: "white",
            fontSize: 20,
            position: "absolute",
            top: 0,
            right: 0,
            padding: "5px",
            border: "2px solid orange",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart className="heart-icon-red" />
          ) : (
            <IoMdHeartEmpty className="heart-icon-default" />
          )}
        </div>
      </div>
      <div
        className="movie-card-content"
        style={{
          padding: "15px 20px",
        }}
      >
        <h2
          style={{
            fontFamily: "geom",
            fontSize: "19px",
            fontWeight: 600,
            color: "whitesmoke",
            lineHeight: "22px",
          }}
        >
          {movie.title}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;
