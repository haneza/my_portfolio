import { transform } from "framer-motion";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div
      className="copyright app__flex"
      style={{
        backgroundColor: "rgb(47, 46, 65, 100%)",
      }}
    >
      <p className="p-text">@2022 henrietta zarvou</p>
      <p className="p-text">All rights reserved</p>
    </div>
  );
};

export default Footer;
