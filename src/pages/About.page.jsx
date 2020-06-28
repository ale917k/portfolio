import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Presentation from "../components/Presentation.component";
import SliderSection from "../components/SliderSection.component";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3) + 60,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Presentation />

      <Container className={classes.root}>
        <SliderSection />
      </Container>
    </Fragment>
  );
};

export default About;
