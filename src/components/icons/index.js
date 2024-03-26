import { cn } from "@/utils";
import LogoSymbolCentrifugeDark from "@/imgs/icons/logoSymbolCentrifugeDark.svg";
import LogoSymbolCentrifugeLight from "@/imgs/icons/logoSymbolCentrifugeLight.svg";
import LinkWebsite from "@/imgs/icons/linkWebsite.svg";
import LinkDiscord from "@/imgs/icons/linkDiscord.svg";
import LinkTelegram from "@/imgs/icons/linkTelegram.svg";
import LinkTwitter from "@/imgs/icons/linkTwitter.svg";
import LinkGithub from "@/imgs/icons/linkGithub.svg";
import LinkCoingecko from "@/imgs/icons/linkCoingecko.svg";
import LinkCoinmarketcap from "@/imgs/icons/linkCoinmarketcap.svg";

function Icon({ DarkIcon, LightIcon, className = "" }) {
  return (
    <>
      <DarkIcon className={cn("hidden dark:inline-block", className)} />
      <LightIcon className={cn("dark:hidden", className)} />
    </>
  );
}

const LogoSymbolCentrifuge = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={LogoSymbolCentrifugeDark}
    LightIcon={LogoSymbolCentrifugeLight}
  />
);

export {
  LogoSymbolCentrifuge,
  LinkWebsite,
  LinkDiscord,
  LinkTelegram,
  LinkTwitter,
  LinkGithub,
  LinkCoingecko,
  LinkCoinmarketcap,
};
