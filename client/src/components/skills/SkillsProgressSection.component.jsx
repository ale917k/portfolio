import React, { Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import ProgressChart from "./ProgressChart.component";

import SKILL_PROGRESS from "../../js/SKILLS_PROGRESS";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
    lineHeight: `${theme.spacing(3)}px`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    overflow: "hidden",
  },
}));

const SkillsProgressSection = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.heading}>
        <Typography variant="h2" className={classes.title}>
          Skills In Progress
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          When we talk about development, there is always something to learn.
          Technologies are getting old or deprecated every couple of years, to
          give space to new faster and lighter technologies. This is what I'm
          keeping myself busy with.
        </Typography>
      </Box>
      <Box className={classes.skillsContainer}>
        {SKILL_PROGRESS.map((skill) => (
          <ProgressChart key={skill.tech} {...skill} />
        ))}
      </Box>
    </Fragment>
  );
};

export default SkillsProgressSection;
