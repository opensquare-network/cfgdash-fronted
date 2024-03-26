import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { Ring, SystemTreasury } from "@/components/icons";
import { cn } from "@/utils";
import tw from "tailwind-styled-components";

const Link = tw.a`text-textHighlight text14Semibold`;

function DetailRow({ className, symbol, tokenName, value, fiatValue }) {
  return (
    <div className={cn("flex py-[8px] justify-between", className)}>
      <div className="flex gap-[8px]">
        <Ring className="my-[2px]" />
        <div className="flex flex-col gap-[4px]">
          <span className="text14Regular text-textPrimary">{symbol}</span>
          <span className="text12Regular text-textSecondary">{tokenName}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="text14Semibold text-textPrimary">{value}</span>
        <span className="text12Regular text-textSecondary">${fiatValue}</span>
      </div>
    </div>
  );
}

export default function TreasuryCard() {
  return (
    <CardContainer
      className="w-[400px] max-sm:w-full"
      icon={<SystemTreasury />}
    >
      <ValueSummary
        className="mb-[24px]"
        title="Funds available in treasury"
        value="$1,823,456"
      />
      <div className="flex flex-col mb-[16px]">
        <DetailRow
          className="[&_svg_path]:fill-fillChartPrimary"
          symbol="CFG"
          tokenName="Centrifuge"
          value="1,000,000"
          fiatValue="1,000,000"
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartSecondary"
          symbol="USDC"
          tokenName="USD Coin"
          value="1,000,000"
          fiatValue="1,000,000"
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartTertiary"
          symbol="DOT"
          tokenName="Polkadot"
          value="1,000,000"
          fiatValue="1,000,000"
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartQuaternary"
          symbol="GLMR"
          tokenName="Moonbeam"
          value="1,000,000"
          fiatValue="1,000,000"
        />
      </div>
      <div className="flex mx-[22px] gap-[16px]">
        <Link href="" target="_blank">
          Subscan
        </Link>
        <Link href="" target="_blank">
          doTreasury
        </Link>
      </div>
    </CardContainer>
  );
}
