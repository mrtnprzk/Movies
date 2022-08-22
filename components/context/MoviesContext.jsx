import React, { createContext } from "react";

const MoviesContext = createContext({
  movies: [],
  totalMovies: 0,
  addFavorite: (movie) => {},
  removeFavorite: (id) => {},
});

export const MoviesContextProvider = (props) => {

    const [favoriteMovies, setFavoriteMovies] = useState([]);

    function addFavoriteHandler(movie) {
      setFavoriteMovies((preValue) => [...preValue, movie]);
    };

    function removeFavoriteHandler(id) {
        setFavoriteMovies((allMovies) => {
          return allMovies.filter((element) => {
            const index = element.imdbID;
            return index !== id;
          });
        });
    };

    // function itemIsFavoriteHandler(id) {
    //     return favoriteMovies.some(movie => movie.id === id);
    // };

    const context = {
      movies: favoriteMovies,
      totalMovies: favoriteMovies.length,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
    };

  return (
    <MoviesContext.Provider value={context}>
        {props.children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext