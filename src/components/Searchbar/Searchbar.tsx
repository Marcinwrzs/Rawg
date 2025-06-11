import React, { useState, useEffect, useRef } from "react";
import { api } from "@/api/API";
import { useDebounce } from "@/hooks/useDebounce";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setGames([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      if (!debouncedQuery) {
        setGames([]);
        return;
      }

      setLoading(true);
      try {
        const res = await api.getAllGames({ search: debouncedQuery });
        setGames(res.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [debouncedQuery]);

  return (
    <div ref={wrapperRef} className="search-bar-wrapper">
      <SearchInput query={query} setQuery={setQuery} />
      {(loading || games.length > 0) && (
        <SearchResults games={games} loading={loading} />
      )}
    </div>
  );
};

export default SearchBar;
