import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import useIsFirstMount from "../../js/useIsFirstMount";

const Menu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFirstMount = useIsFirstMount();

  const useStyles = makeStyles((theme) => ({
    menu: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 60,
      margin: 0,
      zIndex: theme.zIndex.drawer,
    },
    navLinks: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        clipPath: "circle(100px at 100% -20%)",
        WebkitClipPath: "circle(100px at 100% -20%)",
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      "& > a": {
        pointerEvents: "all",
        color:
          location.pathname === "/projects"
            ? theme.palette.common.black
            : theme.palette.common.white,
        marginRight: theme.spacing(2),
        "&:last-of-type": {
          marginRight: 0,
        },
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
    },
    contactButton: {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    mobileMenu: {
      position: "relative",
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      width: "80px",
      height: "80px",
      cursor: "pointer",
      pointerEvents: "all",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    mobileMenuOpen: {
      [theme.breakpoints.down("xs")]: {
        clipPath: "circle(1500px at 100% -20%)",
        WebkitClipPath: "circle(1500px at 100% -20%)",
        "& > a": {
          display: "block",
          maxWidth: "200px",
          textAlign: "center",
          margin: `0 0 ${theme.spacing(4)}px 0`,
          fontSize: theme.typography.h4.fontSize,
        },
      },
    },
    mobileMenuClose: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: theme.palette.primary.main,
    },
    menuBurger: {
      width: "40px",
      height: "4px",
      background: theme.palette.common.white,
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(255, 101, 47, .2)",
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        width: "50px",
        height: "4px",
        background: theme.palette.common.white,
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(255, 101, 47, .2)",
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      "&:before": {
        transform: "translateY(-16px)",
      },
      "&:after": {
        transform: "translateY(16px)",
      },
    },
    menuBurgerOpen: {
      background: "transparent",
      boxShadow: "none",
      "&:before": {
        transform: "rotate(45deg)",
      },
      "&:after": {
        transform: "rotate(-45deg)",
      },
    },
  }));

  const classes = useStyles();

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    !isFirstMount &&
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 1000);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className={classes.menu}>
      <div
        className={clsx(classes.navLinks, {
          [classes.mobileMenuOpen]: isMenuOpen,
        })}
      >
        <Button component={RouterLink} to="/about">
          ABOUT
        </Button>
        <Button component={RouterLink} to="/projects">
          PROJECTS
        </Button>
        <Button
          component={RouterLink}
          variant="contained"
          to="/contact"
          className={classes.contactButton}
        >
          CONTACT
        </Button>
      </div>
      <div className={classes.mobileMenu} onClick={() => toggleMobileMenu()}>
        <div
          className={clsx(classes.menuBurger, {
            [classes.menuBurgerOpen]: isMenuOpen,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
