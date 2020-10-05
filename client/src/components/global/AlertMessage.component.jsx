import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const AlertMessage = ({ isActive, severity, message, addContactInfo }) => {
  const classes = useStyles();

  return (
    <div className={`error${isActive ? " active" : ""}`}>
      <Alert severity={severity} className={classes.fullWidth}>
        {message}
        {addContactInfo && (
          <Fragment>
            {" "}
            Please try later or drop me a call at{" "}
            <a href="tel:+447380404540" className={classes.link}>
              07380 404 540
            </a>
          </Fragment>
        )}
      </Alert>
    </div>
  );
};

export default AlertMessage;
