import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Projects = () => {
  const classes = useStyles();

  return <div className={classes.root}>Projects</div>;
};

export default Projects;
