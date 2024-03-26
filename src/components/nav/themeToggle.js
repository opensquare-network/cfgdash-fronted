"use client";

import { cn } from "@/utils";
import { ThemeDark } from "../icons";
import { useToggleThemeMode } from "@/context/theme";

export default function ThemeToggle({ className }) {
  const toggleMode = useToggleThemeMode();

  return (
    <div
      className={cn(
        "flex cursor-pointer justify-end p-[6px] [&_svg_path]:fill-textPrimary",
        className
      )}
      onClick={toggleMode}
    >
      <ThemeDark className="w-[20px] h-[20px]" />
    </div>
  );
}
