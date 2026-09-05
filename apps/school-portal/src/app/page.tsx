export default function Home() {
  const adminUrl =
    process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

  return (
    <main style={{ padding: "4rem", fontFamily: "Arial, sans-serif" }}>
      <p style={{ color: "#5d7bb7", fontWeight: 700 }}>DEPLOYMENT TEST</p>
      <h1>School Portal</h1>
      <p>Public website for school information, programs, news, and events.</p>
      <p>
        <a href={adminUrl}>Library staff sign in →</a>
      </p>
      <hr style={{ margin: "2rem 0" }} />
      <section aria-labelledby="documentation-title">
        <p style={{ color: "#5d7bb7", fontWeight: 700 }}>DOCUMENTATION</p>
        <h2 id="documentation-title">Project references</h2>
        <p>
          <a href="/project-setup">View project setup guide →</a>
        </p>
        <p>
          <a href="/deployment">View deployment guide →</a>
        </p>
      </section>
    </main>
  );
}
