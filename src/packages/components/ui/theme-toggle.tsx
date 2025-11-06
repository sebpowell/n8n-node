"use client";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/packages/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (typeof window === "undefined" || typeof resolvedTheme === "undefined")
    return null;

  return (
    <ToggleGroup
      type="single"
      size="default"
      value={resolvedTheme ?? theme ?? undefined}
      shape="capsule"
      className="rounded-full border"
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem value="light" className="rounded-full">
        <FaSun className="size-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" className="rounded-full">
        <FaMoon className="size-3" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export { ThemeToggle };
