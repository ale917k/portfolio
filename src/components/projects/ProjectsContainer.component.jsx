import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import ProjectsList from "./ProjectsList.component";
import ProjectsSlide from "./ProjectsSlide.component";

import PROJECTS from "../../js/PROJECTS";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: `${theme.spacing(3) + 60}px`,
    height: "100%",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const ProjectsContainer = () => {
  const classes = useStyles();

  const [activeProject, setActiveProject] = useState(PROJECTS.mealner);

  const updateActiveProject = (projectKey) => {
    const selectedProject = Object.keys(PROJECTS)
      .filter((key) => key === projectKey)
      .reduce((obj, key) => {
        return (obj[key] = PROJECTS[key]);
      }, {});

    setActiveProject(selectedProject);
    console.log(activeProject);
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <ProjectsList
          projects={PROJECTS}
          activeProject={activeProject}
          updateActiveProject={updateActiveProject}
        />
        <ProjectsSlide imgPreview={activeProject.imgPreview} />
      </Box>
    </Container>
  );
};

export default ProjectsContainer;
