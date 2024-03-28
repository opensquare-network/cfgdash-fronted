"use client";

import BigNumber from "bignumber.js";
import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import TokenSummary from "@/components/card/tokenSummary";
import { SystemGovernance } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { formatBN } from "@/utils/balance";

export default function GovernanceCard() {
  const { governanceToken = {} } = useBasicData();
  const { onChain = 0, offChain = 0 } = governanceToken;

  return (
    <CardContainer icon={<SystemGovernance />}>
      <TokenSummary
        className="mb-[24px]"
        title="Tokens used in governance"
        value={formatBN(onChain)}
      />
      <div className="flex flex-col">
        <DetailRow title="On-chain" amount={formatBN(onChain)} unit="CFG" />
        <DetailRow title="Off-chain" amount={formatBN(offChain)} unit="CFG" />
      </div>
    </CardContainer>
  );
}
