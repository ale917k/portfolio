import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { makeStyles } from "@material-ui/core/styles";

const routes = [
  { path: "/", name: "Home" /*Component: Home*/ },
  { path: "/about", name: "About" /*Component: About*/ },
  { path: "/projects", name: "Projects" /*Component: Projects*/ },
  { path: "/contact", name: "Contact" /*Component: Contact*/ },
  { path: "/styleguide", name: "Styleguide" /*Component: Styleguide*/ },
];

const useStyles = makeStyles((theme) => ({
  pageTransition: {
    "&.page-enter": {
      opacity: 0,
      transform: "scale(1.1)",
    },
    "&.page-enter-active": {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 300ms, transform 300ms",
    },
    "&.page-exit": {
      opacity: 1,
      transform: "scale(1)",
    },
    "&.page-exit-active": {
      opacity: 0,
      transform: "scale(0.9)",
      transition: "opacity 300ms, transform 300ms",
    },
  },
}));

const PageTransition = () => {
  const classes = useStyles();

  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={3000}
              classNames="page"
              unmountOnExit
            >
              <div className={`page ${classes.pageTransition}`}>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </Switch>
  );
};

export default PageTransition;
