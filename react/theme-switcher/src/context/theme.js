import React, { createContext, useContext } from "react";

export const ThemeCotext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeCotext.Provider;

export default function useTheme() {
  return useContext(ThemeCotext);
}
