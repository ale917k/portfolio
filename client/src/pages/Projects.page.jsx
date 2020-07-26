import React from "react";

import Particles from "react-particles-js";
import particlesOptions from "../js/particles.options";

import { makeStyles } from "@material-ui/core/styles";

import ProjectsContainer from "../components/projects/ProjectsContainer.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.common.black,
    overflow: "hidden",
    "& .particles": {
      width: "100%",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Particles className="particles" params={particlesOptions} />
      <ProjectsContainer />
    </div>
  );
};

export default Projects;
