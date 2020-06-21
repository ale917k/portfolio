import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import About from './pages/About/About.page';
import Contact from './pages/Contact/Contact.page';
import Projects from './pages/Projects/Projects.page';
import PageNotFound from './pages/PageNotFound/PageNotFound.page';

import Cursor from './components/Cursor/Cursor.component';
import Header from './components/Header/Header.component';

function App() {
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
    <Container>
      <Cursor />
      <Header />

      <Switch>
        <Route exact path='/(|about)' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Container>
  );
}

export default App;
