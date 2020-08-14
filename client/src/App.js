import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Cursor from "./components/global/Cursor.component";
import Header from "./components/global/Header.component";

const Home = lazy(() => import("./pages/Home.page"));
const About = lazy(() => import("./pages/About.page"));
const Projects = lazy(() => import("./pages/Projects.page"));
const Contact = lazy(() => import("./pages/Contact.page"));
const Skills = lazy(() => import("./pages/Skills.page"));
const Styleguide = lazy(() => import("./pages/Styleguide.page"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.page"));
const IEBackup = lazy(() => import("./pages/IEBackup.page"));

// Check if user is on IE
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/skills", name: "skills", Component: Skills },
  { path: "/styleguide", name: "Styleguide", Component: Styleguide },
];

const App = () => {
  useEffect(() => {
    onmousemove = (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      setTimeout(() => {
        const bgCursor = document.querySelector(".bg-cursor");
        bgCursor.style.left = `${e.pageX}px`;
        bgCursor.style.top = `${e.pageY}px`;
      }, 50);
    };

    onmousedown = () => {
      const bgCursor = document.querySelector(".bg-cursor");
      bgCursor.classList.add("expand");
    };

    onmouseup = () => {
      const bgCursor = document.querySelector(".bg-cursor");
      bgCursor.classList.remove("expand");
      bgCursor.classList.remove("pulse");
    };
  });

  return (
    <Fragment>
      <Cursor />
      <Suspense fallback={<div></div>}>
        {isIE ? (
          <IEBackup />
        ) : (
          <Switch>
            <Route exact path="/(|about|skills|projects|contact|styleguide)">
              <Header />

              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {/* {({ match }) => (
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
                          )} */}
                  <Component />
                </Route>
              ))}
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        )}
      </Suspense>
    </Fragment>
  );
};

export default App;
