export const editorialModernThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#202124" },
    secondary: { main: "#526e9d" },
    warning: { contrastText: "#202124", main: "#f36e5a" },
    background: { default: "#f7f7f5", paper: "#ffffff" },
    text: { primary: "#202124", secondary: "#5f6368" },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.065em", lineHeight: 0.98 },
    h2: { fontWeight: 750, letterSpacing: "-0.045em", lineHeight: 1.04 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.5 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 4, fontWeight: 750, textTransform: "none" } } },
    MuiCard: { styleOverrides: { root: { border: "1px solid #d9dcdf", borderRadius: 6, boxShadow: "none" } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 3, fontWeight: 700 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 4 } } },
    MuiPaper: { styleOverrides: { root: { border: "1px solid #d9dcdf", borderRadius: 6, boxShadow: "none" } } },
  },
};
