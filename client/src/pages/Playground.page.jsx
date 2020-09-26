import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LineStyleRoundedIcon from "@material-ui/icons/LineStyleRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import CameraRoundedIcon from "@material-ui/icons/CameraRounded";
import BackupRoundedIcon from "@material-ui/icons/BackupRounded";

import ContainerWithDrawer from "../components/global/ContainerWithDrawer.component";
import SkillsSection from "../components/skills/SkillsSection.component";

const navLinks = [
  { title: "Frontend", Icon: LineStyleRoundedIcon },
  { title: "Backend", Icon: StorageRoundedIcon },
  { title: "Design", Icon: CameraRoundedIcon },
  { title: "Other", Icon: BackupRoundedIcon },
];

const Skills = () => {
  return (
    <ContainerWithDrawer page="Playground" navLinks={navLinks}>
      <Switch>
        <Route exact path={"/playground/test"} component={SkillsSection} />
        <Route exact path={"/playground/test2"} component={SkillsSection} />
        <Route exact path={"/playground/test3"} component={SkillsSection} />
        <Route path="*">
          <Redirect to="/page-not-found" />
        </Route>
      </Switch>
    </ContainerWithDrawer>
  );
};

export default Skills;
