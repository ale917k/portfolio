import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import { StoreProvider } from './Store';

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
      light: "#89A7D2",
      main: "#507DBC",
      dark: "#3E68A3",
    },
    secondary: {
      light: "#C56D89",
      main: "#AA4465",
      dark: "#83344D",
    },
    background: {
      default: '#FAFFFD',
    },
  },
  typography: {
    fontFamily: "AvenirNextLTPro-Regular",
    fontSize: 14,
    h1: {
      fontFamily: "AvenirNextLTPro-Demi",
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "AvenirNextLTPro-Demi",
      fontSize: "2.25rem",
    },
    h3: {
      fontFamily: "AvenirNextLTPro-Demi",
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: '700',
    },
  },
});

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
