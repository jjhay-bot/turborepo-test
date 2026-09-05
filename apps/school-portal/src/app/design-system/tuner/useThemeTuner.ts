"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { academicClassicThemeOptions, brutalismThemeOptions, calmReaderThemeOptions, darkStudyThemeOptions, editorialModernThemeOptions, highContrastThemeOptions, iclaThemeOptions, playfulLearningThemeOptions, retroModernThemeOptions } from "@icla/ui";
import {
  themeTunerPresetDefaults,
  themeTunerDefaults,
  themeTunerStorageKey,
  type ThemeTunerPreset,
  type ThemeTunerSettings,
} from "./themeTunerDefaults";

function parseStoredSettings(value: string | null): ThemeTunerSettings | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ThemeTunerSettings> & { borderRadius?: unknown };

    if (
      typeof parsed.primary !== "string" ||
      typeof parsed.secondary !== "string" ||
      typeof parsed.warning !== "string" ||
      typeof parsed.spacing !== "number" ||
      (parsed.backgroundDefault !== undefined && typeof parsed.backgroundDefault !== "string") ||
      (parsed.backgroundPaper !== undefined && typeof parsed.backgroundPaper !== "string") ||
      (parsed.typographyScale !== undefined && typeof parsed.typographyScale !== "number")
    ) {
      return null;
    }

    const previousRadius = typeof parsed.borderRadius === "number" ? parsed.borderRadius : 12;
    const themePreset: ThemeTunerPreset = parsed.themePreset === "brutalism" || parsed.themePreset === "calm-reader" || parsed.themePreset === "high-contrast" || parsed.themePreset === "academic-classic" || parsed.themePreset === "editorial-modern" || parsed.themePreset === "retro-modern" || parsed.themePreset === "playful-learning" || parsed.themePreset === "dark-study"
      ? parsed.themePreset
      : "icla";

    return {
      backgroundDefault: typeof parsed.backgroundDefault === "string" ? parsed.backgroundDefault : themeTunerPresetDefaults[themePreset].backgroundDefault,
      backgroundPaper: typeof parsed.backgroundPaper === "string" ? parsed.backgroundPaper : themeTunerPresetDefaults[themePreset].backgroundPaper,
      cardRadius: typeof parsed.cardRadius === "number" ? parsed.cardRadius : previousRadius,
      controlRadius: typeof parsed.controlRadius === "number" ? parsed.controlRadius : previousRadius,
      paperRadius: typeof parsed.paperRadius === "number" ? parsed.paperRadius : previousRadius,
      primary: parsed.primary,
      secondary: parsed.secondary,
      spacing: parsed.spacing,
      themePreset,
      typographyScale: typeof parsed.typographyScale === "number" ? parsed.typographyScale : themeTunerPresetDefaults[themePreset].typographyScale,
      warning: parsed.warning,
    };
  } catch {
    return null;
  }
}

export function useThemeTuner() {
  const [settings, setSettings] = useState(themeTunerDefaults);
  const [hasSavedSettings, setHasSavedSettings] = useState(false);

  useEffect(() => {
    const storedSettings = parseStoredSettings(window.localStorage.getItem(themeTunerStorageKey));

    if (storedSettings) {
      setSettings(storedSettings);
      setHasSavedSettings(true);
    }
  }, []);

  const updateSetting = useCallback(
    <Key extends keyof ThemeTunerSettings>(key: Key, value: ThemeTunerSettings[Key]) => {
      setSettings((current) => ({ ...current, [key]: value }));
      setHasSavedSettings(false);
    },
    [],
  );

  const selectPreset = useCallback((preset: ThemeTunerPreset) => {
    setSettings(themeTunerPresetDefaults[preset]);
    setHasSavedSettings(false);
  }, []);

  const saveSettings = useCallback(() => {
    window.localStorage.setItem(themeTunerStorageKey, JSON.stringify(settings));
    setHasSavedSettings(true);
  }, [settings]);

  const resetSettings = useCallback(() => {
    window.localStorage.removeItem(themeTunerStorageKey);
    setSettings(themeTunerDefaults);
    setHasSavedSettings(false);
  }, []);

  const previewTheme = useMemo(
    () => {
      const baseThemeOptions = settings.themePreset === "brutalism"
        ? brutalismThemeOptions
        : settings.themePreset === "calm-reader"
          ? calmReaderThemeOptions
          : settings.themePreset === "high-contrast"
            ? highContrastThemeOptions
            : settings.themePreset === "academic-classic"
              ? academicClassicThemeOptions
              : settings.themePreset === "editorial-modern"
                ? editorialModernThemeOptions
                : settings.themePreset === "retro-modern"
                  ? retroModernThemeOptions
                  : settings.themePreset === "playful-learning"
                    ? playfulLearningThemeOptions
                    : settings.themePreset === "dark-study"
                      ? darkStudyThemeOptions
          : iclaThemeOptions;
      const surfaceStyles = settings.themePreset === "brutalism"
        ? { border: "2px solid #080704", boxShadow: "6px 6px 0 #080704" }
        : settings.themePreset === "calm-reader"
          ? { border: "1px solid #dfe4ea", boxShadow: "0 10px 28px rgba(23, 32, 51, 0.06)" }
          : settings.themePreset === "high-contrast"
            ? { border: "3px solid #0b0b0b" }
            : settings.themePreset === "academic-classic"
              ? { border: "1px solid #d9cfb5", boxShadow: "0 8px 20px rgba(28, 49, 84, 0.08)" }
              : settings.themePreset === "editorial-modern"
                ? { border: "1px solid #d9dcdf" }
                : settings.themePreset === "retro-modern"
                  ? { border: "2px solid #263238", boxShadow: "4px 4px 0 #d9a441" }
                  : settings.themePreset === "playful-learning"
                    ? { border: "1px solid #e5e8f0", boxShadow: "0 8px 22px rgba(45, 53, 69, 0.07)" }
                    : settings.themePreset === "dark-study"
                      ? { border: "1px solid #34415a", boxShadow: "0 10px 28px rgba(0, 0, 0, 0.25)" }
          : {};

      return createTheme({
        ...baseThemeOptions,
        cssVariables: false,
        palette: {
          ...baseThemeOptions.palette,
          primary: { ...baseThemeOptions.palette.primary, main: settings.primary },
          secondary: { ...baseThemeOptions.palette.secondary, main: settings.secondary },
          warning: { ...baseThemeOptions.palette.warning, main: settings.warning },
          background: {
            ...baseThemeOptions.palette.background,
            default: settings.backgroundDefault,
            paper: settings.backgroundPaper,
          },
        },
        shape: { ...baseThemeOptions.shape, borderRadius: settings.controlRadius },
        components: {
          ...baseThemeOptions.components,
          MuiCard: { styleOverrides: { root: { ...surfaceStyles, borderRadius: settings.cardRadius } } },
          MuiPaper: { styleOverrides: { root: { ...surfaceStyles, borderRadius: settings.paperRadius } } },
        },
        spacing: settings.spacing,
        typography: {
          ...baseThemeOptions.typography,
          fontSize: 14 * settings.typographyScale,
        },
      });
    },
    [settings],
  );

  return {
    hasSavedSettings,
    previewTheme,
    resetSettings,
    saveSettings,
    selectPreset,
    settings,
    updateSetting,
  };
}
