import React from "react";
import PropTypes from "prop-types";
import NavItem from "./NavItem";
import { navItems } from "../../../content";
import { generateUniqueKey } from "../../../utility/generate-unique-key";

function NavItems({ ulClassName, liClassName, onClick }) {
  return (
    <ul className={ulClassName}>
      {navItems.map((item, index) => {
        return (
            <NavItem
              key={generateUniqueKey(index)}
              name={item.name}
              smooth={item.smooth}
              duration={item.duration}
              to={item.to}
              onClick={onClick}
              liClassName={liClassName}
            />
        );
      })}
    </ul>
  );
}

NavItems.propTypes = {
    ulClassName: PropTypes.string,
    liClassName: PropTypes.string,
    onClick: PropTypes.func
}

export default NavItems;
