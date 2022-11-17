import { extendTheme } from "@chakra-ui/react";

// define tokens
const tokens = {
  colors: {
    light: {
      primary: "#ae3ec9",
      success: "green.100",
      background: "white",
      text: "black",
    },
    dark: {
      primary: "#ae3ec9",
      success: "green.500",
      background: "#1A1B1E",
      text: "silver",
    },
  },
};

// define semantic token
const semanticTokens = {
  colors: {
    primary: {
      default: tokens.colors.dark["primary"],
      _light: tokens.colors.light["primary"],
    },
    success: {
      default: tokens.colors.dark["success"],
      _light: tokens.colors.light["success"],
    },
    background: {
      default: tokens.colors.dark["background"],
      _light: tokens.colors.light["background"],
    },
    text: {
      default: tokens.colors.dark["text"],
      _light: tokens.colors.light["text"],
    },
  },
};

//
const styles = {
  global: {
    body: {
      background: "background",
      color: "text",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      _focus: {
        ring: "0px",
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  tokens,
  styles,
  components,
  semanticTokens,
});

export default theme;
