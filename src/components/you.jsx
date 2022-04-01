import React from "react";
import { Button } from "react-bootstrap";

function You() {
  return (
    <section className="text-center p-b px-5 row bg-h text-white">
      <h1 className="my-5 col-md-12">Why Hire Me ?</h1>
      <div className="my-3 col-md-5">
        <img
          src={process.env.PUBLIC_URL + `${"/images/pics.jpg"}`}
          alt=""
          height=""
          className="rounded-circle img-h"
        />
      </div>
      <div className="col-md-5 my-5">
        <p>
          Are you looking for someone with a persistent mindset, aims towards
          implementing your ideas, design needs and deliver top quality products
          that will meet your expectation ? Then I might be the right fit for
          the job. I have a persistent mindset and I aim towards customer
          satisfaction. if this sound like the profile your looking for then get
          in touch so we can get started on your project
        </p>
        <Button href="#contact" className="btn-dark">
          GET STARTED
        </Button>
      </div>
    </section>
  );
}

export default You;
