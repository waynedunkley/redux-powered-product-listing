import { injectGlobal } from "styled-components"

export const colors = {
  base: "#333333",
  pink: "#BA77FF",
  blue: "#8C88FF",
  green: "#50D2C2",
  purple: "#6563A4",
  purpleLight: "#b97cfc",
  white: "#FFFFFF",
  light: "#FFFFFF",
}

const layout = {
  padding: "32px",
}

const mixins = {
  container: `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${layout.padding};
  `,
}

export const fonts = {
  primary: "Helvetica Neue, Helvetica, Arial, sans-serif",
}

const breakpoints = {
  xs: "max-width: 576px",
  sm: "min-width: 576px",
  md: "min-width: 768px",
  lg: "min-width: 992px",
  xl: "min-width: 1200px",
  isMobile: "max-width: 767px",
  isDesktop: "min-width: 768px",
}

export const theme = {
  colors,
  layout,
  mixins,
  fonts,
  breakpoints,
}

export default theme

// eslint-disable-next-line
injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    font-family: ${fonts.primary};
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0px;
    font-weight: 400;
    color: #333;
    background-color: ${colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
  }
  button {
    font-family: ${fonts.primary};
  }
  a {
    color: ${colors.blue};
    text-decoration: none;

    &:active,
    &:hover,
    &:focus {
      text-decoration: none;
      outline: 0;
    }
  }
`
