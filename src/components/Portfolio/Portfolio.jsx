import React, { useContext, useEffect } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";
import { project } from "./project";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // ok
  return (
    <div className="portfolio" id="portfolio" data-aos="fade-right">
      <span style={{ color: darkMode ? "white" : "" }} className="port_span">
        My Creative <span className="po"> Project </span>Section
      </span>

      <div className="grid_project ">
        {project.map((item, index) => (
          <div
            className="pr_child"
            key={index}
            data-aos="slide-up"
            data-aos-duration="4000"
            data-aos-delay="300"
          >
            <div className="card-header">
              <img src={item.img} alt="a" className="project_img" />
            </div>
            <div className="card-body">
              <h3 className="pr_title">{item.title}</h3>
              <p className="pr_desc desc">{item.desc}</p>

              <p className="pr_desc t_sk ">
                <span className="tech">Tech Stack: </span> {item.tech}
              </p>

              <div className="pr_flex">
                <a
                  href={item.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: darkMode ? "white" : "black",
                    background: darkMode
                      ? " rgb(15, 22, 36)"
                      : "rgb(239, 237, 237)",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    focusable="false"
                    className="chakra-icon css-wmxkd2"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                  </svg>
                </a>

                <a
                  href={item.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: darkMode ? "white" : "black",
                    background: darkMode
                      ? " rgb(15, 22, 36)"
                      : "rgb(239, 237, 237)",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    focusable="false"
                    className="chakra-icon css-wmxkd2"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
