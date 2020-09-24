import React, { useState, useCallback } from "react";
import { renderEmail } from "react-html-email";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import ContactEmail from "./ContactEmail.component";
import AlertMessage from "../global/AlertMessage.component";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    position: "relative",
    alignSelf: "center",
    maxWidth: "400px",
    margin: `${theme.spacing(16)}px auto ${theme.spacing(6)}px`,
    height: "fit-content",
    "& > *": {
      margin: theme.spacing(4),
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const initialFormState = {
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const forceUpdate = useCallback(() => {
    setIsEmailSent(false);
    setError(false);
  }, []);

  const handleChange = (event) => {
    (isEmailSent || error) && forceUpdate();
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const messageHtml = renderEmail(<ContactEmail {...form} />);

    const data = await fetch("/send_email", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        messageHtml,
      }),
    });
    const isEmailSent = await data.json();
    isEmailSent.error ? setError(true) : setIsEmailSent(true);
    setForm(initialFormState);
  };

  return (
    <Container>
      <Card className={classes.contactForm}>
        <Typography variant="h1">How can I help?</Typography>
        <Typography variant="body1">
          Let's shape the future, together.
        </Typography>

        {isEmailSent && (
          <AlertMessage
            isActive={isEmailSent}
            severity="success"
            message="Email sent successfully!"
          />
        )}

        {error && (
          <AlertMessage
            isActive={error}
            severity="error"
            message="Ooops, it seems we have a problem.. Please try again"
          />
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
            fullWidth
            required
            inputProps={{ "aria-label": "Email" }}
          />
          <TextField
            className={classes.textField}
            label="Subject"
            variant="outlined"
            size="small"
            name="subject"
            type="text"
            onChange={handleChange}
            value={form.subject}
            fullWidth
            required
            inputProps={{ "aria-label": "Subject" }}
          />
          <TextField
            className={classes.textField}
            label="Message"
            variant="outlined"
            size="small"
            name="message"
            type="text"
            multiline
            rows={5}
            onChange={handleChange}
            value={form.message}
            fullWidth
            required
            inputProps={{ "aria-label": "Message" }}
          />
          <Typography variant="caption">
            Reply will follow within the next 24h
          </Typography>

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default ContactForm;
