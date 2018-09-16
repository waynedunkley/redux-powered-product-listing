import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styled-components/theme";
import "babel-polyfill";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
