import React from "react";

function Project(props) {
  return (
    <div className="col-sm-3 maxW-project m-5 container-project bg-white">
      <div className=" text-center row">
        <img
          src={process.env.PUBLIC_URL + `${props.image}`}
          alt=""
          height="250"
          className="my-4 w-project col-sm-12"
        />
        <h4 className="col-sm-12">{props.projectName}</h4>
        <p className="middle col-sm-12 my-2">{props.description}</p>
        <a className="middle text-center bg-dark text-white rounded-lg p-2">
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default Project;
