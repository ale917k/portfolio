import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";

import { gsap } from "gsap";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CssAnimatedBackground from "../components/global/CssAnimatedBackground.component";

const useStyles = makeStyles((theme) => ({
  aboutPage: {
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
    clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0% 0%)",
  },
}));

const About = () => {
  const classes = useStyles();
  let container = useRef(null);
  let text = useRef(null);
  let buttons = useRef(null);
  let image = useRef(null);

  const enterText = () => {
    let textTl = gsap.timeline();

    textTl.from(text.current, {
      duration: 1.5,
      translateY: 50,
      opacity: 0,
    });
    return textTl;
  };

  const enterImage = () => {
    let imageTl = gsap.timeline();

    imageTl.to(image.current, {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      transformOrigin: "top",
    });
    return imageTl;
  };

  useEffect(() => {
    let masterTl = gsap.timeline();
    container &&
      masterTl
        .add(enterText(), "scene-enter-text")
        .add(enterImage(), "scene-enter-image");
  }, [container]);

  return (
    <div className={classes.aboutPage}>
      <Container className={classes.container} ref={container}>
        <div className={classes.text} ref={text}>
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

        <div className={classes.links} ref={buttons}>
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

        <img
          className={classes.img}
          src={require("../assets/me.png")}
          alt="Myself"
          ref={image}
        />
      </Container>

      <CssAnimatedBackground />
    </div>
  );
};

export default About;
