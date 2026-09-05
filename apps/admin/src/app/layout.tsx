import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { IclaThemeProvider } from "./IclaThemeProvider";

export const metadata: Metadata = {
  title: "Library Admin",
  description: "ICLA library management system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <IclaThemeProvider>{children}</IclaThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
