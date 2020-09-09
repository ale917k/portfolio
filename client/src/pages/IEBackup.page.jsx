import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ieBackupPage: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${require("../assets/galaxyIE.svg")})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  container: {},
  text: {},
  title: {},
  subtitle: {},
  link: {},
}));

const IEBackup = () => {
  const classes = useStyles();

  return (
    <div className={classes.ieBackupPage}>
      <Container className={classes.container}>
        <Typography variant="h1" className={`${classes.text} ${classes.title}`}>
          Houston, we got a problem!
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.text} ${classes.subtitle}`}
        >
          Someone appers to be still using Internet Explorer..
        </Typography>
        <Typography variant="h6">Are you a:</Typography>
        <Typography variant="h6">
          Developer checking my work? - Then you may want to know I'm not a fun
          for supporting IE any longer. I'm afraid this browser is no longer
          capable of being up to date with modern trends -&nbsp;
          <Link
            className={classes.link}
            href="https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution"
            rel="noopener noreferrer"
            target="_blank"
          >
            see this article
          </Link>
          &nbsp;to know more about it
        </Typography>
      </Container>
    </div>
  );
};

export default IEBackup;
