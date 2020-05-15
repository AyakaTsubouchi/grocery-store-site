import React from "react";
import { connect } from "react-redux";

const Footer = ({ storeData }) => {
  const footerStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    bottom: 0,
  };

  return (
    <>
      {console.log("store data", storeData)}
      <div className="footer" style={footerStyle}>
        <div className="ui container">
          <ul className="ui center">
            <li>{storeData.address}</li>
            <li>{storeData.tell}</li>
            <li>Everyday!:{storeData.businessHour.weekday}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    storeData: state.storeData,
  };
};
export default connect(mapStateToProps)(Footer);
