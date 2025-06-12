import React from "react";
import SearchBar from "../Searchbar/Searchbar";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <NavLink to="/" className="header-title">
        {t("general.rawg")}
      </NavLink>
      <SearchBar />
    </header>
  );
};

export default Header;
