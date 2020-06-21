import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

const About = () => {
  const classes = useStyles();

  return <div className={classes.root}>About Page</div>;
};

export default About;
