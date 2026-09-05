"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  CircularProgress,
  Divider,
  ImageList,
  ImageListItem,
  LinearProgress,
  Menu,
  MenuItem,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

const galleryImages = [
  {
    alt: "Students gathered around a table",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    alt: "Friends gathered outdoors",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  },
  {
    alt: "Church interior with wooden pews",
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export default function DesignSystemMediaAndLoading() {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        10 · Media and states
      </Typography>
      <Typography variant="h4">ImageList, Menu, and loading</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Supporting presentation patterns for galleries, compact actions, and the
        moments before content is ready.
      </Typography>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          ImageList
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Use for an image-forward gallery such as facilities, campus, or events.
        </Typography>
        <ImageList cols={3} gap={8} sx={{ mb: 0, mt: 1.5 }}>
          {galleryImages.map((image) => (
            <ImageListItem key={image.src}>
              <img alt={image.alt} loading="lazy" src={image.src} />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>

      <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Menu
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Keep secondary actions compact when they do not need permanent space.
          </Typography>
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={(event) => setMenuAnchor(event.currentTarget)}
            sx={{ mt: 1.5 }}
            variant="outlined"
          >
            Open menu
          </Button>
          <Menu anchorEl={menuAnchor} onClose={() => setMenuAnchor(null)} open={Boolean(menuAnchor)}>
            <MenuItem onClick={() => setMenuAnchor(null)}>Edit details</MenuItem>
            <MenuItem onClick={() => setMenuAnchor(null)}>Duplicate</MenuItem>
            <MenuItem onClick={() => setMenuAnchor(null)}>Archive</MenuItem>
          </Menu>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Loading states
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Match the loading treatment to the amount of content still arriving.
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 1.5 }}>
            <LinearProgress />
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <CircularProgress size={24} />
              <Typography color="text.secondary" variant="body2">
                Loading content
              </Typography>
            </Stack>
            <Skeleton variant="text" width="80%" />
            <Skeleton height={68} variant="rounded" width="100%" />
          </Stack>
        </Paper>
      </Stack>
    </section>
  );
}
