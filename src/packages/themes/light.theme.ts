import { Theme } from "@/packages/themes/theme.type";
import colors from "tailwindcss/colors";

const neutral = {
  1: "#fcfcfc",
  2: "#f9f9f9",
  3: "#f0f0f0",
  4: "#e8e8e8",
  5: "#e0e0e0",
  6: "#d9d9d9",
  7: "#cecece",
  8: "#bbbbbb",
  9: "#8d8d8d",
  10: "#838383",
  11: "#646464",
  12: "#202020",
};

const orange = {
  1: "#fefcfb",
  2: "#fff7ed",
  3: "#ffefd6",
  4: "#ffdfb5",
  5: "#ffd19a",
  6: "#ffc182",
  7: "#f5ae73",
  8: "#ec9455",
  9: "#f76b15",
  10: "#ef5f00",
  11: "#cc4e00",
  12: "#582d1d",
};

const green = {
  1: "#fbfefc",
  2: "#f4fbf6",
  3: "#e6f6eb",
  4: "#d6f1df",
  5: "#c4e8d1",
  6: "#adddc0",
  7: "#8eceaa",
  8: "#5bb98b",
  9: "#30a46c",
  10: "#2b9a66",
  11: "#218358",
  12: "#193b2d",
};

const red = {
  1: "#fffcfc",
  2: "#fff7f7",
  3: "#feebec",
  4: "#ffdbdc",
  5: "#ffcdce",
  6: "#fdbdbe",
  7: "#f4a9aa",
  8: "#eb8e90",
  9: "#e5484d",
  10: "#dc3e42",
  11: "#ce2c31",
  12: "#641723",
};

export const lightTheme: Theme = {
  "background-page": neutral[1],
  "background-page-subtle": neutral[2],
  "background-surface": colors.white,
  "background-surface-hover": neutral[2],
  "border-default": neutral[4],
  "border-default-hover": neutral[6],
  "text-body": neutral[12],
  "text-strong": colors.black,
  "text-subtle": neutral[10],
  "input-background": neutral[4],
  green,
  red,
  orange,
  neutral,
};
