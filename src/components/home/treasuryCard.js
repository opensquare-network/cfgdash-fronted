"use client";

import BigNumber from "bignumber.js";
import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { Ring, SystemTreasury } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { cn } from "@/utils";
import { formatBN } from "@/utils/balance";
import { Link } from "../styled";

function DetailRow({ className, symbol, tokenName, value, fiatValue }) {
  return (
    <div
      className={cn(
        "flex py-[8px] justify-between border-b border-strokeDivider",
        className
      )}
    >
      <div className="flex gap-[8px]">
        <Ring className="my-[2px]" />
        <div className="flex flex-col gap-[4px]">
          <span className="text14Regular text-textPrimary">{symbol}</span>
          <span className="text12Regular text-textSecondary">{tokenName}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end">
        <span className="text14Semibold text-textPrimary">{value}</span>
        <span className="text12Regular text-textSecondary">≈${fiatValue}</span>
      </div>
    </div>
  );
}

export default function TreasuryCard() {
  const { treasuryTokens = [] } = useBasicData();

  const tokens = treasuryTokens.reduce((acc, { token, value, price }) => {
    const fiatValue = new BigNumber(price).times(value).toFixed();
    acc[token] = {
      value,
      fiatValue: new BigNumber(price).times(value).toFixed(),
    };
    acc["all"] = {
      fiatValue: new BigNumber(acc["all"]?.fiatValue || 0)
        .plus(fiatValue)
        .toFixed(),
    };
    return acc;
  }, {});

  return (
    <CardContainer
      className="w-[400px] max-sm:w-full"
      icon={<SystemTreasury />}
    >
      <ValueSummary
        className="mb-[24px]"
        title="Funds available in treasury"
        value={`$${formatBN(tokens.all?.fiatValue || 0)}`}
      />
      <div className="flex flex-col mb-[16px]">
        <DetailRow
          className="[&_svg_path]:fill-fillChartPrimary"
          unit="CFG"
          tokenName="Centrifuge"
          value={formatBN(tokens.cfg?.value || 0, 3)}
          fiatValue={formatBN(tokens.cfg?.fiatValue || 0, 3)}
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartSecondary"
          symbol="USDC"
          tokenName="USD Coin"
          value={formatBN(tokens.usdc?.value || 0, 3)}
          fiatValue={formatBN(tokens.usdc?.fiatValue || 0, 3)}
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartTertiary"
          symbol="DOT"
          tokenName="Polkadot"
          value={formatBN(tokens.dot?.value || 0, 5)}
          fiatValue={formatBN(tokens.dot?.fiatValue || 0, 3)}
        />
        <DetailRow
          className="[&_svg_path]:fill-fillChartQuaternary"
          symbol="GLMR"
          tokenName="Moonbeam"
          value={formatBN(tokens.glmr?.value || 0, 5)}
          fiatValue={formatBN(tokens.glmr?.fiatValue || 0, 4)}
        />
      </div>
      <div className="flex mx-[22px] gap-[16px]">
        <Link
          href="https://centrifuge.subscan.io/account/4dpEcgqJRyJK3J8Es6v8ZfVntV7c64Ysgcjd4hYwyGoFPWbg"
          target="_blank"
        >
          Subscan
        </Link>
        <Link href="https://centrifuge.dotreasury.com/#/" target="_blank">
          doTreasury
        </Link>
      </div>
    </CardContainer>
  );
}
