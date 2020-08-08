import React from "react";

import Slider from "react-slick";
import SliderItem from "../../global/SliderItem.component";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(10)}px 0`,
    "& .slick-slider": {
      position: "relative",
      display: "block",
      boxSizing: "border-box",
      userSelect: "none",
      touchAction: "pan-y",
      "& .slick-list": {
        position: "relative",
        display: "block",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        "&:focus": {
          outline: "none",
        },
        "&.dragging": {
          cursor: "hand",
          "& img": {
            pointerEvents: "none",
          },
        },
      },
      "& .slick-list, & .slick-track": {
        transform: "translate3d(0, 0, 0)",
      },
      "& .slick-track": {
        position: "relative",
        top: 0,
        left: 0,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        "&:before, &:after": {
          display: "table",
          content: '""',
        },
        "&:after": {
          clear: "both",
        },
      },
      "&.slick-initialized": {
        "& .slick-slide": {
          display: "block",
        },
      },
      "&.slick-loading": {
        "& .slick-track, & .slick-slide": {
          visibility: "hidden",
        },
      },
      "& .slick-slide": {
        display: "none",
        float: "left",
        height: "100%",
        minHeight: "1px",
        "& img": {
          display: "block",
        },
        "&.slick-loading": {
          "& img": {
            display: "none",
          },
        },
      },
    },
    "& .slick-vertical": {
      "& .slick-slide": {
        display: "block",
        height: "auto",
        border: "1px solid transparent",
      },
    },
    "& .slick-arrow": {
      "&.slick-hidden": {
        display: "none",
      },
    },
  },
}));

const Carousel = () => {
  const classes = useStyles();

  const slides = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
  ];

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
      <Box>
        <Slider {...settings}>
          {slides.map((slide) => (
            <SliderItem title={slide.title} />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Carousel;
