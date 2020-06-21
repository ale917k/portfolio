import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    height: theme.spacing(0.5),
    width: theme.spacing(0.5),
    borderRadius: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    mixBlendMode: "difference !important",
    pointerEvents: "none",

    "&.cursor": {
      backgroundColor: "white",
    },

    "&.bg-cursor": {
      backgroundColor: theme.palette.common.white,
      width: theme.spacing(5),
      height: theme.spacing(5),
      transition: `width ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}, height ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,

      "&.expand": {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },

      "&.pulse": {
        animation: `$cursorAnim 500ms alternate infinite`,
      },
    },
  },

  "@keyframes cursorAnim": {
    from: {
      transform: "translateX(-50%) translateY(-50%) scale(1)",
      backgroundColor: theme.palette.common.black,
    },
    to: {
      transform: "translateX(-50%) translateY(-50%) scale(1.2)",
      backgroundColor: theme.palette.common.black,
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
