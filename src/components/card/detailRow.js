export default function DetailRow({ title, amount, symbol }) {
  return (
    <div className="flex justify-between py-[8px] border-b border-strokeBorder">
      <span className="text14Regular text-textPrimary">{title}</span>
      <div className="flex gap-[4px] text14Semibold">
        <span className="text-textPrimary">{amount}</span>
        {symbol && <span className="text-textSecondary">{symbol}</span>}
      </div>
    </div>
  );
}
