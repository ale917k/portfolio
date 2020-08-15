import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    height: theme.spacing(0.6),
    width: theme.spacing(0.6),
    borderRadius: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    pointerEvents: "none",
    zIndex: "9999",
    "&.cursor": {
      backgroundColor: theme.palette.common.white,
      mixBlendMode: "difference !important",
    },
    "&.bg-cursor": {
      backgroundColor: theme.palette.common.white,
      width: theme.spacing(6),
      height: theme.spacing(6),
      transition: `width ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}, height ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      mixBlendMode: "difference !important",
      opacity: 0.1,
      "&.expand": {
        width: theme.spacing(9),
        height: theme.spacing(9),
      },
    },
  },
}));

const Cursor = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={`cursor ${classes.root}`}></div>
      <div className={`bg-cursor ${classes.root}`}></div>
    </Fragment>
  );
};

export default Cursor;
