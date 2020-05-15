import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const Header = ({ storeData }) => {
  const headerStyle = {
    backgroundColor: "#FFF",
    color: "#CC0000",
    border: "1px solid #CC0000",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 200,
  };
  return (
    <header className="header" style={headerStyle}>
      <div className="ui container">
        <div className="navLeft">
          <Link to="/" style={{ color: "#CC0000" }}>
            <h1>{storeData.name}</h1>
          </Link>
        </div>
        <div className="navRight">
          <Navbar />
        </div>
      </div>
      <div className="ui divide"></div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    storeData: state.storeData,
  };
};

export default connect(mapStateToProps)(Header);
