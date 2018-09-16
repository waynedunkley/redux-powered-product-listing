import { injectGlobal } from "styled-components"

export const colors = {
  dark: "#000000",
  darkGrey: "#666666",
  lightGrey: "#999999",
  backgroundBase: "#F6F6F6",
  borders: "#E4E4E4",
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
    color: ${colors.dark};
    background-color: ${colors.backgroundBase};
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
    text-decoration: none;

    &:active,
    &:hover,
    &:focus {
      text-decoration: none;
      outline: 0;
    }
  }
`
