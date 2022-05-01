import React from "react";
import Main from "../components/layout/Main";

function About() {
  return (
    <Main name="about" extraClasses="text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi. I'm Armash, nice to meet you have a look around at my
              portfolio.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates perspiciatis, fugiat tempore enim incidunt non natus,
              esse rerum laudantium facilis excepturi, eos veritatis ad
              recusandae similique quod dicta! Aperiam quae laboriosam eius
              alias, magni, vel repellat saepe vero exercitationem incidunt
              similique.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default About;
