"use client";

import { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

const alertExamples = [
  { severity: "info", text: "Informational alert", variant: "standard" },
  { severity: "success", text: "Success alert", variant: "outlined" },
  { severity: "warning", text: "Warning alert", variant: "filled" },
  { severity: "error", text: "Error alert", variant: "standard" },
] as const;

export default function DesignSystemFeedback() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        07 · Feedback and overlays
      </Typography>
      <Typography variant="h4">Alerts, notifications, and modal decisions</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Presentation samples only. Open the live examples to see the actual MUI
        behaviour; they do not submit, navigate, or save anything.
      </Typography>

      <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Alert
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Inline feedback within the page or form.
          </Typography>
          <Stack spacing={1} sx={{ mt: 1.5 }}>
            {alertExamples.map((alert) => (
              <Alert key={alert.severity} severity={alert.severity} variant={alert.variant}>
                {alert.text}
              </Alert>
            ))}
          </Stack>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Snackbar notification
          </Typography>
          <Typography color="text.secondary" variant="body2">
            A short, temporary confirmation after a completed action.
          </Typography>
          <Button onClick={() => setIsSnackbarOpen(true)} sx={{ mt: 1.5 }} variant="outlined">
            Show sample notification
          </Button>
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Dialog modal
          </Typography>
          <Typography color="text.secondary" variant="body2">
            A focused decision that needs confirmation before continuing.
          </Typography>
          <Button onClick={() => setIsDialogOpen(true)} sx={{ mt: 1.5 }} variant="contained">
            Open sample dialog
          </Button>
        </Paper>
      </Stack>

      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        autoHideDuration={4000}
        onClose={() => setIsSnackbarOpen(false)}
        open={isSnackbarOpen}
      >
        <Alert onClose={() => setIsSnackbarOpen(false)} severity="success" variant="filled">
          This is a sample success notification.
        </Alert>
      </Snackbar>

      <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen}>
        <DialogTitle>Sample confirmation dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use this pattern when a visitor needs to confirm a focused action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => setIsDialogOpen(false)} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
