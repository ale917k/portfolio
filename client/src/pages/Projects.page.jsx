import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import ProjectsList from "../components/projects/ProjectsList.component";
import ProjectsSlider from "../components/projects/ProjectsSlider.component";
import PageBackground from "../components/global/PageBackground.component";
import CssAnimatedBackground from "../components/global/CssAnimatedBackground.component";

import PROJECTS from "../js/PROJECTS";

const useStyles = makeStyles((theme) => ({
  projectsPage: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    overflowY: "auto",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: `${theme.spacing(16)}px 0 ${theme.spacing(6)}px`,
    width: "100%",
    maxWidth: "min(1920px, 90vw)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      height: "fit-content",
    },
  },
  embeddedWebsite: {
    position: "relative",
    display: "block",
    width: "90%",
    borderRadius: theme.spacing(0.5),
    overflow: "hidden",

    "& iframe": {
      border: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    },

    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  aspectRatio: {
    width: "100%",
    height: 0,
    paddingBottom: "56.25%",
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
      <PageBackground img="projects-background" />
      <CssAnimatedBackground />

      <Box className={classes.projectsContainer}>
        <ProjectsList
          projects={PROJECTS}
          activeProject={activeProject}
          updateActiveProject={updateActiveProject}
        />

        {activeProject.app ? (
          <div className={classes.embeddedWebsite}>
            <div className={classes.aspectRatio}>
              <iframe title={activeProject.title} src={activeProject.app} />
            </div>
          </div>
        ) : (
          <ProjectsSlider imgPreview={activeProject.imgPreview} />
        )}
      </Box>
    </Box>
  );
};

export default Projects;
