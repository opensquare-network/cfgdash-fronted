import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { SystemQuestion } from "./icons";
import { cn } from "@/utils";

export default function Tooltip({ content }) {
  const tooltipContent = content && (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={cn(
          "z-[10000] rounded-[4px] py-[6px] px-[8px]",
          "text12Regular text-textTooltip break-words",
          "bg-tooltipBg"
        )}
      >
        {content}
        <RadixTooltip.Arrow className="fill-tooltipBg" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0}>
        <RadixTooltip.Trigger asChild>
          <div className="inline-flex">
            <SystemQuestion className="w-[16px] h-[16px] [&_path]:fill-textPrimary" />
          </div>
        </RadixTooltip.Trigger>

        {tooltipContent}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
