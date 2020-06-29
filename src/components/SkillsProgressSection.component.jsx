import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProgressChart from "./ProgressChart.component";

import SKILL_PROGRESS from "../js/SKILLS_PROGRESS";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    textAlign: "center",
  },
  subTitle: {
    lineHeight: `${theme.spacing(3)}px`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const SkillsProgressSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.heading}>
        <Typography variant="h2">Skills In Progress</Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          When we talk about development, there is always something to learn.
          Technologies are getting old or deprecated every couple of years, to
          give space to new faster and lighter technologies. This is what I'm
          keeping myself busy with.
        </Typography>
      </Box>
      <Box className={classes.skillsContainer}>
        {SKILL_PROGRESS.map((skill) => (
          <ProgressChart {...skill} />
        ))}
      </Box>
    </Container>
  );
};

export default SkillsProgressSection;
