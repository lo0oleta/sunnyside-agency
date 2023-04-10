import { extendTheme } from "@chakra-ui/react";

const fonts = {
  mono: `'Barlow', monospace`,
  body: `'Barlow', sans-serif`,
  heading: `'Barlow', sans-serif`,
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body, #__next": {
        backgroundColor: "yellow.20",
      },
    }),
  },
  semanticTokens: {
    colors: {
      yellow: {
        "20": "#FEFDFA",
        "50": "#FCF5E9",
        "100": "#F6E4C1",
        "200": "#F0D399",
        "300": "#EAC271",
        "400": "#E4B149",
        "500": "#DEA021",
        "600": "#B2801A",
        "700": "#856014",
        "800": "#59400D",
        "900": "#2C2007",
      },
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      black: "#16161D",
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
