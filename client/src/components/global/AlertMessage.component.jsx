import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
  },
}));

const AlertMessage = ({ isActive, severity, message }) => {
  const classes = useStyles();

  return (
    <div className={`error${isActive ? " active" : ""}`}>
      <Alert severity={severity} className={classes.fullWidth}>
        {message}
      </Alert>
    </div>
  );
};

export default AlertMessage;
