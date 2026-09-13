import { Container, Stack, Typography } from "@mui/material";
import { DesignSystemAboutUsChecklist } from "./DesignSystemAboutUsChecklist";
import DesignSystemActions from "./DesignSystemActions";
import { DesignSystemContent } from "./DesignSystemContent";
import DesignSystemEditorialContent from "./DesignSystemEditorialContent";
import DesignSystemFeedback from "./DesignSystemFeedback";
import DesignSystemFormFields from "./DesignSystemFormFields";
import DesignSystemBrowsingAndIdentity from "./DesignSystemBrowsingAndIdentity";
import DesignSystemDataAndProgress from "./DesignSystemDataAndProgress";
import DesignSystemMediaAndLoading from "./DesignSystemMediaAndLoading";
import DesignSystemDiscovery from "./DesignSystemDiscovery";
import DesignSystemTuner from "./tuner/DesignSystemTuner";
import { DesignSystemFoundations } from "./DesignSystemFoundations";

export default function DesignSystemPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { md: 8, xs: 4 } }}>
      <Stack spacing={5}>
        <header>
          <Typography color="primary" sx={{ fontWeight: 700 }} variant="overline">
            ICLA Design System
          </Typography>
          <Typography variant="h2">Component preview</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 640 }}>
            A living reference for shared MUI defaults before we use them in
            School Portal and Library Admin.
          </Typography>
        </header>
        <DesignSystemTuner>
          <DesignSystemFoundations />
          <DesignSystemActions />
          <DesignSystemContent />
          <DesignSystemEditorialContent />
          <DesignSystemFormFields />
          <DesignSystemFeedback />
          <DesignSystemBrowsingAndIdentity />
        <DesignSystemDataAndProgress />
        <DesignSystemMediaAndLoading />
        <DesignSystemDiscovery />
        <DesignSystemAboutUsChecklist />
        </DesignSystemTuner>
      </Stack>
    </Container>
  );
}
