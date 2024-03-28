"use client";

import { getPrice } from "@/query/coingecko/price";
import PriceCardContent from "./content";
import { useState } from "react";
import { useAsync } from "react-use";

const OPTIONS = [
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

export default function PriceCard() {
  const [range, setRange] = useState(OPTIONS[0].value);
  const state = useAsync(async () => await getPrice(range), [range]);

  return (
    <PriceCardContent
      data={state.value}
      loading={state.loading}
      range={range}
      setRange={setRange}
      options={OPTIONS}
    />
  );
}
