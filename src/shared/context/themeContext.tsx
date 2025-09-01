import { useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { ThemeContext } from "./themeProvider";

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () => (themeName === "light" ? lightTheme : darkTheme),
    [themeName]
  );

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
