import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const SliderSection = ({ imagePath }) => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      width: "600px",
      paddingTop: "56.25%", // 16:9 Aspect Ratio
      backgroundImage: `url(${
        imagePath.path
          ? require(`../../assets/${imagePath.path}.png`)
          : require(`../../assets/no-image-white.png`)
      })`,
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();
  
  return <Box className={classes.root}></Box>;
};

export default SliderSection;
