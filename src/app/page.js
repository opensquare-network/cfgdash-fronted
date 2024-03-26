import TransactionCard from "./cards/transactionCard";
import HolderCard from "./cards/holderCard";
import RewardCard from "./cards/rewardCard";
import GovernanceCard from "./cards/governanceCard";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="flex flex-col grow">
      <div className="flex gap-[16px]">
        <TransactionCard />
        <div className="flex gap-[16px] grow">
          <HolderCard />
          <RewardCard />
          <GovernanceCard />
        </div>
      </div>
    </div>
  );
}
