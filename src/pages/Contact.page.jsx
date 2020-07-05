import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AutumnAnimation from "../components/contact/AutumnAnimation.component";
import ContactForm from "../components/contact/ContactForm.component";

const useStyles = makeStyles((theme) => ({
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
