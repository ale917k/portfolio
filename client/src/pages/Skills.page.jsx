import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import MiniDrawer from "../components/skills/MiniDrawer.component";
import SkillsSection from "../components/skills/SkillsSection.component";
import SkillsProgressSection from "../components/skills/SkillsProgressSection.component";

import SKILLS_TECH from "../js/SKILLS_TECH";

const Skills = () => {
  return (
    <MiniDrawer>
      <Switch>
        <Route
          exact
          path="/skills/progress"
          component={SkillsProgressSection}
        />
        {Object.entries(SKILLS_TECH).map(([key, value]) => (
          <Route key={key} exact path={`/skills/${key}`}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={3000}
                classNames="skillPage"
                unmountOnExit
              >
                <div className="skillPage">
                  <SkillsSection {...value} />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    </MiniDrawer>
  );
};

export default Skills;
