export default function Home() {
  const schoolPortalUrl =
    process.env.NEXT_PUBLIC_SCHOOL_PORTAL_URL ?? "http://localhost:3001";

  return (
    <main style={{ padding: "4rem", fontFamily: "Arial, sans-serif" }}>
      <p style={{ color: "#5d7bb7", fontWeight: 700 }}>DEPLOYMENT TEST</p>
      <h1>Library Admin</h1>
      <p>Staff workspace for managing books.</p>
      <p>
        <a href={schoolPortalUrl}>← Back to School Portal</a>
      </p>
    </main>
  );
}
