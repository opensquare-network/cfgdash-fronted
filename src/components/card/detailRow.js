export function Amount({ amount, unit }) {
  return (
    <div className="inline-flex gap-[4px] text14Semibold">
      <span className="text-textPrimary">{amount}</span>
      {unit && <span className="text-textSecondary">{unit}</span>}
    </div>
  );
}

export default function DetailRow({ title, amount, unit }) {
  return (
    <div className="flex justify-between py-[8px] border-b border-strokeDivider">
      <span className="text14Regular text-textPrimary">{title}</span>
      <Amount amount={amount} unit={unit} />
    </div>
  );
}
