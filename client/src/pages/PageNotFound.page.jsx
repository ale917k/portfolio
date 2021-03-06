import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  pageNotFound: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    zIndex: 1,
    height: "50vh",
  },
  text: {
    color: "#1B60A1",
  },
  title: {
    fontWeight: 900,
  },
  layer: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    willChange: "transform",
    width: "110%",
    left: "-50px",
  },
  layer1: {
    height: "110%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: `url(${require("../assets/page-not-found/background.svg")})`,
  },
  layer2: {
    height: "inherit",
    bottom: "-50px",
    backgroundImage: `url(${require("../assets/page-not-found/layer1.svg")})`,
  },
  layer3: {
    height: "inherit",
    bottom: "-50px",
    backgroundImage: `url(${require("../assets/page-not-found/layer2.svg")})`,
  },
  layer4: {
    height: "inherit",
    left: "-100px",
    bottom: "-50px",
    backgroundImage: `url(${require("../assets/page-not-found/layer3.svg")})`,
  },
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;

const PageNotFound = () => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className={classes.pageNotFound}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Container className={classes.container}>
        <Typography variant="h1" className={`${classes.text} ${classes.title}`}>
          Looks like you are lost...
        </Typography>
        <Typography variant="h2" className={classes.text}>
          ...let's go&nbsp;
          <Link component={RouterLink} to="/">
            home
          </Link>
        </Typography>
      </Container>
      <animated.div
        className={`${classes.layer} ${classes.layer1}`}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer2}`}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer3}`}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className={`${classes.layer} ${classes.layer4}`}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
};

export default PageNotFound;
