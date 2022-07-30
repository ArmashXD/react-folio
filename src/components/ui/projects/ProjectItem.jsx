import React from "react";
import PropTypes from "prop-types";

function ProjectItem({title, bgImage, demoText, codeText, demoLink, codeLink}) {
  return (
    <div
      style={{backgroundImage: `url(${bgImage})`}}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          {title}
        </span>
        <div className="pt-8 text-center">
          <a href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              {demoText}
            </button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              {codeText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectItem.defaultProps = {
  demoText: "",
  codeText: "",
  demoLink: "",
  codeLink: ""
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  demoText: PropTypes.string,
  codeText: PropTypes.string,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string
};

export default ProjectItem;
