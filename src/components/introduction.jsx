import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import IntroImage from "../images/jing.fm-hurdler-clip-art-3372397.png";

function Introduction() {
  const myRef = document.querySelector(".scrollable-div");
  return (
    <section className="container-fluid bg-dark text-center intro" id="home">
      <img src={IntroImage} alt="" width="150" hieght="150" className="mb-4" />
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
        text="Hey! I'm Alagbu Somtochukwu"
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
        text="Front-end Developer | Back-end Developer | UI Designer"
        typeSpeed={100}
        scrollArea={myRef}
        hideCursorAfterText={true}
      />
    </section>
  );
}
export default Introduction;
