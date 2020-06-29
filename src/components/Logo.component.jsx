import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { expandCursor, shrinkCursor } from "../js/cursor.actions";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const Logo = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    root: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    tilt: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      border: `1px solid ${
        location.pathname === "/contact"
          ? theme.palette.common.black
          : theme.palette.common.white
      }`,
      borderRadius: "50%",
      transformStyle: "preserve-3d",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "AvenirNextLTPro-Demi",
      fontSize: 18,
      color:
        location.pathname === "/contact"
          ? theme.palette.common.black
          : theme.palette.common.white,
      transform: "translateZ(60px) scale(0.88)",
      borderRadius: "50%",
    },
  }));

  const classes = useStyles();

  return (
    <Link
      className={classes.root}
      component={RouterLink}
      to="/about"
      onMouseOver={expandCursor}
      onMouseOut={shrinkCursor}
    >
      <Tilt
        className={`${classes.tilt} logo`}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.1}
      >
        <Box className={classes.content}>AP</Box>
      </Tilt>
    </Link>
  );
};

export default Logo;
