import React from "react";
import SimpleBarReact from "simplebar-react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scrollbar: {
    width: "100%",
    maxHeight: "100vh",
    backgroundColor: theme.palette.common.white,
    position: "relative",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    "& .simplebar-wrapper": {
      overflow: "hidden",
      width: "inherit",
      height: "inherit",
      maxWidth: "inherit",
      maxHeight: "inherit",
    },
    "& .simplebar-mask": {
      direction: "inherit",
      position: "absolute",
      overflow: "hidden",
      padding: 0,
      margin: 0,
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: "auto !important",
      height: "auto !important",
      zIndex: 0,
    },
    "& .simplebar-offset": {
      direction: "inherit !important",
      boxSizing: "inherit !important",
      resize: "none !important",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: 0,
      margin: 0,
      webkitOverflowScrolling: "touch",
    },
    "& .simplebar-content-wrapper": {
      direction: "inherit",
      boxSizing: "border-box !important",
      position: "relative",
      display: "block",
      height:
        "100%" /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */,
      width: "auto",
      maxWidth: "100%" /* Not required for horizontal scroll to trigger */,
      maxHeight: "100%" /* Needed for vertical scroll to trigger */,
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    "& .simplebar-content-wrapper::-webkit-scrollbar, & .simplebar-hide-scrollbar::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
    "& .simplebar-content:before, & .simplebar-content:after": {
      content: "''",
      display: "table",
    },
    "& .simplebar-placeholder": {
      maxHeight: "100%",
      maxWidth: "100%",
      width: "100%",
      pointerEvents: "none",
    },
    "& .simplebar-height-auto-observer-wrapper": {
      boxSizing: "inherit !important",
      height: "100%",
      width: "100%",
      maxWidth: 1,
      position: "relative",
      float: "left",
      maxHeight: 1,
      overflow: "hidden",
      zIndex: -1,
      padding: 0,
      margin: 0,
      pointerEvents: "none",
      flexGrow: "inherit",
      flexShrink: 0,
      flexBasis: 0,
    },
    "& .simplebar-height-auto-observer": {
      boxSizing: "inherit",
      display: "block",
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "1000%",
      minHeight: 1,
      minWidth: 1,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: -1,
    },
    "& .simplebar-track": {
      zIndex: 1,
      position: "absolute",
      right: 0,
      bottom: 0,
      pointerEvents: "none",
      overflow: "hidden",
      "&.simplebar-vertical": {
        top: 0,
        width: theme.spacing(1.5),
        "& .simplebar-scrollbar:before": {
          top: 2,
          bottom: 2,
        },
      },
    },
    "&.simplebar-dragging .simplebar-content": {
      pointerEvents: "none",
      userSelect: "none",
      webkitUserSelect: "none",
    },
    "&.simplebar-dragging .simplebar-track": {
      pointerEvents: "all",
    },
    "& .simplebar-scrollbar": {
      position: "absolute",
      left: 0,
      right: 0,
      minHeight: theme.spacing(1),
      "&:before": {
        position: "absolute",
        content: "''",
        background: theme.palette.common.black,
        borderRadius: theme.spacing(1),
        left: 2,
        right: 2,
        opacity: 0,
        transition: theme.transitions.create(["opacity"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      "&.simplebar-visible:before": {
        /* When hovered, remove all transitions from drag handle */
        opacity: 0.5,
        transition: theme.transitions.create(["opacity"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      "& .hs-dummy-scrollbar-size": {
        direction: "rtl",
        position: "fixed",
        opacity: 0,
        visibility: "hidden",
        height: "500px",
        width: "500px",
        overflowY: "hidden",
        overflowX: "scroll",
      },
    },
  },
}));

const Scrollbar = ({ className, children }) => {
  const classes = useStyles();

  return (
    <SimpleBarReact
      className={`${classes.scrollbar}${className ? " " + className : ""}`}
    >
      {children}
    </SimpleBarReact>
  );
};

export default Scrollbar;
