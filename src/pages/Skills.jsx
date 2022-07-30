import React from "react";
import Main from "../components/layout/Main";
import { skills } from "../content";
import SkillItems from "../components/ui/skills/SkillItems";

function Skills() {
  return (
    <Main name="skills" extraClasses="text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600">{skills.title}</p>
          <p className="py-4">{skills.description}</p>
        </div>
        <SkillItems />
      </div>
    </Main>
  );
}

export default Skills;
