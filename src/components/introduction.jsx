import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Introduction() {
  const myRef = document.querySelector(".scrollable-div");
  return (
    <div className="bg-dark text-center intro">
      <img
        src={
          process.env.PUBLIC_URL + "images/jing.fm-hurdler-clip-art-3372397.png"
        }
        alt=""
        width="150"
        hieght="150"
        className="mb-4"
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#FFFFFF",
          fontWeight: 500,
          fontSize: "1.5em",
          textAlign: "center",
          marginBottom: "1em",
        }}
        startDelay={100}
        cursorColor="#FFFFFF"
        text="Hey am Alagbu Somtochukwu"
        typeSpeed={100}
        scrollArea={myRef}
        hideCursorAfterText={true}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#FFFFFF",
          fontWeight: 500,
          fontSize: "1.5em",
          textAlign: "center",
        }}
        startDelay={3500}
        cursorColor="#FFFFFF"
        text="Back-end Developer | Front-end Developer | UI Designer"
        typeSpeed={100}
        scrollArea={myRef}
        hideCursorAfterText={true}
      />
    </div>
  );
}
export default Introduction;
