export type ThemeTunerPreset = "academic-classic" | "brutalism" | "calm-reader" | "dark-study" | "editorial-modern" | "high-contrast" | "icla" | "playful-learning" | "retro-modern";

export type ThemeTunerSettings = {
  backgroundDefault: string;
  backgroundPaper: string;
  cardRadius: number;
  controlRadius: number;
  paperRadius: number;
  primary: string;
  secondary: string;
  spacing: number;
  themePreset: ThemeTunerPreset;
  typographyScale: number;
  warning: string;
};

export const iclaTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#fdfcfb",
  backgroundPaper: "#ffffff",
  cardRadius: 12,
  controlRadius: 12,
  paperRadius: 12,
  primary: "#5d7bb7",
  secondary: "#8aabbe",
  spacing: 8,
  themePreset: "icla",
  typographyScale: 1,
  warning: "#fed000",
};

export const brutalismTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#fdfcfb",
  backgroundPaper: "#ffffff",
  cardRadius: 0,
  controlRadius: 0,
  paperRadius: 0,
  primary: "#080704",
  secondary: "#5d7bb7",
  spacing: 8,
  themePreset: "brutalism",
  typographyScale: 1,
  warning: "#fed000",
};

export const calmReaderTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#fffdf8",
  backgroundPaper: "#ffffff",
  cardRadius: 16,
  controlRadius: 10,
  paperRadius: 16,
  primary: "#486b9f",
  secondary: "#91b5c8",
  spacing: 8,
  themePreset: "calm-reader",
  typographyScale: 1,
  warning: "#e8b83f",
};

export const highContrastTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#ffffff",
  backgroundPaper: "#ffffff",
  cardRadius: 0,
  controlRadius: 0,
  paperRadius: 0,
  primary: "#0047ff",
  secondary: "#005f4b",
  spacing: 8,
  themePreset: "high-contrast",
  typographyScale: 1,
  warning: "#ffcb05",
};

export const academicClassicTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#fdf9ef",
  backgroundPaper: "#fffdf7",
  cardRadius: 12,
  controlRadius: 8,
  paperRadius: 12,
  primary: "#1c3154",
  secondary: "#7d5a16",
  spacing: 8,
  themePreset: "academic-classic",
  typographyScale: 1,
  warning: "#d6a332",
};

export const editorialModernTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#f7f7f5",
  backgroundPaper: "#ffffff",
  cardRadius: 6,
  controlRadius: 4,
  paperRadius: 6,
  primary: "#202124",
  secondary: "#526e9d",
  spacing: 8,
  themePreset: "editorial-modern",
  typographyScale: 1,
  warning: "#f36e5a",
};

export const themeTunerDefaults = editorialModernTunerDefaults;

export const retroModernTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#f6e8d5",
  backgroundPaper: "#fffaf0",
  cardRadius: 14,
  controlRadius: 10,
  paperRadius: 14,
  primary: "#276d6a",
  secondary: "#c96245",
  spacing: 8,
  themePreset: "retro-modern",
  typographyScale: 1,
  warning: "#d9a441",
};

export const playfulLearningTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#fafaf7",
  backgroundPaper: "#ffffff",
  cardRadius: 18,
  controlRadius: 12,
  paperRadius: 18,
  primary: "#5372b5",
  secondary: "#e87562",
  spacing: 8,
  themePreset: "playful-learning",
  typographyScale: 1,
  warning: "#f7c948",
};

export const darkStudyTunerDefaults: ThemeTunerSettings = {
  backgroundDefault: "#111827",
  backgroundPaper: "#192235",
  cardRadius: 14,
  controlRadius: 10,
  paperRadius: 14,
  primary: "#9bb7ff",
  secondary: "#77d7c8",
  spacing: 8,
  themePreset: "dark-study",
  typographyScale: 1,
  warning: "#ffd166",
};

export const themeTunerPresetDefaults = {
  brutalism: brutalismTunerDefaults,
  "calm-reader": calmReaderTunerDefaults,
  "high-contrast": highContrastTunerDefaults,
  "academic-classic": academicClassicTunerDefaults,
  "editorial-modern": editorialModernTunerDefaults,
  "retro-modern": retroModernTunerDefaults,
  "playful-learning": playfulLearningTunerDefaults,
  "dark-study": darkStudyTunerDefaults,
  icla: iclaTunerDefaults,
} satisfies Record<ThemeTunerPreset, ThemeTunerSettings>;

export const themeTunerStorageKey = "icla.design-system.theme-tuner";
