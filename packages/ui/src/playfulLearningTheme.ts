export const playfulLearningThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#5372b5" },
    secondary: { main: "#e87562" },
    warning: { contrastText: "#2d3545", main: "#f7c948" },
    background: { default: "#fafaf7", paper: "#ffffff" },
    text: { primary: "#2d3545", secondary: "#5c687d" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.04 },
    h2: { fontWeight: 750, letterSpacing: "-0.035em", lineHeight: 1.1 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.5 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 12, fontWeight: 750, textTransform: "none" } } },
    MuiCard: { styleOverrides: { root: { border: "1px solid #e5e8f0", borderRadius: 18, boxShadow: "0 8px 22px rgba(45, 53, 69, 0.07)" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 10, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiPaper: { styleOverrides: { root: { border: "1px solid #e5e8f0", borderRadius: 18, boxShadow: "0 8px 22px rgba(45, 53, 69, 0.07)" } } },
  },
};
