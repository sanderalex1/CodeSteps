import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // classic MUI blue
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0", // purple accent
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
});

export default lightTheme;
