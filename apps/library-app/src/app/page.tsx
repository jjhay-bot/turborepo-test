"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Home() {
  const schoolPortalUrl =
    process.env.NEXT_PUBLIC_SCHOOL_PORTAL_URL ?? "http://localhost:3001";

  return (
    <Stack component="main" spacing={3} sx={{ px: { xs: 3, md: 8 }, py: 8, maxWidth: 720 }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
        DEPLOYMENT TEST
      </Typography>
      <Typography variant="h1">Library Admin</Typography>
      <Typography variant="body1">Staff workspace for managing books.</Typography>
      <MuiLink href={schoolPortalUrl}>← Back to School Portal</MuiLink>
    </Stack>
  );
}
