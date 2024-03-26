import { usePreferredColorScheme } from "@/hooks/usePreferredColorScheme";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import light from "@/theme/light";
import dark from "@/theme/dark";
import { CACHE_KEY } from "@/utils/consts";
import { setCookie } from "@/utils/client/cookies";

const ThemeModeContext = createContext({});

export default function ThemeModeProvider({ children, defaultThemeMode }) {
  const [themeMode, setThemeMode] = useState(defaultThemeMode || "light");

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeClassNameProvider>{children}</ThemeClassNameProvider>
    </ThemeModeContext.Provider>
  );
}

/**
 * @typedef {'light' | 'dark'} Mode
 * @typedef {Mode | 'system'} ThemeMode
 * @typedef {(value: ThemeMode) => void} SetThemeMode
 *
 * @returns {[Mode, SetThemeMode, ThemeMode]} mode is only `light` or `dark`, themeMode can be `light`, `dark` or `system`
 */
export function useThemeMode() {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  const preferredColorScheme = usePreferredColorScheme();
  const mode = themeMode === "system" ? preferredColorScheme : themeMode;

  /**
   * @type {SetThemeMode}
   */
  function set(value) {
    setThemeMode(value);
    setCookie(CACHE_KEY.themeMode, value);
  }

  return [mode, set, themeMode];
}

function ThemeClassNameProvider({ children }) {
  const isDark = useIsDark();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return children;
}

export function StyledThemeValueProvider({ children }) {
  const theme = useThemeSetting();
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export function useIsDark() {
  const [mode] = useThemeMode();
  return mode === "dark";
}

export function useThemeSetting() {
  const [mode] = useThemeMode();
  return mode === "dark" ? dark : light;
}

export function useToggleThemeMode() {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const themeModeSetter = useCallback(() => {
    const target = themeMode !== "dark" ? "dark" : "light";
    setThemeMode(target);
    setCookie(CACHE_KEY.themeMode, target);
  }, [themeMode]);

  return themeModeSetter;
}
