"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#000030",
    },
    secondary: {
      main: "rgb(229, 229, 234)",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 56,
      fontWeight: 400,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 32,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: "1000px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
