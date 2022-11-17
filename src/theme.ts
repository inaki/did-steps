import { extendTheme } from "@chakra-ui/react";

// define tokens
const tokens = {
  colors: {
    light: {
      primary: "#ae3ec9",
      success: "green.100",
      background: "white",
      text: "black",
      opaque: "#25262B",
    },
    dark: {
      primary: "#ae3ec9",
      success: "green.500",
      background: "#1A1B1E",
      text: "silver",
      opaque: "#25262B",
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
    blackOpaque: {
      default: tokens.colors.dark["opaque"],
      _light: tokens.colors.light["opaque"],
    },
  },
};

const styles = {
  global: {
    body: {
      background: "background",
      color: "text",
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
  semanticTokens,
});

export default theme;
