import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleBarReact from "simplebar-react";

import About from './pages/About.page';
import Contact from './pages/Contact.page';
import Projects from './pages/Projects.page';
import Styleguide from './pages/Styleguide.page';
import PageNotFound from './pages/PageNotFound.page';

import Cursor from "./components/global/Cursor.component";
import Header from "./components/global/Header.component";

import { makeStyles } from "@material-ui/core/styles";
import "simplebar/src/simplebar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
}));

function App() {
  const classes = useStyles();

  onmousemove = e => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    setTimeout(() => {
      const bgCursor = document.querySelector(".bg-cursor");
      bgCursor.style.left = `${e.pageX}px`;
      bgCursor.style.top = `${e.pageY}px`;
    }, 100);
  };

  onmousedown = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.add('expand');
  };

  onmouseup = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.remove('expand');
    bgCursor.classList.remove('pulse');
  };

  return (
    <Fragment>
      <Cursor />

      <SimpleBarReact className={classes.root} style={{ maxHeight: '100vh' }}>
        <Header />

        <Switch>
          <Route exact path='/(|about)' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/styleguide' component={Styleguide} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </SimpleBarReact>
    </Fragment >
  );
}

export default App;
