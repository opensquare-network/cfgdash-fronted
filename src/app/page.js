import TransactionCard from "./cards/transactionCard";
import HolderCard from "./cards/holderCard";
import RewardCard from "./cards/rewardCard";
import GovernanceCard from "./cards/governanceCard";
import TreasuryCard from "./cards/treasuryCard";
import ProposalCard from "./cards/proposalCard";

export default function Home() {
  return (
    <div className="flex flex-col grow gap-[16px]">
      <div className="flex max-sm:flex-col gap-[16px]">
        <TransactionCard />
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[16px] grow">
          <HolderCard />
          <RewardCard />
          <GovernanceCard />
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-[16px]">
        <TreasuryCard />
        <ProposalCard />
      </div>
    </div>
  );
}
