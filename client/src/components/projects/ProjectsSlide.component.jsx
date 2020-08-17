import React from "react";

import Slider from "react-slick";
import SliderItem from "../global/SliderItem.component";

import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as ArrowSvg } from "../../assets/arrow.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "block",
    width: "50%",
    boxSizing: "border-box",
    userSelect: "none",
    touchAction: "pan-y",
    // Main slick list
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
    // When slider is loaded
    "&.slick-initialized": {
      "& .slick-slide": {
        display: "block",
      },
    },
    // When slider is loading
    "&.slick-loading": {
      "& .slick-track, & .slick-slide": {
        visibility: "hidden",
      },
      "& .slick-list": {
        background: `${
          theme.palette.common.white
        } url(${require("../../assets/projects/ajax-loader.gif")}) center center no-repeat`,
      },
    },
    // Each single Slider Element
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
    // Arrows
    "& .slick-arrow": {
      "&.slick-hidden": {
        display: "none",
      },
    },
    "& .slick-prev, & .slick-next": {
      position: "absolute",
      top: "50%",
      display: "block",
      width: "20px",
      height: "20px",
      zIndex: 1,
      "&:hover, &:focus": {
        "&:before": {
          opacity: 1,
        },
      },
      "&:before": {
        content: '""',
        opacity: 0.25,
      },
    },
    "& .slick-prev": {
      left: "25px",
      transform: "translateY(-50%) rotate(-90deg)",
    },
    "& .slick-next": {
      right: "25px",
      transform: "translateY(-50%) rotate(90deg)",
    },
  },
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowSvg className={className} style={{ ...style }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowSvg className={className} style={{ ...style }} onClick={onClick} />
  );
}

const ProjectsSlide = ({ imgPreview }) => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={classes.root}>
      {imgPreview.map((path) => (
        <SliderItem key={path} imagePath={path} />
      ))}
    </Slider>
  );
};

export default ProjectsSlide;
