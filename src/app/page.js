import TransactionCard from "@/components/home/transactionCard";
import HolderCard from "@/components/home/holderCard";
import RewardCard from "@/components/home/rewardCard";
import GovernanceCard from "@/components/home/governanceCard";
import TreasuryCard from "@/components/home/treasuryCard";
import ProposalCard from "@/components/home/proposalCard";

export default function Home() {
  return (
    <div className="flex flex-col grow max-w-full gap-[16px]">
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
