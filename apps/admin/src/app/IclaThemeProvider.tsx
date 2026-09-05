"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { editorialModernThemeOptions } from "@icla/ui";
import type { ReactNode } from "react";

const theme = createTheme(editorialModernThemeOptions);

type IclaThemeProviderProps = {
  children: ReactNode;
};

export function IclaThemeProvider({ children }: IclaThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
