import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DiCss3,
  DiJavascript1,
  DiHtml5,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
  DiSass,
  DiMysql,
  DiVisualstudio,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiFigma,
  SiJira,
  SiMaterialui,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__testimonial-brands app__flex">
        <motion.div className="dev-items">
          <DiHtml5 alt="html"></DiHtml5>
          <DiCss3></DiCss3>
          <DiJavascript1></DiJavascript1>
          <SiTypescript></SiTypescript>
          <DiNodejsSmall></DiNodejsSmall>
          <SiExpress></SiExpress>
          <DiReact></DiReact>
          <SiNextdotjs></SiNextdotjs>
          <DiBootstrap></DiBootstrap>
          <SiMaterialui></SiMaterialui>
          <DiSass></DiSass>
          <DiMysql></DiMysql>
          <SiFigma></SiFigma>
          <DiGit></DiGit>
          <DiGithubBadge></DiGithubBadge>
          <DiVisualstudio></DiVisualstudio>
          <SiJira></SiJira>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
