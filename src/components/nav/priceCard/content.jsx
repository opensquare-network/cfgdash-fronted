"use client";

import { cn } from "@/utils";
import CardContainer from "../../card/cardContainer";
import ValueSummary from "../../card/valueSummary";
import { SystemPrice } from "../../icons";
import SocialIconLink from "../../socialIcon";
import { useState } from "react";

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
  const options = [
    {
      label: "7d",
      value: "7d",
    },
    {
      label: "1M",
      value: "1M",
    },
    {
      label: "3M",
      value: "3M",
    },
    {
      label: "1Y",
      value: "1Y",
    },
    {
      label: "All",
      value: "All",
    },
  ];

  const [range, setRange] = useState(options[0].value);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[12px]">
        <SocialIconLink href="https://coinmarketcap.com/currencies/centrifuge/" />
        <SocialIconLink href="https://www.coingecko.com/en/coins/centrifuge" />
      </div>

      <div className="flex gap-[8px]">
        {options.map((option) => (
          <DateItem
            key={option.value}
            selected={range === option.value}
            onClick={() => setRange(option.value)}
          >
            {option.label}
          </DateItem>
        ))}
      </div>
    </div>
  );
}

export default function PriceCardContent({ data = {} }) {
  return (
    <CardContainer icon={<SystemPrice />}>
      <div className="flex flex-col gap-[8px]">
        <ValueSummary title="Token price" value="$0.9804" />
        <Toolbar />
      </div>
    </CardContainer>
  );
}
