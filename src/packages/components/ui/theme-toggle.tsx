"use client";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/packages/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      size="default"
      value={theme}
      shape="capsule"
      className="rounded-full border"
      onValueChange={(value) => setTheme(value)}
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
