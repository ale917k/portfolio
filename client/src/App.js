import React, { Fragment, useEffect, useRef, lazy, Suspense } from "react";
import ReactGA from "react-ga";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";

import { makeStyles } from "@material-ui/core/styles";

import Cursor from "./components/global/Cursor.component";
import Header from "./components/global/Header.component";

const Home = lazy(() => import("./pages/Home.page"));
const About = lazy(() => import("./pages/About.page"));
const Projects = lazy(() => import("./pages/Projects.page"));
const Contact = lazy(() => import("./pages/Contact.page"));
const Skills = lazy(() => import("./pages/Skills.page"));
const Playground = lazy(() => import("./pages/Playground.page"));
const Styleguide = lazy(() => import("./pages/Styleguide.page"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.page"));
const IEBackup = lazy(() => import("./pages/IEBackup.page"));

// Check if user is on IE
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

const flexRoutes = [
  { path: "/skills", name: "Skills", Component: Skills },
  { path: "/playground", name: "Playground", Component: Playground },
];

const exactRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/styleguide", name: "Styleguide", Component: Styleguide },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "&.page-enter": {
      opacity: 0,
    },
    "&.page-enter-active": {
      opacity: 0,
    },
    "&.page-exit": {
      opacity: 1,
    },
    "&.page-exit-active": {
      opacity: 1,
    },
  },
  pageTransition: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    margin: 0,
    zIndex: theme.zIndex.tooltip,
    listStyle: "none",
    paddingLeft: 0,
    pointerEvents: "none",
    "& li": {
      transform: "scaleY(0)",
      background: theme.palette.common.white,
      width: "20%",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const pageTransition = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  const onEntered = () => {
    setTimeout(() => {
      gsap.to(pageTransition.current.children, {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: 0.1,
        delay: 0.1,
      });
    }, 500);
  };

  const onExit = () => {
    gsap.to(pageTransition.current.children, {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.2,
    });
  };

  const initializeReactGA = () => {
    ReactGA.initialize("UA-179205326-1");
    ReactGA.pageview("/homepage");
  };

  useEffect(() => {
    initializeReactGA();

    if (!isTabletOrMobile) {
      const cursor = document.querySelector(".cursor");
      const bgCursor = document.querySelector(".bg-cursor");

      onmousemove = (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;

        setTimeout(() => {
          bgCursor.style.left = `${e.pageX}px`;
          bgCursor.style.top = `${e.pageY}px`;
        }, 50);
      };

      onmousedown = () => {
        bgCursor.classList.add("expand");
      };

      onmouseup = () => {
        bgCursor.classList.remove("expand");
      };

      onmouseout = () => {
        bgCursor.classList.remove("expand");
      };
    }
  });

  return (
    <Fragment>
      {!isTabletOrMobile && <Cursor />}
      {isIE ? (
        <Suspense fallback={<div></div>}>
          <IEBackup />
        </Suspense>
      ) : (
        <Switch>
          <Route path="/(skills|playground)">
            {flexRoutes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                <Suspense fallback={<div></div>}>
                  <Component />
                </Suspense>
              </Route>
            ))}
          </Route>
          <Route exact path="/(|about|projects|contact|styleguide)">
            <Header />
            <ul className={classes.pageTransition} ref={pageTransition}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            {exactRoutes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={1200}
                    classNames={`${classes.root} page`}
                    onExit={onExit}
                    onEntered={onEntered}
                    unmountOnExit
                  >
                    <Suspense fallback={<div></div>}>
                      <div className={`${classes.root} page`}>
                        <Component />
                      </div>
                    </Suspense>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Route>
          <Suspense fallback={<div></div>}>
            <Route path="*" component={PageNotFound} />
          </Suspense>
        </Switch>
      )}
    </Fragment>
  );
};

export default App;
