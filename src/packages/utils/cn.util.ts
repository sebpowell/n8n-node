import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twClassGroups = {};

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: twClassGroups,
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
