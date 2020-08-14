import React, { Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const Styleguide = () => {
  return (
    <Fragment>
      {/* Typography */}
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>

      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>

      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>

      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>

      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>

      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>

      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>

      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>

      {/* Buttons */}
      <Button variant="contained" color="primary">
        Primary Button
      </Button>

      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>

      <Button variant="contained" color="tertiary">
        Tertiary Button
      </Button>

      {/* Alerts */}
      <Alert severity="error">This is an error alert — check it out!</Alert>

      <Alert severity="warning">This is a warning alert — check it out!</Alert>

      <Alert severity="info">This is an info alert — check it out!</Alert>

      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Fragment>
  );
};

export default Styleguide;