import { readFile } from "node:fs/promises";
import path from "node:path";

const deploymentGuidePath = path.join(
  process.cwd(),
  "..",
  "..",
  ".docs",
  "deploying-our-monorepo.html",
);

export default async function DeploymentPage() {
  const deploymentGuideHtml = await readFile(deploymentGuidePath, "utf8");

  return (
    <iframe
      srcDoc={deploymentGuideHtml}
      title="Deployment guide"
      style={{ border: 0, height: "100vh", width: "100%" }}
    />
  );
}
