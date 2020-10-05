import React, { useEffect } from "react";
import ReactGA from "react-ga";

import { makeStyles } from "@material-ui/core/styles";

import ContactForm from "../components/contact/ContactForm.component";
import PageBackground from "../components/global/PageBackground.component";
import Papers3dBackground from "../components/contact/Papers3dBackground.component";

const useStyles = makeStyles(() => ({
  contactPage: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    height: "100vh",
    overflowY: "auto",
  },
}));

const Contact = () => {
  const classes = useStyles();

  const initializeReactGA = () => {
    ReactGA.pageview("/contact");
  };

  useEffect(() => {
    initializeReactGA();
  });

  return (
    <div className={classes.contactPage}>
      <PageBackground img="contact-background" />
      <Papers3dBackground />
      <ContactForm />
    </div>
  );
};

export default Contact;
