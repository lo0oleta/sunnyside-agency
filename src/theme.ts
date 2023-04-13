import { extendTheme } from "@chakra-ui/react";

// const fonts = {
//   body: `'var(--font-barlow)', sans-serif`,
//   heading: `'var(--font-fraunces)', sans-serif`,
// };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  config: {
    cssVarPrefix: "ck",
  },
  fonts: {
    body: "system-ui, sans-serif",
    // heading: "Georgia, serif",
    // barlow: "Georgia, serif",

    barlow: "var(--font-barlow)",
    // body: "var(--font-barlow)",
    heading: "var(--font-fraunces), sans-serif",
    mono: "Menlo, monospace",
  },
  // fonts,

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
      brandSoftRed: "hsl(7, 99%, 70%)",
      brandYellow: "hsl(51, 100%, 49%)",
      brandCyan: "hsl(167, 40%, 24%)",
      darkBlue: "hsl(198, 62%, 26%)",
      footerCyan: "hsl(168, 34%, 41%)",
      desaturatedBlue: "hsl(212, 27%, 19%)",
      veryGrayishDarkBlue: "hsl(213, 9%, 39%)",
      grayishDarkBlue: " hsl(232, 10%, 55%)",
      grayishBlue: "hsl(210, 4%, 67%)",
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
  breakpoints,
});

export default theme;
