import React from "react";
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161616] text-gray-300">
        {children}
    </div>
  );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}

export default Header;
