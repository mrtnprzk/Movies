import {useState, useEffect} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DetailsCard from "../components/cards/DetailsCard";
import Spinner from "../components/elements/Spinner";

export default function MovieIdPage() {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movie, setMovie] = useState({})
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const urlMovie = `http://www.omdbapi.com/?apikey=9e8f472a&i=${movieId}`;

  useEffect(() => {
    setFavoriteMovies(JSON.parse(localStorage.getItem("favorite")) || []);
  }, []);

  const isFavoriteHandler = () => {
    favoriteMovies.map((fav) => {
      if (fav.imdbID === movieId) {
        setIsFavorite(true);
      }
    });
  }

  useEffect(() => {
    fetchMovie()
    isFavoriteHandler();
  }, [movieId]);

  const fetchMovie = async () => {
    try {
      const resp = await fetch(urlMovie);
      const result = await resp.json();
      if (result.Error) {
        return router.push("/404");
      }
      result && setMovie(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  function add() {
    setFavoriteMovies((preValue) => [...preValue, movie]);
    setIsFavorite(true);
  }

  useEffect(() => {
    if (favoriteMovies.length != 0) {
      window.localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
      isFavoriteHandler();
    }
  }, [favoriteMovies]);

  return (
    <>
      <Head>
        <title>{movie.Title}</title>
      </Head>

      {isLoading ? (
        <Spinner />
      ) : (
        <DetailsCard movie={movie} add={add} isFavorite={isFavorite} />
      )}
    </>
  );
}