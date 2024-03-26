import {
  LinkDiscord,
  LinkGithub,
  LinkTelegram,
  LinkTwitter,
  LinkWebsite,
  LogoSymbolCentrifuge,
} from "../icons";
import SocialLinkIcon from "../socialLinkIcon";

export default function ChainInfo() {
  return (
    <>
      <div>
        <LogoSymbolCentrifuge className="w-[64px] h-[64px]" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text40Semibold text-textPrimary">Centrifuge</span>
        <span className="text16Regular text-textSecondary">
          Token Dashbaord
        </span>
      </div>
      <div className="flex gap-[12px]">
        <SocialLinkIcon href="">
          <LinkWebsite />
        </SocialLinkIcon>
        <SocialLinkIcon href="">
          <LinkTwitter />
        </SocialLinkIcon>
        <SocialLinkIcon href="">
          <LinkTelegram />
        </SocialLinkIcon>
        <SocialLinkIcon href="">
          <LinkDiscord />
        </SocialLinkIcon>
        <SocialLinkIcon href="">
          <LinkGithub />
        </SocialLinkIcon>
      </div>
    </>
  );
}
