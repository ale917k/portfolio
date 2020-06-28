import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: theme.spacing(10),
  },
  title: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    margin: `0 ${theme.spacing(1)}px`,
    lineHeight: `${theme.spacing(10)}px`,
    width: "100%",
    textAlign: "center",
  },
}));

const SliderSection = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default SliderSection;
