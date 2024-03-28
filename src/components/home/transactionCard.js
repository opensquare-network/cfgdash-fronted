"use client";

import dayjs from "dayjs";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { SystemTransaction } from "@/components/icons";
import { useBasicData } from "@/context/basicData";
import { useDailyExtrinsics } from "@/context/dailyExtrinsics";
import { formatBN } from "@/utils/balance";

function BarChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default function TransactionCard() {
  const { signedExtrinsicCount = 0 } = useBasicData();
  const dailyExtrinsics = useDailyExtrinsics();

  return (
    <CardContainer
      className="w-[400px] sm:min-w-[400px] max-sm:w-full"
      icon={<SystemTransaction />}
    >
      <ValueSummary
        title="Transaction"
        value={formatBN(signedExtrinsicCount)}
      />
      <div className="relative h-[92px]">
        <BarChart
          data={{
            labels: dailyExtrinsics.map((extrinsic, index) => {
              const label = dayjs(extrinsic.startTime * 1000).format(
                "YYYY-MM-DD HH:mm"
              );

              if (index === dailyExtrinsics.length - 1) {
                return label + " ~ now";
              } else {
                return (
                  label +
                  " ~ " +
                  dayjs(dailyExtrinsics[index + 1].startTime * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )
                );
              }
            }),
            datasets: [
              {
                label: "Signed extrinsics",
                data: dailyExtrinsics.map((extrinsic) => extrinsic.count),
                backgroundColor: "rgba(18, 83, 255, 1)",
                barPercentage: 0.5,
              },
            ],
          }}
        />
      </div>
    </CardContainer>
  );
}
