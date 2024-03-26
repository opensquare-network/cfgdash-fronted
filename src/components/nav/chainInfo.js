import tw from "tailwind-styled-components";
import {
  LinkDiscord,
  LinkGithub,
  LinkTelegram,
  LinkTwitter,
  LinkWebsite,
  LogoSymbolCentrifuge,
} from "../icons";

const SocialLinkIconWrapper = tw.a`
  cursor-pointer
  [&_svg]:w-[20px]
  [&_svg]:h-[20px]
`;

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
        <SocialLinkIconWrapper href="" target="_blank">
          <LinkWebsite />
        </SocialLinkIconWrapper>
        <SocialLinkIconWrapper href="" target="_blank">
          <LinkTwitter />
        </SocialLinkIconWrapper>
        <SocialLinkIconWrapper href="" target="_blank">
          <LinkTelegram />
        </SocialLinkIconWrapper>
        <SocialLinkIconWrapper href="" target="_blank">
          <LinkDiscord />
        </SocialLinkIconWrapper>
        <SocialLinkIconWrapper href="" target="_blank">
          <LinkGithub />
        </SocialLinkIconWrapper>
      </div>
    </>
  );
}
