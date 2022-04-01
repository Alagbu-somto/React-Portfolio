import React from "react";

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
      <p className="col-md-5 my-5">
        Are you looking for someone with a persistent mindset, aims towards
        implementing your ideas, design needs and delever top quality products
        that will meet your expectation? then i might be the right fit for the
        job. I have a persistent mindset and i aim towards customer
        satisfaction. if this sound like the profile your looking for then get
        in touch so we can get started on your project
      </p>
    </section>
  );
}

export default You;
