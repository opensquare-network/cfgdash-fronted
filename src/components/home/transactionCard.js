"use client";

import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { SystemTransaction } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { useDailyExtrinsics } from "@/context/dailyExtrinsics";
import { formatBN } from "@/utils/balance";

export default function TransactionCard() {
  const { signedExtrinsicCount = 0 } = useBasicData();
  const dailyExtrinsics = useDailyExtrinsics();
  console.log(dailyExtrinsics);

  return (
    <CardContainer
      className="w-[400px] max-sm:w-full"
      icon={<SystemTransaction />}
    >
      <ValueSummary
        className="mb-[24px]"
        title="Transaction"
        value={formatBN(signedExtrinsicCount)}
      />
    </CardContainer>
  );
}
