"use client";

import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import ValueSummary from "@/components/card/valueSummary";
import { SystemHolder } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { formatBN } from "@/utils/balance";

export default function HolderCard() {
  const { holders } = useBasicData();
  const { all = 0, whales = 0, dolphins = 0 } = holders;

  return (
    <CardContainer icon={<SystemHolder />}>
      <ValueSummary
        className="mb-[24px]"
        title="Total token holders"
        value={formatBN(all)}
      />
      <div className="flex flex-col">
        <DetailRow title="Whales" amount={formatBN(whales)} />
        <DetailRow title="Dolphins" amount={formatBN(dolphins)} />
      </div>
    </CardContainer>
  );
}
