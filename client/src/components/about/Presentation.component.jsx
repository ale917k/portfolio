import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    width: "100vw",
    height: "100vh",
    "&:before": {
      content: '""',
      width: 0,
      height: 0,
      position: "absolute",
      left: 0,
      bottom: 0,
      borderBottom: `${theme.spacing(7)}px solid ${theme.palette.common.white}`,
      borderRight: "50vw solid transparent",
    },
    "&:after": {
      content: '""',
      width: 0,
      height: 0,
      position: "absolute",
      right: 0,
      bottom: 0,
      borderBottom: `${theme.spacing(7)}px solid ${theme.palette.common.white}`,
      borderLeft: "50vw solid transparent",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  text: {
    color: theme.palette.common.white,
  },
  img: {
    height: "fit-content",
    position: "relative",
    maxWidth: "450px",
    width: "40%",
    marginTop: "auto",
  },
}));

const Presentation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.text}>
          <Typography variant="h1" gutterBottom>
            Hi! Go to
            <Link component={RouterLink} to="/skills">
              Skills
            </Link>
          </Typography>

          <Typography variant="h3" gutterBottom className={classes.typewriter}>
            Lorem ipsum dolor sit amet
          </Typography>
        </div>

        <img
          className={classes.img}
          src={require("../../assets/me.png")}
          alt="Myself"
        />
      </Container>
    </div>
  );
};

export default Presentation;
