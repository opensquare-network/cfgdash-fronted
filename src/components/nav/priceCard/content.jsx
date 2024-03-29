"use client";

import { cn } from "@/utils";
import CardContainer from "../../card/cardContainer";
import ValueSummary from "../../card/valueSummary";
import { SystemLoading, SystemPrice } from "../../icons";
import SocialIconLink from "../../socialIcon";
import { find, noop } from "lodash-es";
import PriceCardContentChart from "./chart";
import { formatBN } from "@/utils/balance";
import { useBasicData } from "@/context/basicData";

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

export default function PriceCardContent({
  data = {},
  loading,
  range,
  setRange = noop,
  options = [],
}) {
  const { cfgPrice = 0 } = useBasicData();

  const { chartOptions = {} } = find(options, { value: range }) || {};

  return (
    <CardContainer icon={<SystemPrice />}>
      <div className="flex flex-col gap-[8px]">
        <ValueSummary
          title="Token price"
          value={`$${formatBN(cfgPrice || 0, 3)}`}
        />

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
                onClick={() => {
                  setRange(option.value);
                }}
              >
                {option.label}
              </DateItem>
            ))}
          </div>
        </div>
      </div>

      <div className={cn("relative", "mt-2")}>
        {loading && (
          <div
            className={cn(
              "absolute inset-0",
              "flex items-center justify-center",
              "bg-fillCard"
            )}
          >
            <SystemLoading />
          </div>
        )}

        <PriceCardContentChart data={data} chartOptions={chartOptions} />
      </div>
    </CardContainer>
  );
}
