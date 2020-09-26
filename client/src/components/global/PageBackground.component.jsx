import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const PageBackground = ({ img }) => {
  const useStyles = makeStyles(() => ({
    pageBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      background: `url(${require(`../../assets/page-background/${img}.jpg`)}) no-repeat center`,
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();

  return <Box className={classes.pageBackground} />;
};

export default PageBackground;
