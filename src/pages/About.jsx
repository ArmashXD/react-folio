import React from "react";
import Main from "../components/layout/Main";
import {yourDetails} from "../content";

function About() {
  return (
    <Main name="about" extraClasses="text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {yourDetails.about.heading}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>{yourDetails.about.title}</p>
          </div>
          <div>
            <p>{yourDetails.about.description}</p>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default About;
