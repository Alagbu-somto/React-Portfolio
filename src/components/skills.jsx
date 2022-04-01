import React from "react";
import {
  FaReact,
  FaNode,
  FaWordpress,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  return (
    <section className="row mx-auto center bg-dark p-b">
      <h3 className="col-md-12 my-5 text-center text-light">Skills</h3>
      <div className="skills-box col-sm-1 text-center w-project">
        <FaReact
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3 m"
        />
        <p>React</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <FaNode
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Node.js</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <FaWordpress
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Wordpress</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <FaBootstrap
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Bootstrap</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <FaHtml5
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>HTML5</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <FaCss3
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Css3</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <SiJavascript
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Javascript</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <SiTailwindcss
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Tailwindcss</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <SiNextdotjs
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Nextjs</p>
      </div>
      <div className="skills-box col-sm-1 text-center">
        <SiMongodb
          style={{ color: "white", fontSize: "40px" }}
          className="mx-3 mt-3"
        />
        <p>Mongodb</p>
      </div>
    </section>
  );
}

export default Skills;
