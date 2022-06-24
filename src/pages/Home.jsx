import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import Main from "../components/layout/Main";
import TypeWriter from "typewriter-effect";

function Home() {
  return (
    <Main name="home">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Syed Armash Hussain
        </h1>
        <div className="text-4xl sm:text-7xl py-4 font-bold text-white">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString("I'm a ")
                .typeString("Student")
                .deleteChars(7)
                .typeString("Software Engineer")
                .pause()
                .start();
            }}
          />
        </div>

        <div className="">
          <button className="text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-white  hover:border-white hover:text-black duration-200">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2 text-xl" />
            </span>
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Home;
