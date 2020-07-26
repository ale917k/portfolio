import React, { Fragment } from "react";

import SKILLS_TECH from "../js/SKILLS_TECH";

import Presentation from "../components/about/Presentation.component";
import SliderSection from "../components/about/SliderSection.component";
import SkillsSection from "../components/about/SkillsSection.component";
import SkillsProgressSection from "../components/about/SkillsProgressSection.component";
import ContactMeSection from "../components/about/ContactMeSection.component";

const About = () => {
  return (
    <Fragment>
      <Presentation />
      <SliderSection />
      <SkillsSection {...SKILLS_TECH.front} />
      <SkillsSection {...SKILLS_TECH.back} />
      <SkillsSection {...SKILLS_TECH.tech} />
      <SkillsProgressSection />
      <ContactMeSection />
    </Fragment>
  );
};

export default About;
