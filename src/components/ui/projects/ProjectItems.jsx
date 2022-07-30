import React from "react";
import {projects} from "../../../content";
import { generateUniqueKey } from "../../../utility/generate-unique-key";
import ProjectItem from "./ProjectItem";

function ProjectItems() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.items.map((item, index) => {
        return (
          <ProjectItem
            key={generateUniqueKey(index)}
            title={item.title}
            bgImage={item.backgroundImage}
            codeText={item.codeText}
            demoText={item.demoText}
            demoLink={item.demoLink}
            codeLink={item.codeLink}
          />
        );
      })}
    </div>
  );
}

export default ProjectItems;
