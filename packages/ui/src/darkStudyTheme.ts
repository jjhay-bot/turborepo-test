export const darkStudyThemeOptions = {
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: { main: "#9bb7ff" },
    secondary: { main: "#77d7c8" },
    warning: { contrastText: "#111827", main: "#ffd166" },
    background: { default: "#111827", paper: "#192235" },
    text: { primary: "#f7fafc", secondary: "#c1ccdc" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 750, letterSpacing: "-0.045em", lineHeight: 1.06 },
    h2: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.12 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.55 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10, fontWeight: 700, textTransform: "none" } } },
    MuiCard: { styleOverrides: { root: { border: "1px solid #34415a", borderRadius: 14, boxShadow: "0 10px 28px rgba(0, 0, 0, 0.25)" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiPaper: { styleOverrides: { root: { border: "1px solid #34415a", borderRadius: 14, boxShadow: "0 10px 28px rgba(0, 0, 0, 0.25)" } } },
  },
};
