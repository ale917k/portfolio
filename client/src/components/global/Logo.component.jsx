import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const Logo = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    logo: {
      padding: theme.spacing(4.5),
      backgroundColor: "transparent",
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold,
      pointerEvents: "all",
      color:
        location.pathname === "/projects"
          ? theme.palette.common.black
          : theme.palette.common.white,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    svg: {
      fill:
        location.pathname === "/projects"
          ? theme.palette.common.black
          : theme.palette.common.white,
      width: "100%",
      minWidth: "26px",
    },
  }));

  const classes = useStyles();

  return (
    <Fab
      component={RouterLink}
      to="/"
      className={classes.logo}
      aria-label="logo"
    >
      <LogoSvg className={classes.svg} />
    </Fab>
  );
};

export default Logo;
