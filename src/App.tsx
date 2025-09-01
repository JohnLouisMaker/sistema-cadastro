import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./shared/themes/dark";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
