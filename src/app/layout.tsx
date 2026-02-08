import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box, CssBaseline } from "@mui/material";

import { Footer, Header } from "@/components/layout";

import theme from "../theme";

import { WebSiteJson } from "./web_site_json";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Sean Johnson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <Box
        component="body"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box flexGrow={1}>{children}</Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <WebSiteJson />
      </Box>
    </html>
  );
}
