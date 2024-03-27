"use client";

import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import TokenSummary from "@/components/card/tokenSummary";
import { SystemReward } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { formatBN } from "@/utils/balance";
import BigNumber from "bignumber.js";

export default function RewardCard() {
  const { data } = useBasicData();
  const { collator = 0, treasury = 0 } = data?.rewards || {};

  return (
    <CardContainer icon={<SystemReward />}>
      <TokenSummary
        className="mb-[24px]"
        title="Block rewards"
        value={formatBN(new BigNumber(collator).plus(treasury).toFixed())}
      />
      <div className="flex flex-col">
        <DetailRow title="Collator" amount={formatBN(collator)} symbol="CFG" />
        <DetailRow title="Treasury" amount={formatBN(treasury)} symbol="CFG" />
      </div>
    </CardContainer>
  );
}
