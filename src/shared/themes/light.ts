import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[400],
      dark: yellow[600],
      light: yellow[200],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[400],
      dark: cyan[600],
      light: cyan[200],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
