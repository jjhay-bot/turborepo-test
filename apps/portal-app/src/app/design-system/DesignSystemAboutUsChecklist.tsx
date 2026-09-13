import {
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const schoolPortalAreas = [
  {
    area: "Top menu",
    components: ["AppBar", "Toolbar", "Link", "Drawer"],
    note: "Drawer is the compact mobile navigation.",
  },
  {
    area: "Hero",
    components: ["Container", "Typography", "Stack / Grid", "Next Image"],
    note: "Image and brush artwork are custom assets, not MUI components.",
  },
  {
    area: "Events, Programs, Facilities",
    components: ["Card", "CardMedia", "CardContent", "Typography"],
    note: "One reusable content-card pattern with different content.",
  },
  {
    area: "Vision and Mission",
    components: ["Typography", "Divider", "Stack / Grid"],
    note: "Editorial content sections with long-form copy.",
  },
  {
    area: "Footer and contact",
    components: ["Box", "Stack", "Link", "Typography"],
    note: "Contact details, logo, and utility links.",
  },
  {
    area: "Location map",
    components: ["Embedded map / iframe"],
    note: "An external map embed; MUI provides only its surrounding layout.",
  },
  {
    area: "Brush strokes and curves",
    components: ["Custom CSS / asset"],
    note: "Decorative visual treatment outside the MUI component set.",
  },
] as const;

const librarySystemAreas = [
  {
    area: "Staff navigation",
    components: ["AppBar", "Drawer", "List", "ListItemButton"],
    note: "A staff workspace shell with focused navigation.",
  },
  {
    area: "Library overview",
    components: ["Card", "Typography", "Stack / Grid"],
    note: "Summary metrics and quick operational context.",
  },
  {
    area: "Book catalogue",
    components: ["Table", "Checkbox", "Chip", "Pagination"],
    note: "The primary browsing and bulk-selection pattern.",
  },
  {
    area: "Search and filters",
    components: ["TextField", "Autocomplete", "Select", "Chip"],
    note: "Find books, refine results, and show active filters.",
  },
  {
    area: "Book actions",
    components: ["Button", "IconButton", "Menu", "Dialog"],
    note: "Create, edit, inspect, or remove a book through clear actions.",
  },
  {
    area: "Status feedback",
    components: ["Alert", "Snackbar", "CircularProgress"],
    note: "Communicate saving, success, errors, and loading states.",
  },
] as const;

type ReferenceArea = (typeof schoolPortalAreas)[number] | (typeof librarySystemAreas)[number];

function ReferenceChecklistTable({ areas, label }: { areas: readonly ReferenceArea[]; label: string }) {
  return (
    <Paper elevation={0} sx={{ border: 1, borderColor: "divider", mt: 2 }}>
      <TableContainer>
        <Table aria-label={label}>
          <TableHead>
            <TableRow>
              <TableCell>Page area</TableCell>
              <TableCell>What we need</TableCell>
              <TableCell>Implementation note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {areas.map((item) => (
              <TableRow key={item.area}>
                <TableCell sx={{ fontWeight: 700 }}>{item.area}</TableCell>
                <TableCell>
                  {item.components.map((component) => (
                    <Chip key={component} label={component} size="small" sx={{ mr: 0.75, mb: 0.75 }} />
                  ))}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{item.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export function DesignSystemAboutUsChecklist() {
  return (
    <section>
      <Divider sx={{ mb: 4 }} />
      <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
        Product references
      </Typography>
      <Typography variant="h4">What the drafts need</Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
        Practical checklists from the current product drafts. Both draw from this one
        shared MUI catalogue, while their page patterns remain distinct.
      </Typography>

      <Typography sx={{ mt: 3 }} variant="h5">School Portal reference</Typography>
      <Typography color="text.secondary">About Us wireframe</Typography>
      <ReferenceChecklistTable areas={schoolPortalAreas} label="School Portal component checklist" />

      <Typography sx={{ mt: 4 }} variant="h5">Library System reference</Typography>
      <Typography color="text.secondary">Library dashboard draft</Typography>
      <ReferenceChecklistTable areas={librarySystemAreas} label="Library System component checklist" />
    </section>
  );
}
