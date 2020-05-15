import React from "react";
import { connect } from "react-redux";
const Access = ({ storeData }) => {
  const mapStyle = {
    marginTop: "20px",
    width: "100%",
    height: "50%",
    frameborder: "0",
    style: "border:0;",
    allowfullscreen: "",
    ariaHidden: "false",
    tabindex: "0",
  };
  return (
    <div className="ui container full-height" style={{ display: "flex" }}>
      <div className="ui item">
        <iframe
          title="kims map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.7250306216547!2d-123.09461584884367!3d49.26265748000899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671593d0bb033%3A0xc8dd56db87c590e4!2zS2lt4oCZcyBNYXJ0!5e0!3m2!1sen!2sca!4v1589520613495!5m2!1sen!2sca"
          alt={storeData.address}
          style={mapStyle}></iframe>
      </div>
      <div style={{ paddingTop: "5%", margin: "10px" }}>
        <ul>
          <li>{storeData.address}</li>
          <li>{storeData.tell}</li>
          <li>Everyday!:{storeData.businessHour.weekday}</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    storeData: state.storeData,
  };
};
export default connect(mapStateToProps)(Access);
