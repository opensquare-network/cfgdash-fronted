import { cn } from "@/utils";
import CardContainer from "../card/cardContainer";
import ValueSummary from "../card/valueSummary";
import { LinkCoingecko, LinkCoinmarketcap, SystemPrice } from "../icons";
import SocialLinkIcon from "../socialLinkIcon";

function DateItem({ selected, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "px-[8px] py-[2px] rounded-[4px] text12Semibold cursor-pointer",
        selected
          ? "text-textHighlight bg-fillTabSelected"
          : "text-textSecondary"
      )}
    >
      {children}
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[12px]">
        <SocialLinkIcon href="">
          <LinkCoinmarketcap />
        </SocialLinkIcon>
        <SocialLinkIcon href="">
          <LinkCoingecko />
        </SocialLinkIcon>
      </div>

      <div className="flex gap-[8px]">
        <DateItem>7d</DateItem>
        <DateItem selected>1M</DateItem>
        <DateItem>3M</DateItem>
        <DateItem>1Y</DateItem>
        <DateItem>All</DateItem>
      </div>
    </div>
  );
}

export default function PriceCard() {
  return (
    <CardContainer icon={<SystemPrice />}>
      <div className="flex flex-col gap-[8px]">
        <ValueSummary title="Token price" value="$0.9804" />
        <Toolbar />
      </div>
    </CardContainer>
  );
}
