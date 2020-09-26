// IE
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";

import "./index.css";

const theme = createMuiTheme({
  palette: {
    type: "light",
    common: {
      black: "#0A0908",
      white: "#F4F4F9",
    },
    primary: {
      main: "#148BEF",
    },
    secondary: {
      main: "#A90074",
    },
    background: {
      default: "#F4F4F9",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
      fontSize: "2.25rem",
    },
    h3: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "'Alegreya Sans SC', sans-serif",
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
  document.getElementById("root")
);

serviceWorker.register();
