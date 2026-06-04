import type { MouseEventHandler } from "react";
import type { ThemesType } from "./App";

export function ThemeSwitcher({
  theme,
  onThemeChange,
}: {
  theme: ThemesType;
  onThemeChange: MouseEventHandler;
}) {
  return (
    <button className="theme-switcher" onClick={onThemeChange}>
      <img
        src={theme === "light" ? "/icons/light.svg" : "/icons/dark.svg"}
        alt="theme"
      />
    </button>
  );
}

export default ThemeSwitcher;
