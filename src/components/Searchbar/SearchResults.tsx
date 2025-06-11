import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  games: { id: number; name: string }[];
  loading: boolean;
}

const SearchResults: React.FC<Props> = ({ games, loading }) => (
  <div className="search-results">
    {loading ? (
      <CircularProgress size={32} style={{ color: "#888" }} />
    ) : (
      <ul className="search-results-list">
        {games.map((game) => (
          <li
            key={game.id}
            className="search-result-item"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {game.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SearchResults;
