import { readFile } from "node:fs/promises";
import path from "node:path";

const overviewPath = path.join(
  process.cwd(),
  "..",
  "..",
  ".docs",
  "turborepo-overview.html",
);

export default async function ProjectSetupPage() {
  const overviewHtml = await readFile(overviewPath, "utf8");

  return (
    <iframe
      srcDoc={overviewHtml}
      title="Project setup guide"
      style={{ border: 0, height: "100vh", width: "100%" }}
    />
  );
}
