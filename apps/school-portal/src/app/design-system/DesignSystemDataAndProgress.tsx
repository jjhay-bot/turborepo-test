"use client";

import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const tableRows = [
  { activity: "Orientation request", owner: "Maria Aquino", status: "Available", statusColor: "success" },
  { activity: "Programme enquiry", owner: "John dela Cruz", status: "In progress", statusColor: "warning" },
  { activity: "Member update", owner: "Aisha Malik", status: "Needs attention", statusColor: "error" },
] as const;

const steps = ["Choose details", "Review information", "Complete"];

export default function DesignSystemDataAndProgress() {
  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        09 · Data and progress
      </Typography>
      <Typography variant="h4">Table and Stepper</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Shared patterns for compact records and guided multi-step tasks. The
        labels are samples, not a real workflow or dataset.
      </Typography>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2 }}>
        <Stack direction={{ sm: "row", xs: "column" }} spacing={1} sx={{ alignItems: { sm: "center", xs: "flex-start" }, justifyContent: "space-between", p: 2 }}>
          <Stack spacing={0.25}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Data table with selection
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Use for structured records where staff may take a bulk action.
            </Typography>
          </Stack>
          <Button disabled size="small" variant="outlined">
            Bulk action
          </Button>
        </Stack>
        <TableContainer>
          <Table aria-label="Sample data table" size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox slotProps={{ input: { "aria-label": "Select all rows" } }} />
                </TableCell>
                <TableCell>Activity</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row, index) => (
                <TableRow hover key={row.activity}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      defaultChecked={index === 0}
                      slotProps={{ input: { "aria-label": `Select ${row.activity}` } }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>{row.activity}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>
                    <Chip color={row.statusColor} label={row.status} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: { sm: 3, xs: 2 } }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          Stepper
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Use when a person must complete a short sequence in order, such as a
          registration or staff task.
        </Typography>
        <Stepper activeStep={1} alternativeLabel sx={{ mt: 3 }}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </section>
  );
}
