import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import SkillBox from "./SkillBox.component";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(125deg, rgb(236, 252, 255) 0%, rgb(236, 252, 255) 40%, rgb(178, 252, 255) calc(40% + 1px), rgb(178, 252, 255) 60%, rgb(94, 223, 255) calc(60% + 1px), rgb(94, 223, 255) 72%, rgb(62, 100, 255) calc(72% + 1px), rgb(62, 100, 255) 100%)",
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
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
  },
}));

const SkillsSection = ({ title, subtitle, skills }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {subtitle}
        </Typography>
        <Box className={classes.skillsContainer}>
          {skills.map((skill, index) => (
            <SkillBox key={`skill-${index}`} {...skill} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
