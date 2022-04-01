import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./introduction";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
