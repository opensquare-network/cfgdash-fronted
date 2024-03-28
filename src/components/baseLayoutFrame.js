"use client";

import tw from "tailwind-styled-components";
import ThemeModeProvider from "@/context/theme";

const TopPanel = tw.div`
  flex
  justify-around
  py-[48px]
  max-sm:py-[32px]
  bg-fillBgPrimary
  border-b
  border-strokeBorder
`;

const Main = tw.div`
  flex
  justify-around
  grow
  py-[32px]
  bg-fillBgSecondary
`;

const Content = tw.div`
  flex
  w-full
  max-w-[1280px]
`;

export default function BaseLayout({ nav, themeMode, children }) {
  return (
    <ThemeModeProvider defaultThemeMode={themeMode}>
      <div className="flex flex-col sm:min-w-[1280px]">
        <TopPanel>
          <Content>{nav}</Content>
        </TopPanel>
        <Main>
          <Content>{children}</Content>
        </Main>
      </div>
    </ThemeModeProvider>
  );
}
