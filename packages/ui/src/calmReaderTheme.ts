export const calmReaderThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#486b9f" },
    secondary: { main: "#91b5c8" },
    warning: { contrastText: "#172033", main: "#e8b83f" },
    background: { default: "#fffdf8", paper: "#ffffff" },
    text: { primary: "#172033", secondary: "#58657a" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.1 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.55 },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 10, fontWeight: 700, textTransform: "none" } },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid #dfe4ea", borderRadius: 16, boxShadow: "0 10px 28px rgba(23, 32, 51, 0.06)" },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiPaper: {
      styleOverrides: {
        root: { border: "1px solid #dfe4ea", borderRadius: 16, boxShadow: "0 10px 28px rgba(23, 32, 51, 0.06)" },
      },
    },
  },
};
