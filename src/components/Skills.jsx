import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import sass from '../assets/sass.png'
import bootstrap from '../assets/bootstrap.png'
import redux from '../assets/redux.png'
import jquery from '../assets/jquery.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import npm from '../assets/npm.png'

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    }, 
    {
      id: 4,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 5,
      src: bootstrap,
      title: 'BootStrap',
      style: 'shadow-purple-800'
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
     {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-900",
    },
    {
      id: 9,
      src: jquery,
      title: "jQuery",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: node,
      title: "node.js",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: express,
      title: "Express.js",
      style: "shadow-gray-700",
    },
    {
      id: 12,
      src: mongo,
      title: "mongoDB",
      style: "shadow-red-900",
    },
    {
      id: 13,
      src: npm,
      title: "NPM",
      style: "shadow-red-400",
    },
    {
      id: 14,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-5">
        <div className="pt-20 mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-20 w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
