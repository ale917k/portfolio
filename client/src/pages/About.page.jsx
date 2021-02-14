import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import PageBackground from "../components/global/PageBackground.component";
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
    alignItems: "center",
    height: "100%",
    paddingTop: theme.spacing(16),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textLinkContainer: {
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    height: "75%",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
  gutterBottom2: {
    marginBottom: "0.7em",
  },
  links: {
    marginTop: theme.spacing(4),
    "& > a": {
      marginRight: theme.spacing(2),
      borderColor: "rgba(255, 255, 255, 0.23)",
      color: "rgba(255, 255, 255, 0.87)",
    },
  },
  img: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
    },
  },
  italicStyle: {
    fontStyle: "italic",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage}>
      <PageBackground img="about-background" />
      <CssAnimatedBackground />

      <Container className={classes.container}>
        <div className={classes.textLinkContainer}>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom>
              ABOUT ME
            </Typography>

            <Typography variant="body1" className={classes.gutterBottom2}>
              Born in Padua (Italy) in 1997, I graduated from I.T.I. Francesco
              Severi with a diploma in Information Technology and
              Telecommunications. After graduation in 2017, I moved to Oxford to
              refine the language while working as Chef de Partie. I'm now a
              Software Developer fallen in love with coding, crafting hand-made
              websites through cutting-edge technologies.
            </Typography>
            <Typography variant="body1" className={classes.gutterBottom2}>
              Located in London, I'm currently open to onboard new projects. Do
              you have something in mind? Whether it be a Desktop or Mobile App,
              or both, I'm really excited to be part of your idea!
            </Typography>
            <Typography variant="body2" className={classes.italicStyle}>
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
          </div>
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

export default About;
