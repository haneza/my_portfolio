import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

// import { checkVariantsDidChange } from "framer-motion/types/render/utils/animation-state";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">About</h2>
      <p className="about p-text">
        My name is Henrietta Zarvou, based in Nicosia, Cyprus. I am a
        self-taught full stack developer, who is passionate to design and build
        beautiful, responsive modern websites and web applications. I enjoy
        coding and designing because of the satisfaction I get by overcoming
        challenges. <br></br>My goal is to create esthetic websites, which are
        fast, easy to use, built by the best practices and pleasant for the
        users. <br></br>Interested to work together with creative and ambitious
        people in the entire web development spectrum, but would like to learn
        and refining my skills mostly in the front-end development and UI/UX
        design.
      </p>
      <button type="button" className="button">
        <a
          href="cv.pdf"
          target="_blank"
          download="henrietta_zarvou_cv"
          style={{ textDecoration: "none", color: "white" }}
        >
          Download CV
        </a>
      </button>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
