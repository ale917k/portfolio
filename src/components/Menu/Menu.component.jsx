import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    margin: 0,

    "& > li": {
      listStyle: "none",
      padding: `0 ${theme.spacing(2)}px`,

      "& > a": {
        textDecoration: "none",
      },

      "&:last-of-type": {
        paddingRight: 0,
      },
    },
  },
}));

const Menu = () => {
  const classes = useStyles();

  const cursorOver = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.add("expand");
    bgCursor.classList.add("pulse");
  };

  const cursorOut = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.remove("expand");
    bgCursor.classList.remove("pulse");
  };

  return (
    <ul className={classes.root}>
      <li>
        <Link
          component={RouterLink}
          to="/projects"
          onMouseOver={cursorOver}
          onMouseOut={cursorOut}
        >
          PROJECTS
        </Link>
      </li>
      <li>
        <Link
          component={RouterLink}
          to="/about"
          onMouseOver={cursorOver}
          onMouseOut={cursorOut}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          component={RouterLink}
          to="/contact"
          onMouseOver={cursorOver}
          onMouseOut={cursorOut}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
