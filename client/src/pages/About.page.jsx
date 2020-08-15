import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CssAnimatedBackground from "../components/global/CssAnimatedBackground.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  text: {
    color: theme.palette.common.white,
  },
  links: {
    position: "absolute",
    bottom: theme.spacing(5),
    "& > a": {
      marginRight: theme.spacing(2),
    },
  },
  img: {
    height: "fit-content",
    position: "relative",
    maxWidth: "450px",
    width: "40%",
    marginTop: "auto",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.text}>
          <Typography variant="h1" gutterBottom>
            ABOUT ME
          </Typography>

          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
          </Typography>

          <Typography variant="body2">
            What i love is travelling, meeting new people, discover different
            realities and create something new, every day.
          </Typography>
        </div>

        <div className={classes.links}>
          <Button component={RouterLink} variant="outlined" to="/skills">
            Skills
          </Button>
          <Button component={RouterLink} variant="outlined" to="/playground">
            Playground
          </Button>
        </div>

        <img
          className={classes.img}
          src={require("../assets/me.png")}
          alt="Myself"
        />
      </Container>

      <CssAnimatedBackground />
    </div>
  );
};

export default About;
