import React from "react";

import Slider from "react-slick";
import SliderItem from "../global/SliderItem.component";

import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as ArrowSvg } from "../../assets/arrow.svg";

const useStyles = makeStyles(() => ({
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
        background: `#fff url(${require("../../assets/projects/ajax-loader.gif")}) center center no-repeat`,
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
      transform: "translate(0, -50%)",
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
    },
    "& .slick-next": {
      right: "25px",
    },
    // Dots
    "& .slick-dotted.slick-slider": {
      marginBottom: "30px",
    },
    "& .slick-dots": {
      position: "absolute",
      bottom: "-25px",
      display: "block",
      width: "100%",
      padding: 0,
      margin: 0,
      listStyle: "none",
      textAlign: "center",
      "& li": {
        position: "relative",
        display: "inline-block",
        width: "20px",
        height: "20px",
        margin: "0 5px",
        padding: 0,
        cursor: "pointer",
        "& button": {
          fontSize: 0,
          lineHeight: 0,
          display: "block",
          width: "20px",
          height: "20px",
          padding: "5px",
          cursor: "pointer",
          color: "transparent",
          border: 0,
          outline: "none",
          background: "transparent",
          "&:hover, &:focus": {
            outline: "none",
            "&:before": {
              opacity: 1,
            },
          },
          "&:before": {
            fontSize: "6px",
            lineHeight: "20px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "20px",
            height: "20px",
            content: "•",
            textAlign: "center",
            opacity: 0.25,
            color: "black",
          },
        },
        "&.slick-active button:before": {
          opacity: 0.75,
          color: "black",
        },
      },
    },
  },
}));

const ProjectsSlide = ({ imgPreview }) => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowSvg />,
    prevArrow: <ArrowSvg />,
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
