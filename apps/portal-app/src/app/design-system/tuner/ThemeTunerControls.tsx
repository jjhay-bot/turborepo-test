"use client";

import { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Slider,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import type { ThemeTunerPreset, ThemeTunerSettings } from "./themeTunerDefaults";

type ThemeTunerControlsProps = {
  hasSavedSettings: boolean;
  onReset: () => void;
  onSave: () => void;
  onPresetChange: (preset: ThemeTunerPreset) => void;
  onUpdate: <Key extends keyof ThemeTunerSettings>(
    key: Key,
    value: ThemeTunerSettings[Key],
  ) => void;
  settings: ThemeTunerSettings;
};

const colourControls = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "warning", label: "Highlight" },
  { key: "backgroundDefault", label: "Page surface" },
  { key: "backgroundPaper", label: "Paper surface" },
] as const;

const radiusControls = [
  { key: "controlRadius", label: "General radius" },
  { key: "paperRadius", label: "Paper radius" },
  { key: "cardRadius", label: "Card radius" },
] as const;

type ColourKey = (typeof colourControls)[number]["key"];

const previewLabelByPreset: Record<ThemeTunerPreset, string> = {
  "academic-classic": "Academic Classic",
  brutalism: "Brutalism",
  "calm-reader": "Calm Reader",
  "editorial-modern": "Editorial Modern",
  "high-contrast": "High Contrast",
  icla: "ICLA",
  "playful-learning": "Playful Learning",
  "retro-modern": "Retro Modern",
  "dark-study": "Dark Study",
};

function isHexColour(value: string) {
  return /^#[0-9a-fA-F]{6}$/.test(value);
}

export function ThemeTunerControls({
  hasSavedSettings,
  onReset,
  onPresetChange,
  onSave,
  onUpdate,
  settings,
}: ThemeTunerControlsProps) {
  const [hexDrafts, setHexDrafts] = useState<Record<ColourKey, string>>({
    primary: settings.primary,
    secondary: settings.secondary,
    warning: settings.warning,
    backgroundDefault: settings.backgroundDefault,
    backgroundPaper: settings.backgroundPaper,
  });

  useEffect(() => {
    setHexDrafts({
      primary: settings.primary,
      secondary: settings.secondary,
      warning: settings.warning,
      backgroundDefault: settings.backgroundDefault,
      backgroundPaper: settings.backgroundPaper,
    });
  }, [
    settings.backgroundDefault,
    settings.backgroundPaper,
    settings.primary,
    settings.secondary,
    settings.warning,
  ]);

  function updateHexColour(key: ColourKey, value: string) {
    setHexDrafts((current) => ({ ...current, [key]: value }));

    if (isHexColour(value)) {
      onUpdate(key, value);
    }
  }

  return (
    <Paper
      elevation={0}
      sx={{ border: 1, borderColor: "divider", p: { sm: 3, xs: 2 } }}
    >
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        <Stack spacing={0.5}>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center" }}
          >
            <Typography variant="h4">UI tuner</Typography>
            <TextField
              label="Theme preset"
              onChange={(event) => onPresetChange(event.target.value as ThemeTunerPreset)}
              select
              size="small"
              sx={{ minWidth: 170 }}
              value={settings.themePreset}
            >
              {/* <MenuItem value="icla">ICLA Default</MenuItem> */}
              <MenuItem value="calm-reader">Calm Reader</MenuItem>
              {/* <MenuItem value="high-contrast">High Contrast</MenuItem> */}
              <MenuItem value="academic-classic">Academic Classic</MenuItem>
              <MenuItem value="editorial-modern">Editorial Modern</MenuItem>
              <MenuItem value="retro-modern">Retro Modern</MenuItem>
              <MenuItem value="playful-learning">Playful Learning</MenuItem>
              <MenuItem value="dark-study">Dark Study</MenuItem>
              <MenuItem value="brutalism">Brutalism</MenuItem>
            </TextField>
            <Chip
              color={hasSavedSettings ? "success" : "default"}
              label={hasSavedSettings ? "Saved locally" : `${previewLabelByPreset[settings.themePreset]} preview`}
              size="small"
            />
          </Stack>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 650 }}
          >
            Changes preview the gallery immediately. Save keeps this tuning in this
            browser only.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
        >
          <Tooltip title="Reset to Editorial Modern defaults">
            <IconButton
              aria-label="Reset to Editorial Modern defaults"
              onClick={onReset}
            >
              <RestartAltIcon />
            </IconButton>
          </Tooltip>
          <Button
            onClick={onSave}
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { lg: "minmax(360px, 0.95fr) minmax(0, 2fr)", xs: "1fr" },
          mt: 2.5,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 1.5,
            gridTemplateColumns: { sm: "repeat(2, minmax(0, 1fr))", xs: "1fr" },
          }}
        >
          {colourControls.map((control) => (
            <TextField
              error={
                hexDrafts[control.key].length > 0 && !isHexColour(hexDrafts[control.key])
              }
              helperText={
                hexDrafts[control.key].length > 0 && !isHexColour(hexDrafts[control.key])
                  ? "Use #RRGGBB"
                  : " "
              }
              key={control.key}
              label={`${control.label} HEX`}
              onChange={(event) => updateHexColour(control.key, event.target.value)}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Tooltip title={`Pick ${control.label.toLowerCase()} colour`}>
                        <Box
                          aria-label={`Pick ${control.label.toLowerCase()} colour`}
                          component="label"
                          sx={{
                            cursor: "pointer",
                            display: "block",
                            height: 22,
                            position: "relative",
                            width: 22,
                          }}
                        >
                          <Box
                            component="input"
                            onChange={(event) =>
                              onUpdate(control.key, event.target.value)
                            }
                            sx={{
                              cursor: "pointer",
                              height: "100%",
                              inset: 0,
                              opacity: 0,
                              position: "absolute",
                              width: "100%",
                            }}
                            type="color"
                            value={settings[control.key]}
                          />
                          <Box
                            component="span"
                            sx={{
                              bgcolor: settings[control.key],
                              border: 1,
                              borderColor: "divider",
                              borderRadius: "50%",
                              boxShadow: "0 0 0 2px background.paper",
                              display: "block",
                              height: 22,
                              width: 22,
                            }}
                          />
                        </Box>
                      </Tooltip>
                    </InputAdornment>
                  ),
                },
              }}
              value={hexDrafts[control.key]}
            />
          ))}
        </Box>

        <Box
          sx={{
            alignItems: "start",
            display: "grid",
            gap: 3,
            gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))", xs: "1fr" },
          }}
        >
        <Stack
          spacing={1.25}
        >
          {radiusControls.map((control) => (
            <Stack
              key={control.key}
              spacing={0.25}
            >
              <Typography variant="body2">
                {control.label} · {settings[control.key]}px
              </Typography>
              {control.key === "controlRadius" ? (
                <Typography
                  color="text.secondary"
                  variant="caption"
                >
                  Buttons, text fields, chips, and small controls
                </Typography>
              ) : null}
              <Slider
                max={24}
                min={0}
                onChange={(_, value) =>
                  onUpdate(control.key, Array.isArray(value) ? value[0] : value)
                }
                step={2}
                value={settings[control.key]}
                valueLabelDisplay="auto"
              />
            </Stack>
          ))}
        </Stack>

        <Stack
          spacing={1}
        >
          <Typography variant="body2">Spacing density · {settings.spacing}px</Typography>
          <Slider
            marks
            max={12}
            min={4}
            onChange={(_, value) =>
              onUpdate("spacing", Array.isArray(value) ? value[0] : value)
            }
            step={2}
            value={settings.spacing}
            valueLabelDisplay="auto"
          />
        </Stack>

        <Stack
          spacing={1}
        >
          <Typography variant="body2">
            Typography scale · {Math.round(settings.typographyScale * 100)}%
          </Typography>
          <Slider
            marks
            max={1.2}
            min={0.85}
            onChange={(_, value) =>
              onUpdate("typographyScale", Array.isArray(value) ? value[0] : value)
            }
            step={0.05}
            value={settings.typographyScale}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
          />
          <Typography
            color="text.secondary"
            variant="caption"
          >
            Adjusts the base type size across the preview.
          </Typography>
        </Stack>
        </Box>
      </Box>
    </Paper>
  );
}
