import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import TokenSummary from "@/components/card/tokenSummary";
import { SystemGovernance } from "@/components/icons";

export default function GovernanceCard() {
  return (
    <CardContainer icon={<SystemGovernance />}>
      <TokenSummary
        className="mb-[24px]"
        title="Tokens used in governance"
        value="3,000,000"
      />
      <div className="flex flex-col">
        <DetailRow title="On-chain" amount="2,000,000" unit="CFG" />
        <DetailRow title="Off-chain" amount="1,000,000" unit="CFG" />
      </div>
    </CardContainer>
  );
}
