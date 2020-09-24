import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectsList: {
    width: "40%",
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  li: {
    listStyle: "none",
    "&:hover, &.active": {
      "& > $title": {
        color: theme.palette.primary.main,
        paddingLeft: theme.spacing(4),
        "&:before": {
          borderColor: theme.palette.primary.main,
          width: theme.spacing(3),
        },
      },
    },
    "&.active": {
      "& > $hiddenContent": {
        display: "block",
      },
    },
  },
  title: {
    position: "relative",
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "&:before": {
      content: "''",
      display: "block",
      width: theme.spacing(1),
      borderTop: `1px solid ${theme.palette.common.black}`,
      position: "absolute",
      left: 0,
      top: "50%",
      transition: theme.transitions.create(["all"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  hiddenContent: {
    display: "none",
    paddingLeft: theme.spacing(4),
  },
}));

const ProjectsList = ({ projects, activeProject, updateActiveProject }) => {
  const classes = useStyles();

  return (
    <ul className={classes.projectsList}>
      {Object.entries(projects).map((project) => (
        <li
          key={project[0]}
          className={`${classes.li} ${
            activeProject.title === project[1].title ? "active" : ""
          }`}
          onClick={() => updateActiveProject(project[0])}
        >
          <Typography
            variant="h2"
            className={classes.title}
          >{`${project[1].development} - ${project[1].title}`}</Typography>
          <Box className={classes.hiddenContent}>
            <Typography variant="body1">{project[1].description}</Typography>
            <ul>
              {project[1].techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            {project[1].link && (
              <Link
                href={project[1].link}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Project
              </Link>
            )}
          </Box>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
