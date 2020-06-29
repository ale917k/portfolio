import React, { Fragment } from "react";

import SKILLS_TECH from "../js/SKILLS_TECH";

import Presentation from "../components/Presentation.component";
import SliderSection from "../components/SliderSection.component";
import SkillsSection from "../components/SkillsSection.component";
import SkillsProgressSection from "../components/SkillsProgressSection.component";
import ContactMeSection from "../components/ContactMeSection.component";

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
