import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[400],
      dark: yellow[600],
      light: yellow[200],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[700],
      dark: cyan[900],
      light: cyan[500],
      contrastText: "#ffffff",
    },
    background: {
      default: "#303134",
      paper: "#202124",
    },
  },
});
