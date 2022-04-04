import React from "react";

function Project(props) {
  return (
    <div className="col-md-3 m-4 w-project container-project bg-white">
      <div className=" text-center row">
        <img
          src={props.image}
          alt=""
          height="250"
          className="my-4 w-project col-sm-12"
        />
        <h4 className="col-sm-12">{props.projectName}</h4>
        <p className="middle col-sm-12 my-2">{props.description}</p>
        <a
          href={props.Url}
          className="middle text-center bg-dark text-white rounded-lg p-2"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default Project;
