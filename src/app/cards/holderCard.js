import CardContainer from "@/components/card/cardContainer";
import DetailRow from "@/components/card/detailRow";
import ValueSummary from "@/components/card/valueSummary";
import { SystemHolder } from "@/components/icons";

export default function HolderCard() {
  return (
    <CardContainer icon={<SystemHolder />}>
      <ValueSummary
        className="mb-[24px]"
        title="Total token holders"
        value="34,567"
      />
      <div className="flex flex-col">
        <DetailRow title="Whales" amount="20,000" />
        <DetailRow title="Dolphins" amount="10,000" />
      </div>
    </CardContainer>
  );
}
