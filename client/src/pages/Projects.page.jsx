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
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      overflowY: "auto",
    },
  },
  projectsContainer: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: `${theme.spacing(16)}px 0 ${theme.spacing(6)}px`,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      height: "fit-content",
    },
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
      <Container>
        <Box className={classes.projectsContainer}>
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
