import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const headerStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
  };
  return (
    <header className="header" style={headerStyle}>
      <div className="ui container">
        <div className="navLeft">
          <Link to="/" style={{ color: "white" }}>
            <h1>Kim's Mart</h1>
          </Link>
        </div>
        <div className="navRight">
          <Navbar />
        </div>
      </div>
    </header>
  );
};
export default Header;
