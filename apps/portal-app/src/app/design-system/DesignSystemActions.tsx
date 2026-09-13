"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";

const buttonVariants = ["contained", "outlined", "text"] as const;
const buttonColors = ["primary", "secondary", "success", "warning", "error", "info"] as const;
const buttonSizes = ["small", "medium", "large"] as const;

export default function DesignSystemActions() {
  return (
    <Stack spacing={4}>
      <Divider />

      <section>
        <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
          03 · Actions
        </Typography>
        <Typography variant="h4">Buttons</Typography>
        <Typography color="text.secondary">
          Use one clear primary action per area. Outlined and text buttons support
          lower-priority choices.
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <Paper elevation={0} sx={{ border: 1, borderColor: "divider", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Variant
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Choose priority before colour.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap", mt: 1.5, rowGap: 1.5 }}>
              {buttonVariants.map((variant) => (
                <Stack key={variant} spacing={0.75} sx={{ alignItems: "flex-start" }}>
                  <Typography color="text.secondary" variant="caption">
                    {variant}
                  </Typography>
                  <Button variant={variant}>Continue</Button>
                </Stack>
              ))}
            </Stack>
          </Paper>

          <Paper elevation={0} sx={{ border: 1, borderColor: "divider", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Theme colour
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Use primary for the main action. Reserve warning and error for a
              meaningful highlight or destructive action.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap", mt: 1.5, rowGap: 1.5 }}>
              {buttonColors.map((color) => (
                <Stack key={color} spacing={0.75} sx={{ alignItems: "flex-start" }}>
                  <Typography color="text.secondary" variant="caption">
                    {color}
                  </Typography>
                  <Button color={color} variant="contained">
                    Action
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Paper>

          <Paper elevation={0} sx={{ border: 1, borderColor: "divider", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Size and state
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap", mt: 1.5, rowGap: 1.5 }}>
              {buttonSizes.map((size) => (
                <Stack key={size} spacing={0.75} sx={{ alignItems: "flex-start" }}>
                  <Typography color="text.secondary" variant="caption">
                    {size}
                  </Typography>
                  <Button size={size} variant="contained">
                    Continue
                  </Button>
                </Stack>
              ))}
              <Stack spacing={0.75} sx={{ alignItems: "flex-start" }}>
                <Typography color="text.secondary" variant="caption">
                  disabled
                </Typography>
                <Button disabled variant="contained">
                  Continue
                </Button>
              </Stack>
              <Stack spacing={0.75} sx={{ alignItems: "flex-start" }}>
                <Typography color="text.secondary" variant="caption">
                  loading
                </Typography>
                <Button loading variant="contained">
                  Continue
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </section>

      <section>
        <Typography variant="h4">Icon buttons</Typography>
        <Typography color="text.secondary">
          Use an icon button only when the icon is universally recognisable. Add a
          tooltip when its meaning needs support.
        </Typography>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start", flexWrap: "wrap", rowGap: 2 }}>
            <Stack spacing={0.5} sx={{ alignItems: "center", minWidth: 56 }}>
              <Tooltip title="Search">
                <IconButton aria-label="Search">
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Typography color="text.secondary" variant="caption">default</Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ alignItems: "center", minWidth: 56 }}>
              <Tooltip title="Open navigation">
                <IconButton aria-label="Open navigation" color="primary">
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Typography color="text.secondary" variant="caption">primary</Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ alignItems: "center", minWidth: 56 }}>
              <Tooltip title="Continue">
                <IconButton aria-label="Continue" color="warning">
                  <ArrowForwardIcon />
                </IconButton>
              </Tooltip>
              <Typography color="text.secondary" variant="caption">warning</Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ alignItems: "center", minWidth: 56 }}>
              <Tooltip title="Close">
                <IconButton aria-label="Close" size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Typography color="text.secondary" variant="caption">small</Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ alignItems: "center", minWidth: 56 }}>
              <IconButton aria-label="Disabled action" disabled>
                <CloseIcon />
              </IconButton>
              <Typography color="text.secondary" variant="caption">disabled</Typography>
            </Stack>
          </Stack>
        </Paper>
      </section>

      <section>
        <Typography variant="h4">Chips</Typography>
        <Typography color="text.secondary">
          Chips label filters, categories, and compact statuses. They are not a
          replacement for primary actions.
        </Typography>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
              <Chip color="primary" label="Primary" />
              <Chip color="secondary" label="Secondary" />
              <Chip color="warning" label="Featured" />
              <Chip color="error" label="Attention" />
              <Chip label="Outlined" variant="outlined" />
              <Chip disabled label="Disabled" />
            </Stack>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
              <Chip label="Small chip" size="small" />
              <Chip label="Medium chip" size="medium" />
              <Chip label="Clickable chip" onClick={() => undefined} />
            </Stack>
          </Stack>
        </Paper>
      </section>
    </Stack>
  );
}
