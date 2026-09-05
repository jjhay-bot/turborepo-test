export const retroModernThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#276d6a" },
    secondary: { main: "#c96245" },
    warning: { contrastText: "#263238", main: "#d9a441" },
    background: { default: "#f6e8d5", paper: "#fffaf0" },
    text: { primary: "#263238", secondary: "#53615e" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.02 },
    h2: { fontWeight: 750, letterSpacing: "-0.03em", lineHeight: 1.1 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.5 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10, fontWeight: 750, textTransform: "none" } } },
    MuiCard: {
      styleOverrides: { root: { border: "2px solid #263238", borderRadius: 14, boxShadow: "4px 4px 0 #d9a441" } },
    },
    MuiChip: { styleOverrides: { root: { border: "1px solid #263238", borderRadius: 8, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiPaper: {
      styleOverrides: { root: { border: "2px solid #263238", borderRadius: 14, boxShadow: "4px 4px 0 #d9a441" } },
    },
  },
};
