import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        height: "80px",
        background: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <h1 style={{ fontSize: "18px", margin: 0 }}>RAWG</h1>
    </header>
  );
};

export default Header;
