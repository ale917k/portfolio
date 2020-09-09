import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import SkillBox from "./SkillBox.component";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    lineHeight: `${theme.spacing(3)}px`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gridGap: `${theme.spacing(3)}px`,
    marginBottom: theme.spacing(3),
  },
}));

const SkillsSection = ({ title, subtitle, skills }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {subtitle}
      </Typography>
      <Box className={classes.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillBox key={`skill-${index}`} {...skill} />
        ))}
      </Box>
    </Fragment>
  );
};

export default SkillsSection;
