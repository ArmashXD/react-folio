import React from "react";
import Main from "../components/layout/Main";
import ProjectItems from "../components/ui/projects/ProjectItems";
import {projects} from "../content";

const Work = () => {
  return (
    <Main name="work" extraClasses="text-gray-300">
      {projects.display && (
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              {projects.title}
            </p>
            <p className="py-6">{projects.description}</p>
          </div>

          {/* Container */}
          <ProjectItems />
        </div>
      )}
    </Main>
  );
};

export default Work;
