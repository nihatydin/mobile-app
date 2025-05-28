import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchGames = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.rawg.io/api/games?key=bf9f72163c4644989fdc67aaa1b09597"
      );
      setGames(res.data.results);
    } catch (error) {
      console.error("Oyunlar alınamadı:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <GameContext.Provider
      value={{games: filteredGames, loading, searchTerm, setSearchTerm}}
    >
      {children}
    </GameContext.Provider>
  );
};
