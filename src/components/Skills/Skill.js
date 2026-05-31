import react from "../../img/react.svg";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import javascript from "../../img/javascript.svg";
import mongodb from "../../img/mongodb.svg";
import database from "../../img/database.png";
import redux from "../../img/redux.svg";
import nodejs from "../../img/nodejs.svg";
import express from "../../img/express.svg";

export const skill = [
  {
    img: database,
    title: "DS & Algo",
    color: "#264de4",
  },
  {
    img: html,
    title: "HTML",
    color: "#e34c26",
  },
  {
    img: css,
    title: "CSS",
    color: "#264de4",
  },
  {
    img: javascript,
    title: "Javascript",
    color: "#f7df1e",
  },
  {
    img: react,
    title: "React",
    color: "#61dafb",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    title: "Next JS",
    color: "#000000",
    filter: "invert(1)", // white in dark, black in light
    darkHoverColor: "#ffffff", // white glow in dark mode
    lightHoverColor: "#000000", // black glow in light mod
  },
  {
    img: redux,
    title: "Redux",
    color: "#764abc",
    lightFilter: "none",
    darkFilter: "brightness(1.4) saturate(1.5)",
  },
  {
    img: nodejs,
    title: "Node JS",
    color: "#339933",
    filter: "brightness(0.85)", // tones down the washed-out look in light mode
  },
  {
    img: express,
    title: "Express",
    color: "#000000",
    filter: "invert(1)", // same as Next JS
    darkHoverColor: "#ffffff", // white glow in dark mode
    lightHoverColor: "#000000", // black glow in light mode
  },
  {
    img: mongodb,
    title: "MongoDB",
    color: "#47a248",
  },
];
