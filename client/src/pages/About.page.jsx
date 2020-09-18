import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CssAnimatedBackground from "../components/global/CssAnimatedBackground.component";

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    width: "100vw",
    height: "100vh",
    overflowY: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
    paddingTop: theme.spacing(16),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textLinkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "75%",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  text: {
    color: theme.palette.common.white,
    maxWidth: theme.spacing(70),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      width: "100%",
    },
  },
  links: {
    marginTop: theme.spacing(4),
    "& > a": {
      marginRight: theme.spacing(2),
    },
  },
  img: {
    marginTop: "auto",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage}>
      <Container className={classes.container}>
        <div className={classes.textLinkContainer}>
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
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br />
            </Typography>

            <Typography variant="body2">
              What i love is travelling, meeting new people, discover different
              realities and create something new, every day.
            </Typography>
          </div>

          <div className={classes.links}>
            <Button
              component={RouterLink}
              variant="outlined"
              to="/skills/frontend"
            >
              Skills
            </Button>
            <Button component={RouterLink} variant="outlined" to="/playground">
              Playground
            </Button>
          </div>
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
