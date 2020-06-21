import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Logo from "../Logo/Logo.component";
import Menu from "../Menu/Menu.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
