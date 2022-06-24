import React from "react";
import list from "../../../utility/social-icon-items";
import SocialIcon from "./SocialIcon";

function SocialIcons() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {list.map((item) => {
          return (
            <SocialIcon
              key={item.name}
              name={item.name}
              icon={item.icon}
              listClass={item.listClass}
              to={item.to}
              textClass={item.textClass}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SocialIcons;
