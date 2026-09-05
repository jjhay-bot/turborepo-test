const userAgent = process.env.npm_config_user_agent || "";

if (!userAgent.startsWith("pnpm/")) {
  console.error(
    "\nThis repository uses pnpm. Run: corepack enable && pnpm install\n",
  );
  process.exit(1);
}
