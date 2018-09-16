import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styled-components/theme";
import "babel-polyfill";

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Homepage</h1>
  </ThemeProvider>
);

export default App;
