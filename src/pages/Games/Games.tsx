import React, { useState, useEffect, useRef, useCallback } from "react";
import { api } from "@/api/API";

const Games: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState("-added");
  const [year, setYear] = useState("");
  const [platform, setPlatform] = useState("");

  const observer = useRef<IntersectionObserver | null>(null);
  const lastGameRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await api.getAllGames({
          ordering,
          dates: year ? `${year}-01-01,${year}-12-31` : undefined,
          platforms: platform || undefined,
          page,
          page_size: 10,
        });

        setGames((prev) => {
          const existingIds = new Set(prev.map((g) => g.id));
          const newGames = res.results.filter(
            (g: any) => !existingIds.has(g.id)
          );
          return [...prev, ...newGames];
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page, ordering, year, platform]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "50px" }}>Popular Games</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <select
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
          style={{ flex: 1 }}
        >
          <option value="-added">Most Popular</option>
          <option value="name">Name</option>
          <option value="-rating">Rating</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ flex: 1 }}
        >
          <option value="">All Years</option>
          {Array.from({ length: 10 }, (_, i) => 2024 - i).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ flex: 1 }}
        >
          <option value="">All Platforms</option>
          <option value="1">PC</option>
          <option value="18">PlayStation</option>
          <option value="186">Xbox</option>
          <option value="7">Nintendo Switch</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {games.map((game, index) => {
          const isLast = index === games.length - 1;
          return (
            <li
              key={game.id}
              ref={isLast ? lastGameRef : null}
              style={{ padding: "0.5rem 0", borderBottom: "1px solid #444" }}
            >
              {game.name}
            </li>
          );
        })}
      </ul>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Games;
