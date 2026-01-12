import { useContext } from "react";
import { MovieContext } from "../MovieContext";
import MovieCard from "../components/MovieCard";

export default function FavoriteMovies() {
  const { favoritemovies } = useContext(MovieContext);

  return (
    <div
      style={{
        backgroundColor: "#041224",
        width: "100%",
        color: "whitesmoke",
        margin: "0px",
      
      }}
    >
      <h1
        style={{
          display: "inline-block",
          padding: "20px 40px",
         
          fontSize: "35px",
          fontFamily: "Geom",
          fontWeight: 600,
          textTransform: "capitalize",
        }}
      >
        Favorite Movies
      </h1>
      <div className="fvrt-movies-wrapper">
        {favoritemovies.length > 0 ? (
          favoritemovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card-fvrt"/>
          ))
        ) : (
          <h2
            style={{
              fontFamily: "geom",
              fontWeight: "500",
              fontSize: "25px",
              color: "orangered",
            textTransform:"capitalize"
          }}
          >
            No Favorites added
          </h2>
        )}
      </div>
    </div>
  );
}
