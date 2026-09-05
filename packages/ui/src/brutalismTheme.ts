export const brutalismThemeOptions = {
  cssVariables: true,
  palette: {
    primary: { main: "#080704" },
    secondary: { main: "#5d7bb7" },
    warning: { contrastText: "#080704", main: "#fed000" },
    background: { default: "#fdfcfb", paper: "#ffffff" },
    text: { primary: "#080704", secondary: "#30302c" },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 900, letterSpacing: "-0.07em", textTransform: "uppercase" },
    h2: { fontWeight: 900, letterSpacing: "-0.05em", textTransform: "uppercase" },
    button: { fontWeight: 800, letterSpacing: "0.03em", textTransform: "uppercase" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid #080704",
          borderRadius: 0,
          boxShadow: "4px 4px 0 #080704",
          fontWeight: 800,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: "2px solid #080704", borderRadius: 0, boxShadow: "6px 6px 0 #080704" },
      },
    },
    MuiChip: {
      styleOverrides: { root: { border: "2px solid #080704", borderRadius: 0, fontWeight: 700 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#080704", borderWidth: 2 },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { border: "2px solid #080704", borderRadius: 0, boxShadow: "6px 6px 0 #080704" },
      },
    },
  },
};
