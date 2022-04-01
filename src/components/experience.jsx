import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <section className="bg-projects">
      <h3 className="text-center py-5">Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
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
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2010 - 2011"
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
          icon={<FaReact />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
