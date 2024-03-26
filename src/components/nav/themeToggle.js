"use client";

import { cn } from "@/utils";
import { Theme } from "../icons";
import { useToggleThemeMode } from "@/context/theme";

export default function ThemeToggle({ className }) {
  const toggleMode = useToggleThemeMode();

  return (
    <div
      className={cn(
        "inline-flex p-[6px] [&_svg_path]:fill-textPrimary",
        className
      )}
      onClick={toggleMode}
    >
      <Theme className="cursor-pointer w-[20px] h-[20px]" />
    </div>
  );
}
