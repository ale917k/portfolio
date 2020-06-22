import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Logo from "../Logo/Logo.component";
import Menu from "../Menu/Menu.component";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Logo />
        <Menu />
      </Container>
    </div>
  );
};

export default Header;
