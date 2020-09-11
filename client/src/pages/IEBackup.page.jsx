import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ieBackupPage: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${require("../assets/galaxyIE.svg")})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    color: theme.palette.primary.dark,
    overflowY: "auto",
  },
  container: {
    height: "100vh",
  },
  box: {
    width: "60%",
    height: "100%",
    paddingTop: "20vh",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10vh",
    },
  },
  cardsContainer: {
    display: "flex",
    margin: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  card: {
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    color: theme.palette.primary.dark,
    "&:first-of-type": {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      "&:first-of-type": {
        marginRight: 0,
        marginBottom: theme.spacing(2),
      },
    },
  },
  cardTitle: {
    paddingBottom: theme.spacing(1),
  },
}));

const IEBackup = () => {
  const classes = useStyles();

  return (
    <div className={classes.ieBackupPage}>
      <Container className={classes.container}>
        <Box className={classes.box}>
          <Typography variant="h1">Houston, we got a problem!</Typography>
          <Typography variant="h2">
            Someone appers to be still using Internet Explorer..
          </Typography>
          <Typography variant="body1">Are you a:</Typography>
          <Box className={classes.cardsContainer}>
            <Card className={classes.card}>
              <Typography variant="h5" className={classes.cardTitle}>
                Developer checking out my work?
              </Typography>
              <Typography variant="body2">
                If so, you may want to know I stopped developing for IE since
                Microsoft stopped supporting it, as that causes well-known
                limitations on modern technologies -&nbsp;
                <Link
                  href="https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  see this article
                </Link>
                &nbsp;to know more about it
              </Typography>
            </Card>
            <Card className={classes.card}>
              <Typography variant="h5" className={classes.cardTitle}>
                Just a normal person using ie?
              </Typography>
              <Typography variant="body2">
                I find hard to believe it, but if you are that exception,
                please, take in consideration more powerful and modern browser
                which will enhance your web experience. Have a look at: &nbsp;
                <Link
                  href="https://www.google.com/intl/en_uk/chrome/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chrome
                </Link>
                &nbsp;•&nbsp;
                <Link
                  href="https://www.microsoft.com/en-us/edge"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Edge
                </Link>
                &nbsp;•&nbsp;
                <Link
                  href="https://www.apple.com/uk/safari/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Safari
                </Link>
              </Typography>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default IEBackup;
