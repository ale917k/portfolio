import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

import { expandCursor, shrinkCursor } from "../../js/cursor.actions";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const Menu = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 60,
      margin: 0,

      "& > li": {
        listStyle: "none",

        "& > a": {
          textDecoration: "none",
          color:
            location.pathname === "/contact"
              ? theme.palette.common.black
              : theme.palette.common.white,
          fontWeight: theme.typography.fontWeightMedium,
          padding: theme.spacing(2),

          "&:hover": {
            textDecoration: "none",
          },
        },

        "&:last-of-type": {
          paddingRight: 0,
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <ul className={classes.root}>
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
