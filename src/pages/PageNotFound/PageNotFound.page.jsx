import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

const PageNotFound = () => {
  const classes = useStyles();

  return <div className={classes.root}>Page Not Found</div>;
};

export default PageNotFound;
