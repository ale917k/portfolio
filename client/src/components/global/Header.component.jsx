import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Logo from "./Logo.component";
import Menu from "./Menu.component";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    pointerEvents: "none",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Logo />
        <Menu />
      </Container>
    </div>
  );
};

export default Header;
