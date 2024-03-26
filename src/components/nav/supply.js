function SupplyDetailRow({ title, amount }) {
  return (
    <div className="flex justify-between py-[8px] [&:not(:last-child)]:border-b border-strokeBorder">
      <span className="text14Regular text-textPrimary">{title}</span>
      <div className="flex gap-[4px] text14Semibold">
        <span className="text-textPrimary">{amount}</span>
        <span className="text-textSecondary">CFG</span>
      </div>
    </div>
  );
}

function TotalSupply() {
  return (
    <div className="flex flex-col">
      <span className="text14Regular text-textSecondary">Total supply</span>
      <div className="flex gap-[4px] items-end">
        <span className="text24Semibold text-textPrimary">527,747,979</span>
        <span className="text18Semibold text-textSecondary mb-[2px]">CFG</span>
      </div>
    </div>
  );
}

export default function Supply() {
  return (
    <>
      <TotalSupply />
      <div className="flex flex-col">
        <SupplyDetailRow title="Native CFG" amount="1,000,000" />
        <SupplyDetailRow title="Wrapped CFG" amount="1,000,000" />
      </div>
    </>
  );
}
