import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        height: "60px",
        background: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "1.2rem", margin: 0 }}>RAWG</h1>
    </header>
  );
};

export default Header;
