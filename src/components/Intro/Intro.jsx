import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/me.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { Typewriter } from "react-simple-typewriter";
import SmoothList from "react-smooth-list";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleResumeClick = () => {
    const driveLink =
      "https://drive.google.com/file/d/16IeDnoOQwgEVR831idIttseXZyP4SdXQ/view?usp=sharing";
    window.open(driveLink, "_blank");

    const link = document.createElement("a");
    link.href = "/Prashant_Palve_Full_Stack_Developer_Resume.pdf"; // Path to the file in the public folder
    link.download = "Prashant_Palve_Full_Stack_Developer_Resume.pdf"; // Default name for the downloaded file
    link.click();
  };

  return (
    <SmoothList transitionDuration={2500} animated={true}>
      <div className="Intro" id="intro">
        <div className="i-left">
          <div className="i-name ">
            <span style={{ color: darkMode ? "white" : "" }}>
              <div style={{ fontSize: "27px" }}>
                <h3 style={{ fontSize: "27px" }} className="helo anim">
                  Hello, my name is
                </h3>
              </div>
            </span>

            <span className="animate-charcte name anim">Prashant Palve</span>
            <h2 className="full_stack_h2 anim">
              I'm a
              <span className="full_stack anim">
                <Typewriter
                  words={[" Full Stack Web Developer.", " Web Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
          <button
            onClick={handleResumeClick}
            className="resum rounded-sm flex bg-red-500 p-1 pl-3 pr-3 text-white hover:text-red-500 hover:bg-white animate-bounce hover:border-x-2 hover:border-red-500"
          >
            Resume
            <HiDownload />
          </button>

          <div className="i-icons">
            <a
              href="https://github.com/PrashantPalve01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashantpalve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linkedin" />
            </a>
          </div>
        </div>
        {/* ok */}
        <div className="i-right">
          <img src={me} alt="me" draggable="false" className="my_img anim" />
        </div>
      </div>
    </SmoothList>
  );
};

export default Intro;
