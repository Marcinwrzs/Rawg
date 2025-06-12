import React from "react";
import SearchBar from "../Searchbar/Searchbar";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header-title">
        RAWG
      </NavLink>
      <SearchBar />
    </header>
  );
};

export default Header;
