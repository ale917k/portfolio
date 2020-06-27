import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AutumnAnimation from "../components/AutumnAnimation.component";
import ContactForm from "../components/ContactForm.component";

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: "100vh",
    overflow: "hidden",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AutumnAnimation />
      <ContactForm />
    </div>
  );
};

export default Contact;
