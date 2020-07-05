import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
  },
}));

const ErrorMessage = ({ error, message }) => {
  const classes = useStyles();

  return (
    <div className={`error${error ? " active" : ""}`}>
      <Alert severity="error" className={classes.fullWidth}>
        {message}
      </Alert>
    </div>
  );
};

export default ErrorMessage;
