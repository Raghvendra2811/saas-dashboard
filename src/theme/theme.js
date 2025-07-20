// theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            primary: {
              main: "#1976d2",
              variant1: "#F7F9FB",
            },
            secondary: {
              main: "#1C1C1C66",
              variant1: "#1C1C1C",
              variant2: "#1C1C1C0D",
            },
            disabled: {
              main: "#1C1C1C33",
            },
            text: {
              main: "#1C1C1C",
              secondary: "#333333",
            },
          }
        : {
            background: {
              default: "#1C1C1C",
              paper: "#1C1C1C",
            },
            primary: {
              main: "#90caf9",
              variant1: "#FFFFFF0D",
            },
            secondary: {
              main: "#FFFFFF66",
              variant1: "#C6C7F8",
              variant2: "#FFFFFF1A",
            },
            disabled: {
              main: "#FFFFFF33",
            },
            text: {
              main: "#FFFFFF",
              secondary: "#bbbbbb",
            },
          }),
    },

    typography: {
      fontFamily: "Quicksand, sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
      },
      h2: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
      },
      h3: {
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
        color: mode === "light" ? "#666" : "#aaa",
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    shape: {
      borderRadius: 12, // More rounded corners
    },

    spacing: 8, // Default spacing unit (8px)

    shadows:
      mode === "light"
        ? [
            "none",
            "0px 1px 3px rgba(0,0,0,0.12)",
            "0px 3px 6px rgba(0,0,0,0.16)",
            // ...up to 24
          ]
        : [
            "none",
            "0px 1px 3px rgba(255,255,255,0.12)",
            "0px 3px 6px rgba(255,255,255,0.16)",
            // ...up to 24
          ],

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "8px 16px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
    },
  });
