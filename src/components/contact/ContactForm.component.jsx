import React, { useState, useCallback } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import ErrorMessage from "../global/ErrorMessage.component";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: "50%",
    height: "100%",
    transform: "translateX(-50%)",
  },
  form: {
    display: "none",
    position: "absolute",
    top: "50%",
    right: "120px",
    transform: "translateY(-50%)",
    alignSelf: "center",
    maxWidth: "400px",
    margin: "0 auto",
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

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    showPassword: false,
  });
  const [unauthorizedError, setUnauthorizedError] = useState(false);
  const [userExistsError, setUserExistsError] = useState(false);
  const [error, setError] = useState(false);
  const forceUpdate = useCallback(() => {
    setUnauthorizedError(false);
    setUserExistsError(false);
    setError(false);
  }, []);

  const handleChange = (event) => {
    (unauthorizedError || userExistsError || error) && forceUpdate();
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <Container className={classes.root}>
      <Card className={classes.form}>
        <Typography variant="h1">How can I help?</Typography>

        {unauthorizedError && (
          <ErrorMessage
            error={unauthorizedError}
            message="L'email e la password non corrispondono a nessun account. Per favore
          riprova"
          />
        )}

        {userExistsError && (
          <ErrorMessage
            error={userExistsError}
            message="L'email scelta e' gia' registrata"
          />
        )}

        {error && (
          <ErrorMessage
            error={error}
            message="Error: User POST on SignInUp Failed"
          />
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            label="Name"
            variant="outlined"
            size="small"
            name="name"
            type="name"
            onChange={handleChange}
            value={form.name}
            fullWidth
            required
          />
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            type="email"
            onChange={handleChange}
            value={form.username}
            fullWidth
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default ContactForm;
