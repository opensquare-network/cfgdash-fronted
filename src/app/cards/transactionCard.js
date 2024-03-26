import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { SystemTransaction } from "@/components/icons";

export default function TransactionCard() {
  return (
    <CardContainer
      className="w-[400px] max-sm:w-full"
      icon={<SystemTransaction />}
    >
      <ValueSummary
        className="mb-[24px]"
        title="Transaction"
        value="1,234,567"
      />
    </CardContainer>
  );
}
