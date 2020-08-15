import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
  },
  li: {
    listStyle: "none",
  },
  title: {},
  description: {
    display: "none",
    "&.active": {
      display: "block",
    },
  },
}));

const ProjectsList = ({ projects, activeProject, updateActiveProject }) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {Object.entries(projects).map((project) => (
        <li
          key={project[0]}
          className={classes.li}
          onMouseEnter={() => updateActiveProject(project[0])}
        >
          <Typography variant="h2">{`${project[1].development} - ${project[1].title}`}</Typography>
          <Typography
            variant="body1"
            className={`${classes.description} ${
              activeProject.title === project[1].title ? "active" : ""
            }`}
          >
            {project[1].description}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
