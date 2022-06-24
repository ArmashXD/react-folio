import React from "react";
import PropTypes from "prop-types";
import list from "../../../utility/nav-list-items";
import NavItem from "./NavItem";

function NavItems({ ulClassName, liClassName, onClick }) {
  return (
    <ul className={ulClassName}>
      {list.map((item) => {
        return (
            <NavItem
              key={item.name}
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
