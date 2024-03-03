import "@/app/globals.css";
import Nav from "@/components/client/Nav";
import SessionProvider from "@/components/client/SessionProvider";
import Footer from "@/components/server/Footer";
import { theme } from "@/libs/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "My Cool App",
  description: "So cool!!!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <SessionProvider session={session}>
              <Nav />
              {children}
              <Footer />
            </SessionProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
