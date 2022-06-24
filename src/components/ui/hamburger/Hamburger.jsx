import React from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";

function Hamburger({ toggle, onClick }) {
  return (
    <div onClick={onClick} className="md:hidden z-10">
      {!toggle ? <FaBars /> : <FaTimes />}
    </div>
  );
}

Hamburger.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
