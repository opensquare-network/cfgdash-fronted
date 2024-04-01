import { LinkWebsite, LogoSymbolCentrifuge } from "../icons";
import SocialIconLink, { SocialIconLinkWrapper } from "../socialIcon";
import ThemeToggle from "./themeToggle";

export default function ChainInfo() {
  return (
    <>
      <div className="flex justify-between">
        <LogoSymbolCentrifuge className="w-[64px] h-[64px]" />
        <ThemeToggle className="hidden max-sm:flex" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text40Semibold text-textPrimary">Centrifuge</span>
        <span className="text16Regular text-textSecondary">Dashboard</span>
      </div>
      <div className="flex gap-[12px]">
        <SocialIconLinkWrapper href="https://centrifuge.io/">
          <LinkWebsite />
        </SocialIconLinkWrapper>
        <SocialIconLink href="https://twitter.com/centrifuge" />
        <SocialIconLink href="https://t.me/centrifuge_chat" />
        <SocialIconLink href="https://discord.com/invite/yEzyUq5gxF" />
        <SocialIconLink href="https://github.com/centrifuge/" />
      </div>
    </>
  );
}
