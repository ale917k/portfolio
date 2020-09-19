import React from "react";
import { Switch, Route } from "react-router-dom";

import SkillsContainer from "../components/skills/SkillsContainer.component";
import SkillsSection from "../components/skills/SkillsSection.component";
import SkillsProgressSection from "../components/skills/SkillsProgressSection.component";

import SKILLS_TECH from "../js/SKILLS_TECH";

const Skills = () => {
  return (
    <SkillsContainer>
      <Switch>
        <Route
          exact
          path="/skills/progress"
          component={SkillsProgressSection}
        />
        {Object.entries(SKILLS_TECH).map(([key, value]) => (
          <Route key={key} exact path={`/skills/${key}`}>
            <SkillsSection {...value} />
          </Route>
        ))}
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    </SkillsContainer>
  );
};

export default Skills;
