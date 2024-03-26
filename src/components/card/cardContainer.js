import { cn } from "@/utils";

export default function CardContainer({ icon, children, className }) {
  return (
    <div
      className={cn(
        "flex border border-strokeBorder rounded-[16px] bg-fillCard shadow-shadowCard p-[24px]",
        className
      )}
    >
      <div className="flex flex-col relative grow overflow-x-scroll scrollbar-hidden">
        <div className="absolute right-0 top-0">{icon}</div>
        {children}
      </div>
    </div>
  );
}
