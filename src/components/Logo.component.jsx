import React from "react";
import { useLocation } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { expandCursor, shrinkCursor } from "../js/cursor.actions";

import { makeStyles } from "@material-ui/core/styles";

const Logo = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    root: {
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
      transform: "translateZ(60px)",
      borderRadius: "50%",
    },
  }));

  const classes = useStyles();

  return (
    <Tilt
      className={`${classes.root} logo`}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.1}
      onMouseOver={expandCursor}
      onMouseOut={shrinkCursor}
    >
      <div className={classes.content}>AP</div>
    </Tilt>
  );
};

export default Logo;
