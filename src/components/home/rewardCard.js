"use client";

import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import TokenSummary from "@/components/card/tokenSummary";
import { SystemReward } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { formatBN } from "@/utils/balance";

export default function RewardCard() {
  const { rewards } = useBasicData();
  const { total = 0, collator = 0, treasury = 0 } = rewards;

  return (
    <CardContainer icon={<SystemReward />}>
      <TokenSummary
        className="mb-[24px]"
        title="Block rewards"
        value={formatBN(total)}
      />
      <div className="flex flex-col">
        <DetailRow title="Collator" amount={formatBN(collator)} symbol="CFG" />
        <DetailRow title="Treasury" amount={formatBN(treasury)} symbol="CFG" />
      </div>
    </CardContainer>
  );
}
