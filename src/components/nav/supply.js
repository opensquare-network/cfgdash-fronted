"use client";

import { useBasicData } from "@/context/basicData";
import DetailRow from "../card/detailRow";
import TokenSummary from "../card/tokenSummary";
import { formatBN } from "@/utils/balance";
import BigNumber from "bignumber.js";

function TotalSupply() {
  const { supply } = useBasicData();
  const { total = 0 } = supply;

  return <TokenSummary title="Total supply" value={formatBN(total)} />;
}

export default function Supply() {
  const { supply } = useBasicData();
  const { total = 0, wrapped = 0 } = supply;

  return (
    <>
      <TotalSupply />
      <div className="flex flex-col">
        <DetailRow
          title="Native CFG"
          amount={formatBN(new BigNumber(total).minus(wrapped).toFixed())}
          symbol="CFG"
        />
        <DetailRow
          title="Wrapped CFG"
          amount={formatBN(wrapped)}
          symbol="CFG"
        />
      </div>
    </>
  );
}
