"use client";

import { getPrice } from "@/query/coingecko/price";
import PriceCardContent from "./content";
import { useState } from "react";
import { useAsync } from "react-use";

const OPTIONS = [
  {
    label: "7d",
    value: "7d",
    chartOptions: {
      scales: {
        x: {
          time: {
            unit: "day",
          },
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  },
  {
    label: "1M",
    value: "1M",
    chartOptions: {
      scales: {
        x: {
          time: {
            unit: "day",
          },
          ticks: {
            stepSize: 2,
          },
        },
      },
    },
  },
  {
    label: "3M",
    value: "3M",
    chartOptions: {
      scales: {
        x: {
          time: {
            unit: "day",
          },
          ticks: {
            stepSize: 5,
          },
        },
      },
    },
  },
  {
    label: "1Y",
    value: "1Y",
    chartOptions: {
      scales: {
        x: {
          time: {
            unit: "day",
          },
          ticks: {
            stepSize: 22,
          },
        },
      },
    },
  },
  {
    label: "All",
    value: "All",
    chartOptions: {
      scales: {
        x: {
          time: {
            unit: "month",
          },
          ticks: {
            stepSize: 2,
          },
        },
      },
    },
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
