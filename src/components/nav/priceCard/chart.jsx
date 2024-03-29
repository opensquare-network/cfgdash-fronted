"use client";

import { Line } from "react-chartjs-2";
import "../../chart/config";
import dayjs from "dayjs";
import { noop, merge } from "lodash-es";
import { formatBN } from "@/utils/balance";
import { useThemeSetting } from "@/context/theme";
import light from "@/theme/light";

export default function PriceCardContentChart({
  data,
  onHover = noop,
  chartOptions: chartOptionsProp = {},
}) {
  const themeSettings = useThemeSetting();

  const prices = data?.prices || [];

  const labels = prices.map?.(({ time }) => time);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: prices.map?.(({ price }) => price),
        borderWidth: 1,
        borderColor: themeSettings.strokeChart,
        pointBorderWidth: 0,
        pointRadius: 1,
        pointHitRadius: 10,
        fill: true,
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: light.fillTabSelected,
              50: themeSettings.fillChartSecondary,
              100: themeSettings.fillChartPrimary,
            },
          },
        },
      },
    ],
  };

  const chartOptions = merge(
    {
      type: "line",
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
          bodySpacing: 8,
          callbacks: {
            title(tooltipItems) {
              return dayjs(Number(tooltipItems[0].parsed.x)).format(
                "YYYY-MM-DD hh:mm"
              );
            },
            label(tooltipItem) {
              return `$${formatBN(tooltipItem.raw, 3)}`;
            },
          },
          itemSort(a, b) {
            return a.datasetIndex - b.datasetIndex;
          },
        },
      },
      scales: {
        y: {
          position: "right",
          grid: {
            drawTicks: false,
            color: themeSettings.strokeDivider,
          },
          border: {
            display: false,
          },
        },
        x: {
          type: "time",
          time: {
            displayFormats: {
              month: "YYYY-MM",
            },
            unit: "day",
          },
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 1,
          },
        },
      },
      onHover(_, array) {
        const index = array?.[0]?.index;
        onHover(index);
      },
    },
    chartOptionsProp
  );

  return (
    <div className="w-full h-[200px]">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}
