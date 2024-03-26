import { cn } from "@/utils";

export default function ValueSummary({ title, value, className }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text14Regular text-textSecondary">{title}</span>
      <span className="text24Semibold text-textPrimary">{value}</span>
    </div>
  );
}
