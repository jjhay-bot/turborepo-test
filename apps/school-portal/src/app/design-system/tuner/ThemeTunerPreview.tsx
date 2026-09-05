"use client";

import type { ReactNode } from "react";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

type ThemeTunerPreviewProps = {
  children: ReactNode;
  theme: Theme;
};

export function ThemeTunerPreview({ children, theme }: ThemeTunerPreviewProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", border: 1, borderColor: "divider", borderRadius: 3, p: { sm: 3, xs: 2 } }}>
        {children}
      </Box>
    </ThemeProvider>
  );
}
