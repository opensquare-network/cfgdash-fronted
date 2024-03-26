import { cn } from "@/utils";

export default function CardContainer({ icon, children, className }) {
  return (
    <div
      className={cn(
        "flex border border-strokeBorder rounded-[16px] bg-fillCard shadow-shadowCard",
        className
      )}
    >
      <div className="flex flex-col grow m-[24px] relative">
        <div className="absolute right-0 top-0">{icon}</div>
        {children}
      </div>
    </div>
  );
}
