import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ storeData }) => {
  const imgSrc = storeData.imgSrc;
  const [count, setCount] = useState(0);

  //showing the store images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => (count + 1) % imgSrc.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ui container center full-height">
      <img src={imgSrc[count]} alt="happy shopping" style={{ height: "80%" }} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    storeData: state.storeData,
  };
};
export default connect(mapStateToProps)(Home);
