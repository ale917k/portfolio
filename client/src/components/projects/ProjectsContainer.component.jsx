import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import ProjectsList from "./ProjectsList.component";
import ProjectsSlider from "./ProjectsSlider.component";

import PROJECTS from "../../js/PROJECTS";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    position: "absolute",
    top: `${theme.spacing(3) + 60}px`,
    height: "100%",
  },
  container: {
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
  };

  return (
    <Container className={classes.projectsContainer}>
      <Box className={classes.container}>
        <ProjectsList
          projects={PROJECTS}
          activeProject={activeProject}
          updateActiveProject={updateActiveProject}
        />
        <ProjectsSlider imgPreview={activeProject.imgPreview} />
      </Box>
    </Container>
  );
};

export default ProjectsContainer;
