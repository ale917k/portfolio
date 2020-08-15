import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Menu = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 60,
      margin: 0,
      "& > a": {
        color:
          location.pathname === "/projects"
            ? theme.palette.common.black
            : theme.palette.common.white,
        marginRight: theme.spacing(2),
        "&:last-of-type": {
          marginRight: 0,
        },
      },
    },
    contactButton: {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button component={RouterLink} to="/about">
        ABOUT
      </Button>
      <Button component={RouterLink} to="/projects">
        PROJECTS
      </Button>
      <Button
        component={RouterLink}
        variant="contained"
        to="/contact"
        className={classes.contactButton}
      >
        CONTACT ME
      </Button>
    </div>
  );
};

export default Menu;
