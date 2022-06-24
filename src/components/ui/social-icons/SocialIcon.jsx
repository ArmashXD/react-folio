import React from "react";
import PropTypes from "prop-types";

function SocialIcon({ name, icon, listClass, textClass, to }) {
  return (
    <li className={listClass}>
      <a className={textClass} href={to}>
        {name} {icon}
      </a>
    </li>
  );
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  listClass: PropTypes.string.isRequired,
  textClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SocialIcon;
