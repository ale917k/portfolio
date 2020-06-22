import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { expandCursor, shrinkCursor } from "../Cursor/cursor.actions";

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

  return (
    <ul className={classes.root}>
      <li>
        <Link
          component={RouterLink}
          to="/projects"
          onMouseOver={expandCursor}
          onMouseOut={shrinkCursor}
        >
          PROJECTS
        </Link>
      </li>
      <li>
        <Link
          component={RouterLink}
          to="/about"
          onMouseOver={expandCursor}
          onMouseOut={shrinkCursor}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          component={RouterLink}
          to="/contact"
          onMouseOver={expandCursor}
          onMouseOut={shrinkCursor}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
