import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "255px",
    borderRadius: theme.spacing(0.5),
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
    transformStyle: "preserve-3d",
    perspective: "1000px",
    backgroundColor: "#ffffff",
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
      borderColor: theme.palette.common.black,
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
      background: theme.palette.primary.main,
      marginLeft: "-10px",
    },
  },
  strapLine: {
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
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  icon: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "0 auto",
    paddingBottom: theme.spacing(3),
  },
  link: {
    display: "block",
    width: "fit-content",
    margin: "0 auto",
  },
}));

const SkillBox = ({ title, strapLine, svgName, description, link }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={`${classes.content} ${classes.front}`}>
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
      <Box className={`${classes.content} ${classes.back}`}>
        <Box className={classes.innerContainer}>
          <Box className={classes.inner}>
            <Box className={classes.icon}>
              <img
                src={require(`../../assets/skills/${svgName}.svg`)}
                alt={svgName}
              />
            </Box>
            <Typography variant="body2" gutterBottom>
              {description}
              <Link
                className={classes.link}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
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
