import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { expandCursor, shrinkCursor } from "../js/cursor.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    width: "340px",
    height: "255px",
    color: theme.palette.common.white,
    transformStyle: "preserve-3d",
    perspective: "1000px",
    backfaceVisibility: "hidden",
    transition: "0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "& > *": {
      backfaceVisibility: "hidden",
      transition: "0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    "&:hover $front": {
      transform: "rotateY(-180deg)",
    },
    "&:hover $back": {
      transform: "rotateY(0deg)",
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100%",
    background: theme.palette.common.black,
    transformStyle: "preserve-3d",
    perspective: "1000px",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      width: "50px",
      height: "120px",
      borderColor: theme.palette.common.white,
      opacity: ".4",
      zIndex: 10,
    },
    "&:before": {
      top: "20px",
      left: "20px",
      borderLeft: "1px solid",
      borderTop: "1px solid",
    },
    "&:after": {
      bottom: "20px",
      right: "20px",
      borderRight: "1px solid",
      borderBottom: "1px solid",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: theme.palette.common.black,
    opacity: ".4",
    zIndex: 3,
  },
  inner: {
    position: "relative",
    textAlign: "center",
    padding: "0 20px",
    zIndex: 2,
    transformStyle: "preserve-3d",
    perspective: "1000px",
    backfaceVisibility: "hidden",
    transform: "translateZ(95px) scale(0.71)",
  },
  front: {},
  title: {
    position: "relative",
    fontSize: "22px",
    fontWeight: 800,
    margin: 0,
    paddingBottom: "20px",

    "&:before": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: "10px",
      width: "20px",
      height: "2px",
      background: "#00bcd4",
      marginLeft: "-10px",
    },
  },
  strapLine: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "10px",
    letterSpacing: "2px",
  },
  back: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    transform: "rotateY(180deg)",
  },
  icon: {
    maxWidth: "120px",
    margin: "0 auto",
    paddingBottom: "20px",
  },
  link: {
    display: "block",
  },
}));

const SkillBox = ({ title, strapLine, svgName, description, link }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        className={`${classes.content} ${classes.front}`}
        style={{
          backgroundImage: `url(${require("../assets/redSmoke.png")})`,
        }}
      >
        <Box className={classes.innerContainer}>
          <Box className={classes.overlay} />
          <Box className={classes.inner}>
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.strapLine}
            >
              {strapLine}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className={`${classes.content} ${classes.back}`}
        style={{
          backgroundImage: `url(${require("../assets/blueSmoke.png")})`,
        }}
      >
        <Box className={classes.innerContainer}>
          <Box className={classes.inner}>
            <Box className={classes.icon}>
              <img src={require(`../assets/${svgName}.svg`)} alt={svgName} />
            </Box>
            <Typography variant="body2" gutterBottom>
              {description}
              <Link
                className={classes.link}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={expandCursor}
                onMouseOut={shrinkCursor}
              >
                Read more
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillBox;
