import React, { useEffect, useRef } from "react";

import { TimelineMax, Power2, Sine } from "gsap";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  papers3dBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: "auto",
    perspective: "600px",
    zIndex: -1,
  },
  grid: {
    display: "grid",
    width: "35%",
    transformStyle: "preserve-3d",
  },
  cell: {
    position: "relative",
    background: theme.palette.common.white,
    borderRadius: "1px",
    "&:before": {
      paddingTop: "100%",
      content: '""',
      display: "block",
    },
  },
}));

const Papers3dBackgrond = () => {
  const classes = useStyles();
  let gridNum = 15,
    gridSize = [gridNum, gridNum], // number of cells in cols and rows
    cols = gridSize[0],
    rows = gridSize[1],
    gutter = 1, // in px
    container = useRef(null),
    grid = useRef(null);

  const numCells = () => {
    let cells = [];
    for (let i = 0; i < cols * rows; i++) {
      cells.push(<div key={i} className={`cell ${classes.cell}`} />);
    }
    return cells;
  };

  useEffect(() => {
    let masterTl = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 1 });

    container &&
      masterTl
        .to(".cell", {
          duration: 2,
          scale: "random(0.1, 2)",
          opacity: "random(0.3, 1)",
          x: "random(-300,300)",
          y: "random(-300,300)",
          z: "random(-400,400)",
          rotateX: "random(-360, 360, 180)",
          rotateY: "random(-360, 360, 180)",
          repeat: -1,
          repeatDelay: 2,
          repeatRefresh: true,
          ease: Power2.inOut,
          stagger: {
            amount: 1,
            grid: gridSize,
            ease: Sine.inOut,
            from: "center",
          },
        })
        .to(grid, {
          duration: 100,
          rotateX: 2160,
          rotateY: 720,
          ease: "none",
          repeat: -1,
        });
  }, [container, gridSize]);

  return (
    <div className={classes.papers3dBackground} ref={container}>
      <div
        className={classes.grid}
        ref={(el) => (grid = el)}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridGap: `${gutter}px`,
        }}
      >
        {numCells()}
      </div>
    </div>
  );
};

export default Papers3dBackgrond;
