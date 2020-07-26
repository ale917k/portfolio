import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleBarReact from "simplebar-react";
// import { TransitionGroup, Transition } from "react-transition-group";
// import {
//   TimelineMax,
//   Power1
// } from "gsap";

import About from './pages/About.page';
import Contact from './pages/Contact.page';
import Projects from './pages/Projects.page';
import Styleguide from './pages/Styleguide.page';
import PageNotFound from './pages/PageNotFound.page';
import IEBackup from './pages/IEBackup.page';

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
  // const { pathname, key } = useLocation();

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

  // const getHomeTimeline = (node, delay) => {
  //   const timeline = new TimelineMax({ paused: true });
  //   const texts = node.querySelectorAll('h1 > div');

  //   timeline
  //     .from(node, 0, { display: 'none', autoAlpha: 0, delay })
  //     .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  //   return timeline
  // }

  // const play = (pathname, node, appears) => {
  //   const delay = appears ? 0 : 0.5
  //   let timeline

  //   timeline = getHomeTimeline(node, delay)

  //   timeline.play()
  // }

  // Check if user is on IE
  const isIE = /*@cc_on!@*/false || !!document.documentMode;

  return (
    <Fragment>
      <Cursor />

      {isIE ?
        <IEBackup />
        :
        (
          <Switch>
            <Route exact path='/(|about|projects|contact|styleguide)' render={() => (
              <SimpleBarReact className={classes.root} style={{ maxHeight: '100vh' }}>
                <Header />

                {/* <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    timeout={{ enter: 750, exit: 0 }}
                  > */}
                    <Switch>
                      <Route exact path='/(|about)' component={About} />
                      <Route exact path='/projects' component={Projects} />
                      <Route exact path='/contact' component={Contact} />
                      <Route exact path='/styleguide' component={Styleguide} />
                    </Switch>
                  {/* </Transition> */}
                {/* </TransitionGroup> */}
              </SimpleBarReact>
            )} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        )
      }
    </Fragment >
  );
}

export default App;
