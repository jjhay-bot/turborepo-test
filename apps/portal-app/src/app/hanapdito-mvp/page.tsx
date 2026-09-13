import { readFile } from "node:fs/promises";
import path from "node:path";

const conceptPath = path.join(
  process.cwd(),
  "..",
  "..",
  ".docs",
  "hanapdito-mvp-concept.html",
);

export default async function HanapDitoMvpPage() {
  const conceptHtml = await readFile(conceptPath, "utf8");

  return (
    <iframe
      srcDoc={conceptHtml}
      title="HanapDito MVP build concept"
      style={{ border: 0, height: "100vh", width: "100%" }}
    />
  );
}
