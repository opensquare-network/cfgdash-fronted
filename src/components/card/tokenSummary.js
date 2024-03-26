import { cn } from "@/utils";

export default function TokenSummary({ title, value, className }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text14Regular text-textSecondary">{title}</span>
      <div className="flex gap-[4px] items-end">
        <span className="text24Semibold text-textPrimary">{value}</span>
        <span className="text18Semibold text-textSecondary mb-[2px]">CFG</span>
      </div>
    </div>
  );
}
