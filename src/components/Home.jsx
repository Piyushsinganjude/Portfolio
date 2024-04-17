import React from "react";
import HeroImage from "../assets/prop.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A creative and quick thinking individual having a good knowledge about technology. Seeking a challenging
position in a reputable organization to expand and utilize my learning, skills and knowledge
          </p>

          <div>
          <Link to="portfolio" smooth className="text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
              </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            style={{ width: '450px', height: '450px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;