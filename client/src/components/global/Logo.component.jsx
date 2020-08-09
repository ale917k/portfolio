import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

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
    logo: {
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
      fontFamily: "'Raleway', sans-serif",
      fontSize: 18,
      color:
        location.pathname === "/contact"
          ? theme.palette.common.black
          : theme.palette.common.white,
    },
  }));

  const classes = useStyles();

  return (
    <Link className={classes.root} component={RouterLink} to="/about">
      <Box className={classes.logo}>AP</Box>
    </Link>
  );
};

export default Logo;
