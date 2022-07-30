import React from "react";
import {skills} from "../../../content";
import { generateUniqueKey } from "../../../utility/generate-unique-key";
import SkillItem from "./SkillItem";

function SkillItems() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
      {skills.items.map((item, index) => {
        return <SkillItem key={generateUniqueKey(index)} title={item.title} img={item.img} />;
      })}
    </div>
  );
}

export default SkillItems;
