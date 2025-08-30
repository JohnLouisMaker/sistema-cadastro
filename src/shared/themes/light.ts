import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
      dark: yellow[800],
      light: yellow[400],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[600],
      dark: cyan[800],
      light: cyan[400],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
