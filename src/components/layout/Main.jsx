import React from "react";
import PropTypes from "prop-types";

function Main({ children, extraClasses, name }) {
  return (
    <div name={name} className={`w-full h-screen bg-[#0a192f] ${extraClasses}`}>
      {children}
    </div>
  );
}

Main.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  extraClasses: PropTypes.string,
};

export default Main;
