import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import ProjectsList from "../components/projects/ProjectsList.component";
import ProjectsSlider from "../components/projects/ProjectsSlider.component";

import PROJECTS from "../js/PROJECTS";

const useStyles = makeStyles((theme) => ({
  projectsPage: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.common.white,
    overflow: "hidden",
  },
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

const Projects = () => {
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
    <Box className={classes.projectsPage}>
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
    </Box>
  );
};

export default Projects;
