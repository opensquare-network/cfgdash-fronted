"use client";

import { Line } from "react-chartjs-2";
import "../../chart/config";
import dayjs from "dayjs";
import { noop, merge } from "lodash-es";

export default function PriceCardContentChart({
  data,
  onHover = noop,
  chartOptions: chartOptionsProp = {},
}) {
  const stats = data?.stats || [];

  const labels = stats.map?.(([time]) => time);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: stats.map?.(([, price]) => price),
        borderWidth: 1,
        borderColor: "#1253ff",
        backgroundColor: "#1253ff33",
        pointBorderWidth: 0,
        pointRadius: 1,
        pointHitRadius: 10,
        fill: true,
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
              return tooltipItem.raw;
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
            zeroLineWidth: 0,
            color: "rgba(0, 0, 0, 0)",
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
