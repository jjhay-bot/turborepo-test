"use client";

import { useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

const walkthroughSteps = [
  {
    description: "Use the navigation to move between the most important areas.",
    title: "Find your way",
  },
  {
    description: "Use filters and search to narrow a long list of information.",
    title: "Focus on what matters",
  },
  {
    description: "The system will confirm completed actions with a notification.",
    title: "You are ready",
  },
] as const;

export default function DesignSystemDiscovery() {
  const [walkthroughAnchor, setWalkthroughAnchor] = useState<HTMLElement | null>(null);
  const [walkthroughStep, setWalkthroughStep] = useState(0);
  const isWalkthroughOpen = Boolean(walkthroughAnchor);
  const activeStep = walkthroughSteps[walkthroughStep];

  function closeWalkthrough() {
    setWalkthroughAnchor(null);
    setWalkthroughStep(0);
  }

  function moveToNextStep() {
    if (walkthroughStep === walkthroughSteps.length - 1) {
      closeWalkthrough();
      return;
    }

    setWalkthroughStep((step) => step + 1);
  }

  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        11 · Guidance and discovery
      </Typography>
      <Typography variant="h4">Tooltip, feature discovery, and walkthrough</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Small, optional hints that help people notice a feature without making the
        main interface feel busy.
      </Typography>

      <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Tooltip
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Hover or focus for a short explanation of an otherwise recognisable icon.
          </Typography>
          <Tooltip title="Show more information">
            <IconButton aria-label="Show more information" color="primary" sx={{ mt: 1.5 }}>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Feature discovery
          </Typography>
          <Typography color="text.secondary" variant="body2">
            A small, temporary cue for a newly added or changed feature.
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Badge badgeContent="New" color="warning">
              <Button startIcon={<AutoAwesomeIcon />} variant="outlined">
                View reports
              </Button>
            </Badge>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Walkthrough
          </Typography>
          <Typography color="text.secondary" variant="body2">
            A short guided sequence for a genuinely unfamiliar workflow.
          </Typography>
          <Button
            onClick={(event) => setWalkthroughAnchor(event.currentTarget)}
            startIcon={<AutoAwesomeIcon />}
            sx={{ mt: 1.5 }}
            variant="contained"
          >
            Start walkthrough
          </Button>
        </Paper>
      </Stack>

      <Popover
        anchorEl={walkthroughAnchor}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        onClose={closeWalkthrough}
        open={isWalkthroughOpen}
      >
        <Stack spacing={1.5} sx={{ maxWidth: 300, p: 2.5 }}>
          <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
            Step {walkthroughStep + 1} of {walkthroughSteps.length}
          </Typography>
          <Typography variant="h6">{activeStep.title}</Typography>
          <Typography color="text.secondary" variant="body2">
            {activeStep.description}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
            <Button disabled={walkthroughStep === 0} onClick={() => setWalkthroughStep((step) => step - 1)}>
              Back
            </Button>
            <Button onClick={moveToNextStep} variant="contained">
              {walkthroughStep === walkthroughSteps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Stack>
        </Stack>
      </Popover>
    </section>
  );
}
