import React from "react";
import Project from "./project";

function Projects() {
  return (
    <section className="row center bg-projects p-b">
      <h3 className="text-center my-5 col-md-12">Projects</h3>
      <Project
        projectName="Todolist"
        description="Built using Mern-Stack and redux"
        image="images/surja-sen-das-raj-y16ku6si6xI-unsplash.jpg"
      />
      <Project
        projectName="QuizGame"
        description="Built using React and Typescript"
        image="images/vadim-bogulov-MfBnqUOz_qY-unsplash.jpg"
      />
      <Project
        projectName="NoteBook"
        description="Built using React"
        image="images/jess-bailey-cvUIv9j5wDg-unsplash.jpg"
      />
    </section>
  );
}

export default Projects;
