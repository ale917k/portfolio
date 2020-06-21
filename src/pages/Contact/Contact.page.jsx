import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Contact = () => {
  const classes = useStyles();

  return <div className={classes.root}>Contact Page</div>;
};

export default Contact;
