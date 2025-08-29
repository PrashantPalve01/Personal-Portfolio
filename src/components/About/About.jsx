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
              Hello! I'm Prashant Palve, a Full Stack Developer who transforms
              ideas into responsive, scalable web applications using the MERN
              stack.
            </li>
            <br />
            <li>
              My development journey began during college, where I discovered my
              fascination with creating digital solutions. This led to a
              valuable software development internship at A2Z IT Hub, where I
              contributed to multiple client projects and honed my skills in
              building production-ready applications.
            </li>
            <br />
            <li>
              Currently completing an intensive Full Stack Development Bootcamp
              at Masai School, I've strengthened my expertise in modern web
              technologies and data structures & algorithms. I'm proficient in
              utilizing Generative AI tools to enhance development workflows and
              rapidly adapt to emerging technologies.
            </li>
            <br />
            <li>
              What drives me is creating applications that genuinely solve
              problems. My recent projects include GitHub Recruiter—a technical
              hiring platform built in 48 hours that reduces manual screening by
              80% through automated profile analysis—and MediTrack, a
              comprehensive medication management system with real-time
              features.
            </li>
            <br />
            <li>
              I thrive in collaborative environments and enjoy the entire
              development cycle, from architecting scalable backends to crafting
              intuitive user interfaces. Always eager to take on new challenges
              and contribute to innovative projects that make a meaningful
              impact.
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
