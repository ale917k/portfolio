// IE
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import App from './App';

import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: "#011627",
      white: "#FAFFFD",
    },
    primary: {
      main: "#507DBC",
    },
    secondary: {
      main: "#AA4465",
    },
    background: {
      default: '#FAFFFD',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "2.25rem",
    },
    h3: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "1.1rem",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
