import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Switch, Route, Redirect } from "react-router-dom";

import LineStyleRoundedIcon from "@material-ui/icons/LineStyleRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import CameraRoundedIcon from "@material-ui/icons/CameraRounded";
import BackupRoundedIcon from "@material-ui/icons/BackupRounded";

import ContainerWithDrawer from "../components/global/ContainerWithDrawer.component";
import SkillsSection from "../components/skills/SkillsSection.component";

import SKILLS_TECH from "../js/SKILLS_TECH";

const navLinks = [
  { title: "Frontend", Icon: LineStyleRoundedIcon },
  { title: "Backend", Icon: StorageRoundedIcon },
  { title: "Design", Icon: CameraRoundedIcon },
  { title: "Other", Icon: BackupRoundedIcon },
];

const Skills = () => {
  const initializeReactGA = () => {
    ReactGA.pageview("/skills");
  };

  useEffect(() => {
    initializeReactGA();
  });

  return (
    <ContainerWithDrawer page="Skills" navLinks={navLinks}>
      <Switch>
        {Object.entries(SKILLS_TECH).map(([key, value]) => (
          <Route key={key} exact path={`/skills/${key}`}>
            <SkillsSection {...value} />
          </Route>
        ))}
        <Route path="*">
          <Redirect to="/page-not-found" />
        </Route>
      </Switch>
    </ContainerWithDrawer>
  );
};

export default Skills;
