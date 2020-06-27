import React from "react";

import Particles from "react-particles-js";
import particlesOptions from "../js/particles.options";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    backgroundColor: theme.palette.common.black,
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    color: theme.palette.common.white,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Particles className="particles" params={particlesOptions} />

      <div className={classes.content}>Projects</div>
    </div>
  );
};

export default Projects;
