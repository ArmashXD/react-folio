import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll/modules";
import Main from "../components/layout/Main";
import TypeWriter from "typewriter-effect";
import {greeting, yourDetails} from "../content";

function Home() {
  return (
    <Main name="home">
      {greeting.display && (
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-white">{greeting.title}</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            {yourDetails.name}
          </h1>
          <div className="text-4xl sm:text-7xl py-4 font-bold text-white">
            <TypeWriter
              onInit={typewriter => {
                typewriter
                  .pauseFor(greeting.typewriter.pauseFor)
                  .typeString(greeting.typewriter.firstText)
                  .typeString(greeting.typewriter.secondText)
                  .deleteChars(greeting.typewriter.deleteChars)
                  .typeString(greeting.typewriter.thirdText)
                  .pause()
                  .start();
              }}
            />
          </div>
          <div>
            <button className="text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-white  hover:border-white hover:text-black duration-200">
              <Link to="work" smooth={true} duration={500}>
                {greeting.viewWorkButton.title}
              </Link>
              {greeting.viewWorkButton.displayIcon && (
                <span
                  className={
                    greeting.viewWorkButton.hover &&
                    "group-hover:rotate-90 duration-300"
                  }
                >
                  <HiArrowNarrowRight className="ml-2 text-xl" />
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </Main>
  );
}

export default Home;
