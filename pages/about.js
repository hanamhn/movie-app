import React from "react";
import Navbar from "../components/navbar";

const About = () => {
  const message = "Hello About Page";
  return (
    <div>
      <Navbar />
      <h2>{message}</h2>
    </div>
  );
};

export default About;
