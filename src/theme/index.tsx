import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Indigo
    },
    success: {
      main: "#4caf50", // Green for success
    },
    warning: {
      main: "#ff9800", // Yellow for hints
    },
    error: {
      main: "#f44336", // Red for errors
    },
    background: {
      default: "#f8f9fa", // Neutral color for the app background
      paper: "#ffffff", // Neutral color for cards
    },
  },
  typography: {
    // Sets Inter as the primary font
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // Makes buttons look more friendly/modern
      fontWeight: 600,
    },
  },
  components: {
    // Global overrides for specific MUI components
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Larger border radius for a gamified feel
          padding: "10px 20px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
