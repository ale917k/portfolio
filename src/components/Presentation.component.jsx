import React from "react";

import Typewriter from "typewriter-effect";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    width: "100vw",
    height: "100vh",
    "&:before": {
      content: '""',
      width: 0,
      height: 0,
      position: "absolute",
      left: 0,
      bottom: 0,
      borderBottom: `${theme.spacing(7)}px solid ${theme.palette.common.white}`,
      borderRight: "50vw solid transparent",
    },
    "&:after": {
      content: '""',
      width: 0,
      height: 0,
      position: "absolute",
      right: 0,
      bottom: 0,
      borderBottom: `${theme.spacing(7)}px solid ${theme.palette.common.white}`,
      borderLeft: "50vw solid transparent",
    },
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
  typewriter: {
    "& > *": {
      display: "inline-block",
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

const Presentation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.text}>
          <Typography variant="h1" gutterBottom>
            Hi!
          </Typography>

          <Typography variant="h3" gutterBottom className={classes.typewriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a Graphic Designer")
                  .pauseFor(2000)
                  .deleteChars(16)
                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteChars(13)
                  .typeString("Dreamer")
                  .pauseFor(2000)
                  .deleteChars(9)
                  .typeString("Alessio Petrin")
                  .pauseFor(6000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </Typography>
        </div>

        <img
          className={classes.img}
          src={require("../assets/me.png")}
          alt="Myself"
        />
      </Container>
    </div>
  );
};

export default Presentation;
