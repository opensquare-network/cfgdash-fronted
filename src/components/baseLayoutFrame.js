"use client";

import tw from "tailwind-styled-components";
import ThemeModeProvider from "@/context/theme";

const TopPanel = tw.div`
  flex
  justify-around
  py-[48px]
  max-sm:py-[32px]
  max-sm:w-full
  bg-fillBgPrimary
  border-b
  border-strokeBorder
`;

const Main = tw.div`
  flex
  justify-around
  grow
  py-[32px]
  bg-fillBgPrimary
`;

const Content = tw.div`
  flex
  h-full
  w-full
  max-w-[1280px]
`;

export default function BaseLayout({ nav, themeMode, children }) {
  return (
    <ThemeModeProvider defaultThemeMode={themeMode}>
      <div className="flex flex-col w-screen h-screen">
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
