import React from "react";
import Slider from "react-slick";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3) + 60,
  },
  box: {
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(16)}px`,
  },
}));

const SliderSection = () => {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Box>
    </Container>
  );
};

export default SliderSection;
