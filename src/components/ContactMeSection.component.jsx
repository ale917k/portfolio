import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { expandCursor, shrinkCursor } from "../js/cursor.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
    textAlign: "center",
    position: "relative",
  },
  subTitle: {
    lineHeight: `${theme.spacing(3)}px`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  copyright: {
    position: "relative",
    top: theme.spacing(14),
    textAlign: "center",
  },
}));

const ContactMeSection = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.title}>
          What Can I Build For You?
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          I'm ready to dig deep into my arsenal of skills and techniques to help
          you achieve your goals. Send me a line to get me on board
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          onMouseOver={expandCursor}
          onMouseOut={shrinkCursor}
        >
          Reach Out
        </Button>
        <Typography variant="subtitle2" className={classes.copyright}>
          Alessio Petrin @{year}
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactMeSection;
