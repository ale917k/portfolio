import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "AvenirNextLTPro-Demi",
    fontSize: 18,
    color: "white",
    width: 60,
    height: 60,
    border: "1px solid white",
    borderRadius: "50%",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return <div className={classes.root}>AP</div>;
};

export default Logo;
