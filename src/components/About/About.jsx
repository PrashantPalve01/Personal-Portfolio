import React, { useContext, useEffect } from "react";
import "./about.css";
import { themeContext } from "../../Context";
import Svg1 from "./Svg";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="services"
      id="services"
      data-aos-duration="5000"
      data-aos-delay="600"
    >
      <span
        style={{ color: darkMode ? "white" : "" }}
        className="about_me anim"
        data-aos="flip-left"
      >
        {" "}
        All{" "}
        <span data-aos="flip-left" className="me">
          About
        </span>{" "}
        Me
      </span>
      <div className="grid_about ">
        <div className="awesome " data-aos="slide-right">
          <ul className="about_article anim">
            <li>
              Hello! My name is Prashant Palve, and I enjoy crafting responsive
              and scalable web applications that provide a seamless user
              experience.
            </li>
            <br />
            <li>
              I am a skilled Full Stack Developer specializing in the MERN
              stack, with experience in building and optimizing web applications
              for better performance. I am passionate about coding and always
              eager to learn new technologies.
            </li>
            <br />
            <li>
              My journey into web development started during my college days,
              where I began exploring web technologies. I then completed an
              internship at A2Z IT Hub, where I worked on multiple projects and
              further developed my skills in full stack development. Later, I
              joined Masai School to enhance my knowledge and deepen my
              expertise in web development.
            </li>
            <br />
            <li>
              Over time, I have developed several projects, including a movie
              booking website and a clone of the Reebok website. These projects
              helped me improve my skills in team collaboration, database
              management, and user interface design.
            </li>
            <br />
            <li>
              I am eager to continue growing as both a frontend and full stack
              developer, and contribute to projects that push the boundaries of
              web development.
            </li>
            <br />
          </ul>
        </div>

        <Svg1 className="svg" data-aos="slide-left" />
      </div>
    </div>
  );
};

export default About;
