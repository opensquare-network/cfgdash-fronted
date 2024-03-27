"use client";

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
      className="w-[400px] max-sm:w-full"
      icon={<SystemTransaction />}
    >
      <ValueSummary
        title="Transaction"
        value={formatBN(signedExtrinsicCount)}
      />
      <BarChart
        data={{
          labels: dailyExtrinsics.map((extrinsic) =>
            extrinsic.startTime.toString()
          ),
          datasets: [
            {
              label: "Extrinsics",
              data: dailyExtrinsics.map((extrinsic) => extrinsic.count),
              backgroundColor: "rgba(129, 163, 254, 1)",
            },
          ],
        }}
      />
    </CardContainer>
  );
}
