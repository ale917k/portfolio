import React, { useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { expandCursor, shrinkCursor } from "../../js/cursor.actions";

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* Inner Text */}
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      {/* Active Semi-Circle */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Outer Semi-Circle */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* Conjunction Line */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      {/* Conjunction Line Bullet */}
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      {/* Main Outer Text */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {payload.name}
      </text>
      {/* Secondary Outer Text */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {payload.type}
      </text>
    </g>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    paddingTop: theme.spacing(3),
    zIndex: 1,
    "& a": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
}));

const ProgressChart = ({ tech, valueAT, valueMT, valueAP, valueMP, link }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: "Acquired", type: "Theory", value: valueAT },
    { name: "Missing", type: "Theory", value: valueMT },
    { name: "Acquired", type: "Practice", value: valueAP },
    { name: "Missing", type: "Practice", value: valueMP },
  ];

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          onMouseOver={expandCursor}
          onMouseOut={shrinkCursor}
        >
          {tech}
        </Link>
      </Typography>
      <PieChart width={400} height={400} className={classes.graph}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          startAngle={270}
          endAngle={-360}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </Box>
  );
};

export default ProgressChart;
