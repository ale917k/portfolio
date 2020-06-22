import React from "react";
import Tilt from "react-tilt";

import { expandCursor, shrinkCursor } from "../Cursor/cursor.actions";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "AvenirNextLTPro-Demi",
    fontSize: 18,
    color: theme.palette.common.white,
    width: 60,
    height: 60,
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: "50%",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <div onMouseOver={expandCursor} onMouseOut={shrinkCursor}>
      <Tilt className={`Tilt ${classes.root}`} options={{ max: 60 }}>
        AP
      </Tilt>
    </div>
  );
};

export default Logo;
