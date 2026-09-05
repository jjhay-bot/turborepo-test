"use client";

import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

export default function Home() {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

  return (
    <Stack component="main" spacing={3} sx={{ px: { xs: 3, md: 8 }, py: 8, maxWidth: 720 }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
        DEPLOYMENT TEST
      </Typography>
      <Typography variant="h1">School Portal</Typography>
      <Typography variant="body1">
        Public website for school information, programs, news, and events.
      </Typography>
      <MuiLink href={adminUrl}>Library staff sign in →</MuiLink>

      <Divider sx={{ my: 2 }} />

      <Stack component="section" spacing={2} aria-labelledby="documentation-title">
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          DOCUMENTATION
        </Typography>
        <Typography variant="h2" id="documentation-title">
          Project references
        </Typography>
        <MuiLink component={Link} href="/project-setup">
          View project setup guide →
        </MuiLink>
        <MuiLink component={Link} href="/deployment">
          View deployment guide →
        </MuiLink>
        <MuiLink component={Link} href="/deployment">
          Design System →
        </MuiLink>
      </Stack>
    </Stack>
  );
}
