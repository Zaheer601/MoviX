import MovieCard from "./MovieCard";

function Movies({ children }) {
  return (
    <div className="movies-sec">
      <h1
        style={{
          fontFamily: "geom",
          fontSize: "45px",
          textTransform:'uppercase',
          fontWeight: 800,
          color: "whitesmoke",
         marginLeft:'40px',
        
          borderBottom: "2px solid orangered",
          display: "inline-block",
        }}
      >
        Trending Now
      </h1>

      <div className="movies-wrapper">{children}</div>
    </div>
  );
}

export default Movies;
