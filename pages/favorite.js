import Head from "next/head";
import {useState, useEffect} from "react";
import FavoriteCard from "../components/cards/FavoriteCard";

export default function FavoritePage() {

  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  // const [favoriteMovies, setFavoriteMovies] = useState([]);

  const deleteHanlder = (id) => {
    localStorage.removeItem("favorite");
    setFavoriteMovies(allMovies => {
      return allMovies.filter((element) => {
        const index = element.imdbID;
        return index !== id
      })
    })
  }

  // useEffect(() => {
  //   setFavoriteMovies(JSON.parse(localStorage.getItem("favorite")));
  // }, [])

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Favorite</title>
      </Head>
      {favoriteMovies.length == 0 && (
        <h3 className="font-bold text-6xl mt-20">Your Favorite List is <span className="text-red-600">Empty</span>!</h3>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
        {favoriteMovies.map((movie) => (
          <FavoriteCard
            key={movie.imdbID}
            movie={movie}
            deleteHanlder={deleteHanlder}
          />
        ))}
      </div>
    </div>
  );
}
