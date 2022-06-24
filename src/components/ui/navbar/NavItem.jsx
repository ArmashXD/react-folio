import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

function NavItem({ name, smooth, duration, to, liClassName, onClick }) {
  return (
    <li className={liClassName}>
      <Link to={to} onClick={onClick} smooth={smooth} duration={duration}>
        {name}
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  smooth: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  liClassName: PropTypes.string,
};

export default NavItem;
