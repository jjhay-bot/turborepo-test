"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const portalCards = [
  {
    action: "Explore programs",
    category: "Programs",
    description: "Academic formation that pairs theological inquiry with lived spirituality.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students gathered around a table",
    title: "Study with purpose",
  },
  {
    action: "View events",
    category: "Events",
    description: "Gatherings and community moments that bring the ICLA family together.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Friends gathered outdoors",
    title: "Community in motion",
  },
  {
    action: "See facilities",
    category: "Facilities",
    description: "Spaces for reflection, learning, conversation, and community life.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Church interior with wooden pews",
    title: "A place to belong",
  },
] as const;

export function DesignSystemContent() {
  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        04 · Content
      </Typography>
      <Typography variant="h4">Cards</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Real MUI card building blocks for the Programs, Events, and Facilities
        sections in the About Us reference.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {portalCards.map((item, index) => (
          <Grid key={item.category} size={{ md: 4, xs: 12 }}>
            <Card
              elevation={index === 1 ? 2 : 0}
              sx={{ border: index === 1 ? 0 : 1, borderColor: "divider", height: "100%" }}
              variant={index === 1 ? undefined : "outlined"}
            >
              <CardMedia
                alt={item.imageAlt}
                component="img"
                image={item.image}
                sx={{
                  height: 160,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Stack spacing={1.25}>
                  <Chip color={index === 2 ? "warning" : "primary"} label={item.category} size="small" sx={{ alignSelf: "flex-start" }} />
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {item.description}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small">{item.action}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography color="text.secondary" variant="caption">
            outlined · quiet, structured content card
          </Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography color="text.secondary" variant="caption">
            elevation 2 · use sparingly to call attention to an item
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
