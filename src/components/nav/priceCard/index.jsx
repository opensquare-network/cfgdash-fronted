"use client";

import { useQueryPrices } from "@/hooks/prices";
import PriceCardContent from "./content";
import { useState } from "react";

const OPTIONS = [
  {
    label: "7d",
    value: "DAY_7",
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
    value: "DAY_30",
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
    value: "DAY_90",
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
    value: "DAY_365",
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
  // all
  /* {
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
  }, */
];

export default function PriceCard() {
  const [range, setRange] = useState(OPTIONS[0].value);
  const { data, loading } = useQueryPrices(range);

  return (
    <PriceCardContent
      data={data}
      loading={loading}
      range={range}
      setRange={setRange}
      options={OPTIONS}
    />
  );
}
