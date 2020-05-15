import React, { useState, useEffect } from "react";

const Home = () => {
  const imgSrc = [
    "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/52472027_2183054601755537_3314480713918578688_n.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=r5_FkV_awz0AX_gjVZ-&_nc_ht=scontent.fyvr4-1.fna&oh=a90f8ee1911e7a5fd30aab432fbb966e&oe=5EE369CD",
    "https://s3-media0.fl.yelpcdn.com/bphoto/wT337OQdOts4e35CKSUXSg/o.jpg",
    "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/52472027_2183054601755537_3314480713918578688_n.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=r5_FkV_awz0AX_gjVZ-&_nc_ht=scontent.fyvr4-1.fna&oh=a90f8ee1911e7a5fd30aab432fbb966e&oe=5EE369CD",
    "https://s3-media0.fl.yelpcdn.com/bphoto/wT337OQdOts4e35CKSUXSg/o.jpg",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    //I tried to show pictures looply.
    if (count > imgSrc.length - 1) {
      setCount(0);
    }
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ui container center full-height">
      <img src={imgSrc[count]} alt="happy dining" />
    </div>
  );
};

export default Home;
