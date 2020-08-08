import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import useStyles from "./PageTransition.styles";

const routes = [
  { path: "/", name: "Home" /*Component: Home*/ },
  { path: "/about", name: "About" /*Component: About*/ },
  { path: "/projects", name: "Projects" /*Component: Projects*/ },
  { path: "/contact", name: "Contact" /*Component: Contact*/ },
  { path: "/styleguide", name: "Styleguide" /*Component: Styleguide*/ },
];

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
              <div className={`page ${classes.root}`}>
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
