import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Typewriter from "typewriter-effect";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homePage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  layer: {
    position: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    willChange: "transform",
    width: "130%",
  },
  background: {
    height: "110%",
    backgroundImage: `url(${require("../assets/home/stars.png")}), url(${require("../assets/home/background.jpg")})`,
    backgroundSize: "cover",
  },
  layer1: {
    height: "inherit",
    backgroundImage: `url(${require("../assets/home/layer1.png")})`,
  },
  layer2: {
    height: "inherit",
    backgroundImage: `url(${require("../assets/home/layer2.png")})`,
  },
  layer3: {
    height: "150%",
    backgroundImage: `url(${require("../assets/home/layer3.svg")})`,
    [theme.breakpoints.down("sm")]: {
      width: "175%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300vw",
    },
  },
  textWrapper: {
    top: "55vh",
    left: "35%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    height: "40vh",
  },
  text: {
    color: theme.palette.common.white,
    textTransform: "uppercase",
  },
  title: {
    fontWeight: 900,
    fontSize: "6.5vmin",
  },
  typewriter: {
    "& > *": {
      display: "inline-block",
      color: theme.palette.common.white,
      textAlign: "center",
      fontSize: "4vmin",
    },
  },
  button: {
    fontSize: "1.6vmin",
  },
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;

const Home = () => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className={classes.homePage}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className={`${classes.layer} ${classes.background}`}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer1}`}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer2}`}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer3}`}
        style={{ transform: props.xy.interpolate(trans4) }}
      >
        <div className={classes.textWrapper}>
          <Typography
            variant="h1"
            className={`${classes.text} ${classes.title}`}
          >
            Welcome
          </Typography>
          <Typography variant="h2" gutterBottom className={classes.typewriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .typeString("Nice to see you around!")
                  .pauseFor(1000)
                  .deleteChars(25)
                  .typeString("I am a Graphic Designer")
                  .pauseFor(1000)
                  .deleteChars(16)
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteChars(15)
                  .typeString("Alessio Petrin")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </Typography>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Know more about me
          </Button>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;
