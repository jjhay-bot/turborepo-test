"use client";

import type { ReactNode } from "react";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeTunerControls } from "./ThemeTunerControls";
import { ThemeTunerPreview } from "./ThemeTunerPreview";
import { useThemeTuner } from "./useThemeTuner";

type DesignSystemTunerProps = {
  children: ReactNode;
};

export default function DesignSystemTuner({ children }: DesignSystemTunerProps) {
  const tuner = useThemeTuner();

  return (
    <Stack spacing={3}>
      <ThemeProvider theme={tuner.previewTheme}>
        <ThemeTunerControls
          hasSavedSettings={tuner.hasSavedSettings}
          onReset={tuner.resetSettings}
          onSave={tuner.saveSettings}
          onPresetChange={tuner.selectPreset}
          onUpdate={tuner.updateSetting}
          settings={tuner.settings}
        />
      </ThemeProvider>
      <ThemeTunerPreview theme={tuner.previewTheme}>{children}</ThemeTunerPreview>
    </Stack>
  );
}
