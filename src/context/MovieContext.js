// src/context/MovieContext.js
import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=388dd1fd809db544d475955300c0aa74&language=en-US&page=1"
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MovieContext.Provider
      value={{
        movies: filteredMovies,
        loading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
