import React from "react";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "absolute",
    top: 0,
    width: "80px",
    height: "100%",
    zIndex: 1,
    opacity: 0.5,
    transition: theme.transitions.create(["opacity"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "&.slick-prev": {
      left: 0,
      backgroundImage:
        "linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%)",
      "&:hover": {
        opacity: 0.9,
      },
      "& $arrowIcon": {
        left: theme.spacing(3),
      },
    },
    "&.slick-next": {
      right: 0,
      backgroundImage:
        "linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)",
      "&:hover": {
        opacity: 0.9,
      },
      "& $arrowIcon": {
        right: theme.spacing(3),
      },
    },
  },
  arrowIcon: {
    position: "absolute",
    top: "50%",
    display: "block",
    width: "20px",
    height: "20px",
    fill: theme.palette.common.white,
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
}));

const SlideArrow = (props) => {
  const classes = useStyles();
  const { className, style, onClick } = props;

  return (
    <div
      className={`${classes.root} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {className === "slick-arrow slick-prev" ? (
        <ArrowBackIosRoundedIcon className={classes.arrowIcon} />
      ) : (
        <ArrowForwardIosRoundedIcon className={classes.arrowIcon} />
      )}
    </div>
  );
};

export default SlideArrow;
