import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ContactForm from "../components/contact/ContactForm.component";
import Papers3dBackground from "../components/contact/Papers3dBackground.component";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ContactForm />
      <Papers3dBackground />
    </div>
  );
};

export default Contact;
