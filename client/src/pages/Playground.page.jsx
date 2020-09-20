import React from "react";
import { Switch, Route } from "react-router-dom";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import LineStyleRoundedIcon from "@material-ui/icons/LineStyleRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import CameraRoundedIcon from "@material-ui/icons/CameraRounded";
import BackupRoundedIcon from "@material-ui/icons/BackupRounded";

import ContainerWithDrawer from "../components/global/ContainerWithDrawer.component";
import SkillsSection from "../components/skills/SkillsSection.component";
import PageNotFound from "./PageNotFound.page";

const navLinks = [
  { title: "Frontend", Icon: LineStyleRoundedIcon },
  { title: "Backend", Icon: StorageRoundedIcon },
  { title: "Design", Icon: CameraRoundedIcon },
  { title: "Other", Icon: BackupRoundedIcon },
];

const useStyles = makeStyles((theme) => ({
  pageNotFoundContainer: {
    position: "relative",
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    margin: theme.spacing(-3),
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <ContainerWithDrawer page="Playground" navLinks={navLinks}>
      <Switch>
        <Route exact path={"/playground/test"} component={SkillsSection} />
        <Route exact path={"/playground/test2"} component={SkillsSection} />
        <Route exact path={"/playground/test3"} component={SkillsSection} />
        <Route path="*">
          <Box className={classes.pageNotFoundContainer}>
            <PageNotFound />
          </Box>
        </Route>
      </Switch>
    </ContainerWithDrawer>
  );
};

export default Skills;
