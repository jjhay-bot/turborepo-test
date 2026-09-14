import "./globals.css";

export const metadata = {
  title: "Coffee Break Reads",
  description: "One story. One song. One tiny thought to carry into the day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
