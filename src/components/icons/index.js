import { cn } from "@/utils";
import LogoSymbolCentrifugeDark from "@/imgs/icons/logoSymbolCentrifugeDark.svg";
import LogoSymbolCentrifugeLight from "@/imgs/icons/logoSymbolCentrifugeLight.svg";
import SystemPriceDark from "@/imgs/icons/systemPriceDark.svg";
import SystemPriceLight from "@/imgs/icons/systemPriceLight.svg";
import SystemTransactionDark from "@/imgs/icons/systemTransactionDark.svg";
import SystemTransactionLight from "@/imgs/icons/systemTransactionLight.svg";
import SystemHolderDark from "@/imgs/icons/systemHolderDark.svg";
import SystemHolderLight from "@/imgs/icons/systemHolderLight.svg";
import SystemRewardDark from "@/imgs/icons/systemRewardDark.svg";
import SystemRewardLight from "@/imgs/icons/systemRewardLight.svg";
import SystemGovernanceDark from "@/imgs/icons/systemGovernanceDark.svg";
import SystemGovernanceLight from "@/imgs/icons/systemGovernanceLight.svg";
import SystemTreasuryDark from "@/imgs/icons/systemTreasuryDark.svg";
import SystemTreasuryLight from "@/imgs/icons/systemTreasuryLight.svg";
import SystemProposalDark from "@/imgs/icons/systemProposalDark.svg";
import SystemProposalLight from "@/imgs/icons/systemProposalLight.svg";
import LinkWebsite from "@/imgs/icons/linkWebsite.svg";
import LinkDiscord from "@/imgs/icons/linkDiscord.svg";
import LinkTelegram from "@/imgs/icons/linkTelegram.svg";
import LinkTwitter from "@/imgs/icons/linkTwitter.svg";
import LinkGithub from "@/imgs/icons/linkGithub.svg";
import LinkCoingecko from "@/imgs/icons/linkCoingecko.svg";
import LinkCoinmarketcap from "@/imgs/icons/linkCoinmarketcap.svg";
import ThemeDark from "@/imgs/icons/themeDark.svg";
import Ring from "@/imgs/icons/ring.svg";

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

const SystemPrice = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemPriceDark}
    LightIcon={SystemPriceLight}
  />
);

const SystemTransaction = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemTransactionDark}
    LightIcon={SystemTransactionLight}
  />
);

const SystemHolder = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemHolderDark}
    LightIcon={SystemHolderLight}
  />
);

const SystemReward = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemRewardDark}
    LightIcon={SystemRewardLight}
  />
);

const SystemGovernance = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemGovernanceDark}
    LightIcon={SystemGovernanceLight}
  />
);

const SystemTreasury = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemTreasuryDark}
    LightIcon={SystemTreasuryLight}
  />
);

const SystemProposal = ({ className }) => (
  <Icon
    className={className}
    DarkIcon={SystemProposalDark}
    LightIcon={SystemProposalLight}
  />
);

export {
  LogoSymbolCentrifuge,
  SystemPrice,
  SystemTransaction,
  SystemHolder,
  SystemReward,
  SystemGovernance,
  SystemTreasury,
  SystemProposal,
  LinkWebsite,
  LinkDiscord,
  LinkTelegram,
  LinkTwitter,
  LinkGithub,
  LinkCoingecko,
  LinkCoinmarketcap,
  ThemeDark,
  Ring,
};
