import React, { useEffect, useContext } from "react";
import { skill } from "./Skill";
import "./skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { themeContext } from "../../Context";

const SkillCard = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="grid">
      {skill.map((item, index) => (
        <div
          key={index}
          className="skill_child"
          data-aos="slide-left"
          data-aos-duration="5000"
          data-aos-delay={`${(index % 5) * 100}`}
          style={{
            "--hover-color": darkMode
              ? item.darkHoverColor || item.color
              : item.lightHoverColor || item.color,
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="grid_img"
            draggable="false"
            style={{
              filter: darkMode
                ? item.darkFilter ||
                  (item.filter === "invert(1)"
                    ? "invert(1)"
                    : item.filter || "none")
                : item.lightFilter ||
                  (item.filter === "invert(1)"
                    ? "invert(0)"
                    : item.filter || "none"),
            }}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
