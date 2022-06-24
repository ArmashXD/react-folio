import React from "react";
import image from "../../../assets/logo.png";


function Logo() {
  return (
    <div>
      <img src={image} alt="logo" style={{ width: "50px" }} />
    </div>
  );
}

export default Logo;
