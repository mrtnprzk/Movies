import {useState, useEffect} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DetailsCard from "../components/cards/DetailsCard";

export default function MovieIdPage() {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movie, setMovie] = useState({})
  // const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const urlMovie = `http://www.omdbapi.com/?apikey=9e8f472a&i=${movieId}`;

  useEffect(() => {
    // setFavoriteMovies(JSON.parse(localStorage.getItem("favorite")) || []);
    fetchMovie();
    favoriteMovies.map((fav) => {
      if (fav.imdbID === movieId) {
        setIsFavorite(true);
      }
    });
  }, []);

  const fetchMovie = async () => {
    const resp = await fetch(urlMovie);
    const result = await resp.json();
    result && setMovie(result);
    setIsLoading(false);
  };

  function add() {
    setFavoriteMovies((preValue) => [...preValue, movie]);
    setIsFavorite(true);
  }

  useEffect(() => {
    window.localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <>
      <Head>
        <title>{movie.Title}</title>
      </Head>

      {isLoading ? <p>Loading...</p> : <DetailsCard movie={movie} add={add} isFavorite={isFavorite} />}
    </>
  );
}