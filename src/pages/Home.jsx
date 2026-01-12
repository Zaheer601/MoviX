import { useState, useEffect } from "react";
import GetMovies from "../Api/api.js";
import plex from "../images/plex.png";
import types from "../images/types.png";
import bigpic from "../images/bigpic.png";
import mobile from "../images/mobile.png";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Movies from "../components/Movies.jsx";
import FlexCard from "../components/FlexCard.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const hasMovies = await GetMovies();
        setMovies(hasMovies);
        setIsLoading(false);
      } catch (err) {
        setError("Got the error in fetching the Movies");
      } finally {
        console.log("Got the Movies");
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Movies>
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Movies>
      <FlexCard
        title="We’re Compatible."
        description="Stream Plex from just about any phone, tablet, smart TV, gaming
            consoles, or PC."
        mainImage={plex}
        subImage={types}
        buttonText="Stream Free Now"
      />
      <FlexCard
        title="See what’s new on Pluto TV, Tubi, & more."
        description="Select your favorite streaming services to discover more, search faster, and get curated recommendations—all without ever leaving Plex. Connect with friends to see who’s watching what, where."
        mainImage={bigpic}
        buttonText="Discover Free Now"
        reverse
        active
      />
      <FlexCard
        title="It has never been easier to watch free movies online."
        description="Once you register for a free account with MoviX, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease."
        mainImage={mobile}
        buttonText="Watch Free Now"
      />
      <Footer />
    </>
  );
}

export default Home;
