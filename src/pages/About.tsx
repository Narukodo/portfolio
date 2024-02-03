import React from "react";
import { IconContext } from "react-icons";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import ProfileImage from "resources/profileImage.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full h-full items-center mt-10 text-center lg:flex-row-reverse lg:text-left">
      <div className="h-28 min-h-28 mb-10 w-2/5 lg:p-0 lg:h-auto lg:my-0">
        <img
          src={ProfileImage}
          className="h-24 m-auto mb-3 lg:w-1/2 lg:h-auto"
        />
        <IconContext.Provider
          value={{
            color: "overlay",
            className: "text-overlay",
            style: { height: "100%", width: "auto" },
          }}
        >
          <div className="flex h-8 w-full m-auto lg:w-2/5 justify-between lg:h-14">
            <a href="https://twitter.com/Isukouhai">
              <FaSquareXTwitter />
            </a>
            <a href="https://github.com/Narukodo">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/rose-li-fullstack/">
              <FaLinkedin />
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <div className="h-5/6 lg:w-3/5 lg:h-[90%] overflow-y-scroll">
        <h1 className="mb-2 text-xl lg:mb-5 lg:text-4xl">
          Welcome to my personal website
        </h1>
        <p className="text-sm lg:text-sm">
          I am a software developer and art enthusiast inspired by games and
          anime. I specialize in digital art, juxtaposing cell-shaded characters
          on intricate, detailed scenery to give the impression of watching an
          anime.
          <br />
          <br />
          This website showcases my best works while showcasing my coding skills
          via the source code, which is available on{" "}
          <span className="text-hyperlink underline">
            <a href="https://github.com/Narukodo/portfolio">Github</a>
          </span>{" "}
          for curious souls.
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
