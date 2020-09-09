import React from "react";

import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/core/styles";

import ProjectsContainer from "../components/projects/ProjectsContainer.component";

const useStyles = makeStyles((theme) => ({
  projectsPage: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.common.white,
    overflow: "hidden",
  },
  particles: {
    width: "100%",
  },
}));

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#0A0908",
    },
    line_linked: {
      color: "#0A0908",
    },
  },
};

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectsPage}>
      <Particles className={classes.particles} params={particlesOptions} />
      <ProjectsContainer />
    </div>
  );
};

export default Projects;
