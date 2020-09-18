import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cssAnimatedBackground: {
    background: "linear-gradient(135deg, #148BEF, #A90074)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
  },
  ul: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  li: {
    position: "absolute",
    display: "block",
    listStyle: "none",
    width: "25px",
    height: "25px",
    bottom: "-150px",
    background: "rgba(255, 255, 255, .2)",
    borderRadius: theme.spacing(0.5),
    animation: "$animate 20s linear infinite",
  },
  "@keyframes animate": {
    "0%": {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-800px) rotate(360deg)",
    },
  },
}));

const CssAnimatedBackground = () => {
  const classes = useStyles();

  const animatedBoxes = [
    {
      id: 1,
      left: "86%",
      width: "80px",
      height: "80px",
      animationDelay: "0s",
    },
    {
      id: 2,
      left: "12%",
      width: "30px",
      height: "30px",
      animationDelay: "1.5s",
      animationDuration: "10s",
    },
    {
      id: 3,
      left: "70%",
      width: "100px",
      height: "100px",
      animationDelay: "5.5s",
    },
    {
      id: 4,
      left: "42%",
      width: "150px",
      height: "150px",
      animationDelay: "0s",
      animationDuration: "15s",
    },
    {
      id: 5,
      left: "65%",
      width: "40px",
      height: "40px",
      animationDelay: "0s",
    },
    {
      id: 6,
      left: "15%",
      width: "110px",
      height: "110px",
      animationDelay: "3.5s",
    },
  ];

  return (
    <div className={classes.cssAnimatedBackground}>
      <ul className={classes.ul}>
        {animatedBoxes.map((box) => (
          <li
            key={box.id}
            className={classes.li}
            style={{
              left: box.left,
              width: box.width,
              height: box.height,
              animationDelay: box.animationDelay,
              animationDuration: box.animationDuration && box.animationDuration,
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CssAnimatedBackground;
