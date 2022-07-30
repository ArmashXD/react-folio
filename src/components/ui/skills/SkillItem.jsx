import React from "react";
import PropTypes from "prop-types";

function SkillItem({title, img}) {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={img} alt={`${title} icon`} />
      <p className="my-4">{title}</p>
    </div>
  );
}

SkillItem.defaultProps = {};

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
export default SkillItem;
