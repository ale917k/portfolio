import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const SliderItem = ({ imagePath }) => {
  const useStyles = makeStyles(() => ({
    sliderItem: {
      display: "flex",
      width: "100%",
      paddingTop: "56.25%", // 16:9 Aspect Ratio
      backgroundImage: `url(${
        imagePath && imagePath.path
          ? require(`../../assets/${imagePath.path}.png`)
          : require("../../assets/projects/no-image-white.png")
      })`,
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();

  return <Box className={classes.sliderItem}></Box>;
};

export default SliderItem;
