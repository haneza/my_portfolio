import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/henriettazarvou"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/haneza" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
