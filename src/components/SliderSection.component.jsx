import React from "react";
import Slider from "react-slick";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderItem from "./SliderItem.component";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(10)}px 0`,
  },
}));

const SliderSection = () => {
  const classes = useStyles();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  
  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <Slider {...settings} className={classes.slider}>
          <SliderItem title="1" />
          <SliderItem title="2" />
          <SliderItem title="3" />
          <SliderItem title="4" />
          <SliderItem title="5" />
          <SliderItem title="6" />
          <SliderItem title="7" />
          <SliderItem title="8" />
        </Slider>
      </Box>
    </Container>
  );
};

export default SliderSection;
