"use client";

import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Autocomplete,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const fieldVariants = ["outlined", "filled", "standard"] as const;
const programmeOptions = ["Master's programme", "Short course", "Upcoming event", "Library orientation"];

export default function DesignSystemFormFields() {
  const [iconDate, setIconDate] = useState(dayjs("2026-08-21"));
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(null);

  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        06 · Form fields
      </Typography>
      <Typography variant="h4">Inputs and choice controls</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Real MUI fields for future sign-in, enquiries, registrations, and staff
        workflows. These are visual samples only and do not submit anything.
      </Typography>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          TextField variants
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Outlined is the recommended default. Filled and standard are available
          when a page needs a different visual density.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          {fieldVariants.map((variant) => (
            <Grid key={variant} size={{ md: 4, xs: 12 }}>
              <TextField defaultValue="Sample value" fullWidth label={variant} variant={variant} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Paper elevation={0} sx={{ border: 1, borderColor: "divider", height: "100%", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Size and state
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 1.5 }}>
              <TextField fullWidth label="Small field" size="small" />
              <TextField fullWidth label="Medium field" size="medium" />
              <TextField error fullWidth helperText="This field needs attention." label="Error state" required />
              <TextField disabled defaultValue="Unavailable" fullWidth label="Disabled state" />
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Paper elevation={0} sx={{ border: 1, borderColor: "divider", height: "100%", p: 2 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Select field
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Use when a visitor chooses one option from a defined set.
            </Typography>
            <TextField defaultValue="programme" fullWidth label="Select a programme" select sx={{ mt: 1.5 }}>
              <MenuItem value="programme">Master&apos;s programme</MenuItem>
              <MenuItem value="course">Short course</MenuItem>
              <MenuItem value="event">Upcoming event</MenuItem>
            </TextField>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          Autocomplete
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Use when a list is long enough that searching is more helpful than
          scrolling through a Select menu.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid size={{ md: 6, xs: 12 }}>
            <Autocomplete
              defaultValue="Master's programme"
              options={programmeOptions}
              renderInput={(params) => <TextField {...params} label="Single select" />}
            />
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Autocomplete
              defaultValue={["Master's programme", "Short course"]}
              multiple
              options={programmeOptions}
              renderInput={(params) => <TextField {...params} label="Multiple select" />}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          Date Picker
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Use a calendar picker when the date needs to be precise, such as an
          event date, return date, or appointment.
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2} sx={{ mt: 0.5 }}>
            <Grid size={{ md: 4, xs: 12 }}>
              <DatePicker defaultValue={dayjs("2026-08-21")} label="Event date" />
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <DatePicker
                defaultValue={dayjs("2026-08-21")}
                label="Compact date"
                slotProps={{ textField: { size: "small" } }}
              />
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <DatePicker defaultValue={dayjs("2026-08-21")} disabled label="Disabled date" />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 1.5 }}>
            <Tooltip title="Pick a date">
              <IconButton
                aria-label="Pick a date"
                color="primary"
                onClick={(event) => setDatePickerAnchor(event.currentTarget)}
              >
                <CalendarMonthIcon />
              </IconButton>
            </Tooltip>
            <Typography color="text.secondary" variant="caption">
              Icon-only date trigger · selected: {iconDate.format("MMM D, YYYY")}
            </Typography>
          </Stack>
          <Popover
            anchorEl={datePickerAnchor}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            onClose={() => setDatePickerAnchor(null)}
            open={Boolean(datePickerAnchor)}
          >
            <DateCalendar
              onChange={(value) => {
                if (value) {
                  setIconDate(value);
                }

                setDatePickerAnchor(null);
              }}
              value={iconDate}
            />
          </Popover>
        </LocalizationProvider>
      </Paper>

      <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2, p: 2 }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
          Choice controls
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Checkbox permits several choices. Radio selects one. Switch changes an
          immediate on/off preference.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid size={{ md: 4, xs: 12 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Receive updates" />
              <FormControlLabel control={<Checkbox />} label="Request a callback" />
              <FormControlLabel control={<Checkbox disabled />} label="Unavailable option" />
            </FormGroup>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <RadioGroup defaultValue="email" name="contact-method">
              <FormControlLabel control={<Radio />} label="Email" value="email" />
              <FormControlLabel control={<Radio />} label="Phone" value="phone" />
              <FormControlLabel control={<Radio disabled />} label="In person" value="in-person" />
            </RadioGroup>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Stack>
              <FormControlLabel control={<Switch defaultChecked />} label="Notifications on" />
              <FormControlLabel control={<Switch />} label="Notifications off" />
              <FormControlLabel control={<Switch disabled />} label="Unavailable setting" />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}
