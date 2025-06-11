import React from "react";
import SearchBar from "../Searchbar/Searchbar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">RAWG</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
