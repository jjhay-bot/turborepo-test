export const highContrastThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { contrastText: "#ffffff", main: "#0047ff" },
    secondary: { contrastText: "#ffffff", main: "#005f4b" },
    warning: { contrastText: "#0b0b0b", main: "#ffcb05" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#0b0b0b", secondary: "#252525" },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.55 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "3px solid #0b0b0b",
          borderRadius: 0,
          fontWeight: 800,
          textTransform: "none",
          "&.Mui-focusVisible": { outline: "3px solid #ffcb05", outlineOffset: 3 },
        },
      },
    },
    MuiCard: { styleOverrides: { root: { border: "3px solid #0b0b0b", borderRadius: 0 } } },
    MuiChip: { styleOverrides: { root: { border: "2px solid #0b0b0b", borderRadius: 0, fontWeight: 800 } } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#0b0b0b", borderWidth: 2 },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { border: "3px solid #0b0b0b", borderRadius: 0 } } },
  },
};
