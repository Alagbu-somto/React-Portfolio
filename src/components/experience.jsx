import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { AiOutlineHourglass } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <section className="bg-projects">
      <h3 className="text-center py-5 text-white">Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#040f0f" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2021 - present"
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Dev</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            <span className="span-experience">REST API</span>
            <span className="span-experience">Bootstrap</span>
            <span className="span-experience">Javascript</span>
            <span className="span-experience">React</span>
            <span className="span-experience">Ant UI Design</span>
            <span className="span-experience">Wordpress</span>
            <span className="span-experience">Git & Github</span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#040f0f" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2021 - present"
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<FaNode />}
        >
          <h3 className="vertical-timeline-element-title">Back-End Dev</h3>
          <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
          <p>
            <span className="span-experience">REST API</span>
            <span className="span-experience">Express JS</span>
            <span className="span-experience">Mongodb</span>
            <span className="span-experience">Node js</span>
            <span className="span-experience">ES6</span>
            <span className="span-experience">Git & Github</span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<AiOutlineHourglass />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
