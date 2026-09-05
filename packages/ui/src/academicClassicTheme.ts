export const academicClassicThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#1c3154" },
    secondary: { main: "#7d5a16" },
    warning: { contrastText: "#1c3154", main: "#d6a332" },
    background: { default: "#fdf9ef", paper: "#fffdf7" },
    text: { primary: "#1c3154", secondary: "#526176" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08 },
    h2: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.55 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, fontWeight: 700, textTransform: "none" } } },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid #d9cfb5", borderRadius: 12, boxShadow: "0 8px 20px rgba(28, 49, 84, 0.08)" },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 6, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiPaper: {
      styleOverrides: {
        root: { border: "1px solid #d9cfb5", borderRadius: 12, boxShadow: "0 8px 20px rgba(28, 49, 84, 0.08)" },
      },
    },
  },
};
