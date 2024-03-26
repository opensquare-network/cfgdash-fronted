import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import TokenSummary from "@/components/card/tokenSummary";
import { SystemReward } from "@/components/icons";

export default function RewardCard() {
  return (
    <CardContainer className="grow" icon={<SystemReward />}>
      <TokenSummary
        className="mb-[24px]"
        title="Block rewards"
        value="34,567"
      />
      <div className="flex flex-col">
        <DetailRow title="Collator" amount="2,000,000" symbol="CFG" />
        <DetailRow title="Treasury" amount="1,000,000" symbol="CFG" />
      </div>
    </CardContainer>
  );
}
