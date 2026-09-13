"use client";

import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Divider,
  Pagination,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

const categories = ["All programs", "Master's", "Short courses", "Events"];

export default function DesignSystemBrowsingAndIdentity() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        08 · Browsing and identity
      </Typography>
      <Typography variant="h4">Pagination, Avatar, and Tabs</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Visual patterns for browsing News and Events, grouping Programs, and
        introducing people such as authors, faculty, or event speakers.
      </Typography>

      <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Pagination
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Use for long News and Events lists, not a short featured group.
          </Typography>
          <Stack spacing={1.5} sx={{ alignItems: "flex-start", mt: 1.5 }}>
            <Pagination color="primary" count={7} defaultPage={2} shape="rounded" />
            <Pagination count={7} defaultPage={2} shape="rounded" size="small" variant="outlined" />
          </Stack>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Avatar
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Use an image when available; initials are the dependable fallback.
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mt: 1.5 }}>
            <Avatar alt="Kenneth Wong" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80" />
            <Avatar sx={{ bgcolor: "secondary.main" }}>MA</Avatar>
            <AvatarGroup max={3}>
              <Avatar>KW</Avatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>JD</Avatar>
              <Avatar sx={{ bgcolor: "warning.main", color: "warning.contrastText" }}>AM</Avatar>
              <Avatar>RS</Avatar>
            </AvatarGroup>
          </Stack>
        </Paper>
      </Stack>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, overflow: "hidden" }}>
        <Stack sx={{ p: 2, pb: 0 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Tabs
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Use only when a visitor switches between closely related content on
            the same page.
          </Typography>
        </Stack>
        <Tabs
          aria-label="Programme categories"
          onChange={(_, value) => setSelectedCategory(value)}
          sx={{ mt: 1 }}
          value={selectedCategory}
          variant="scrollable"
        >
          {categories.map((category) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
        <Typography color="text.secondary" sx={{ px: 2, py: 1.5 }} variant="body2">
          Showing: {categories[selectedCategory]}
        </Typography>
      </Paper>
    </section>
  );
}
