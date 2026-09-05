import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

const colorTokens = [
  { color: "primary.main", label: "Primary blue", value: "#5d7bb7" },
  { color: "secondary.main", label: "Supporting blue", value: "#8aabbe" },
  { color: "warning.main", label: "Highlight yellow", value: "#fed000" },
  { color: "background.default", label: "Page background", value: "#fdfcfb" },
  { color: "text.primary", label: "Primary text", value: "#080704" },
];

const typographyVariants = [
  { label: "h1", sample: "Lead the future with hope" },
  { label: "h2", sample: "Page heading" },
  { label: "h3", sample: "Section heading" },
  { label: "h4", sample: "Content heading" },
  { label: "h5", sample: "Card heading" },
  { label: "h6", sample: "Small heading" },
  { label: "subtitle1", sample: "A clear supporting introduction" },
  { label: "subtitle2", sample: "A compact supporting introduction" },
  {
    label: "body1",
    sample: "Default reading text for paragraphs, descriptions, and detailed content.",
  },
  {
    label: "body2",
    sample: "Compact reading text for supporting details and card descriptions.",
  },
  { label: "button", sample: "Button label" },
  { label: "caption", sample: "Caption, metadata, or helper information" },
  { label: "overline", sample: "SECTION LABEL" },
] as const;

export function DesignSystemFoundations() {
  return (
    <Stack spacing={4}>
      <section>
        <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
          01 · Color
        </Typography>
        <Typography variant="h4">ICLA palette</Typography>
        <Typography color="text.secondary">
          Shared theme values used by School Portal and Library Admin.
        </Typography>
        <Stack direction={{ sm: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
          {colorTokens.map((token) => (
            <Paper
              elevation={0}
              key={token.label}
              sx={{ border: 1, borderColor: "divider", flex: 1, overflow: "hidden" }}
            >
              <Box sx={{ bgcolor: token.color, height: 72 }} />
              <Stack spacing={0.25} sx={{ p: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>{token.label}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {token.value}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </section>

      <Divider />

      <section>
        <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
          02 · Typography
        </Typography>
        <Typography color="text.secondary">
          Each row uses the matching MUI variant from the shared ICLA theme.
        </Typography>
        <Paper
          elevation={0}
          sx={{ border: 1, borderColor: "divider", mt: 2, overflow: "hidden" }}
        >
          {typographyVariants.map((item, index) => (
            <div key={item.label}>
              {index > 0 ? <Divider /> : null}
              <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={{ sm: 4, xs: 0.5 }}
                sx={{ alignItems: { sm: "baseline", xs: "flex-start" }, p: 2.5 }}
              >
                <Typography
                  color="primary"
                  sx={{ flexShrink: 0, fontFamily: "monospace", minWidth: 96 }}
                  variant="body2"
                >
                  {item.label}
                </Typography>
                <Typography variant={item.label}>{item.sample}</Typography>
              </Stack>
            </div>
          ))}
        </Paper>
      </section>
    </Stack>
  );
}
