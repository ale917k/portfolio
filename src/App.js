import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'react-smooth-scrollbar';

import Container from '@material-ui/core/Container';

import About from './pages/About/About.page';
import Contact from './pages/Contact/Contact.page';
import Projects from './pages/Projects/Projects.page';
import PageNotFound from './pages/PageNotFound/PageNotFound.page';

import Cursor from './components/Cursor/Cursor.component';
import Header from './components/Header/Header.component';

import { makeStyles } from "@material-ui/core/styles";

SmoothScrollbar.use(OverscrollPlugin);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
    }, 150);
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
      <Scrollbar
        damping={0.1}
      >
        <Container className={classes.root}>
          <Header />

          <Switch>
            <Route exact path='/(|about)' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </Container >
      </Scrollbar>
    </Fragment >
  );
}

export default App;
