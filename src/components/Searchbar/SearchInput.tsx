import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({ query, setQuery }) => (
  <div className="search-input-wrapper">
    <SearchIcon className="search-icon" />
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
      placeholder=""
    />
  </div>
);

export default SearchInput;
