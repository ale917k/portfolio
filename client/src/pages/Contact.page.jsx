import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ContactForm from "../components/contact/ContactForm.component";
import CssAnimatedBackground from "../components/global/CssAnimatedBackground.component";

const useStyles = makeStyles((theme) => ({
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
      <CssAnimatedBackground />
    </div>
  );
};

export default Contact;
