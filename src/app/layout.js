import "./globals.css";
import StyledComponentsRegistry from "@/components/styledComponentsRegistry";
import Head from "./head";
import StoreProvider from "./storeProvider";
import BaseLayout from "@/components/baseLayoutFrame";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "@/utils";
import { SITE_URL } from "@/utils/consts";
import AppProgressBar from "@/components/appProgressBar";
import { getThemeMode } from "@/utils/server/cookies";
import Nav from "@/components/nav";
import { BasicDataProvider } from "@/context/basicData";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export function generateMetadata() {
  return {
    metadataBase: new URL(SITE_URL),
    title: "Centrifuge Dashboard",
    description:
      "Explore Centrifuge’s statistics, including total issuance, token price, holders, governance, and more.",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      siteName: "Centrifuge Dashboard",
    },
  };
}

export default async function RootLayout({ children }) {
  const themeMode = getThemeMode();

  return (
    <html
      lang="en"
      className={cn(inter.className, inter.variable, montserrat.variable)}
    >
      <Head />
      <body>
        <AppProgressBar>
          <StoreProvider>
            <StyledComponentsRegistry>
              <BasicDataProvider>
                <BaseLayout nav={<Nav />} themeMode={themeMode}>
                  {children}
                </BaseLayout>
              </BasicDataProvider>
            </StyledComponentsRegistry>
          </StoreProvider>
        </AppProgressBar>
      </body>
    </html>
  );
}
