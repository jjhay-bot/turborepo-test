"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const accordionExamples = [
  {
    details: "A concise answer can sit here without forcing every visitor to read it upfront.",
    title: "What makes an ICLA programme distinct?",
  },
  {
    details: "Use this for additional programme, event, or admissions context.",
    title: "Who can apply?",
  },
  {
    details: "This pattern keeps detailed information available but visually calm.",
    title: "Where can I find more information?",
  },
] as const;

const missionItems = [
  "Educates for competent service through theological reflection and formation.",
  "Promotes vocation and commitment to mission in a multicultural environment.",
  "Seeks gospel values expressed through compassionate service and friendship.",
  "Fosters openness to the transforming power of the Spirit.",
] as const;

export default function DesignSystemEditorialContent() {
  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        05 · Editorial content
      </Typography>
      <Typography variant="h4">Accordion and List</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Supporting components for detailed programme information and the Mission
        bullet points in the About Us reference.
      </Typography>

      <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ mt: 2 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, overflow: "hidden" }}>
          <Stack sx={{ p: 2, pb: 1 }}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
              Accordion
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Use for optional answers and supporting details.
            </Typography>
          </Stack>
          {accordionExamples.map((item, index) => (
            <Accordion defaultExpanded={index === 0} disableGutters key={item.title} elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 700 }} variant="body2">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" variant="body2">
                  {item.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>

        <Paper elevation={0} sx={{ border: 1, borderColor: "divider", flex: 1, p: 2 }}>
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            Mission list
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Use for a short, readable set of commitments or outcomes.
          </Typography>
          <List dense sx={{ mt: 1 }}>
            {missionItems.map((item) => (
              <ListItem alignItems="flex-start" disableGutters key={item}>
                <ListItemIcon sx={{ minWidth: 30, mt: 0.25 }}>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={item} slotProps={{ primary: { variant: "body2" } }} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Stack>
    </section>
  );
}
