import { Theme } from "@/packages/themes/theme.type";
import colors from "tailwindcss/colors";

const neutral = {
  1: "#111111",
  2: "#191919",
  3: "#222222",
  4: "#2a2a2a",
  5: "#313131",
  6: "#3a3a3a",
  7: "#484848",
  8: "#606060",
  9: "#6e6e6e",
  10: "#7b7b7b",
  11: "#b4b4b4",
  12: "#eeeeee",
};

const orange = {
  1: "#17120e",
  2: "#1e160f",
  3: "#331e0b",
  4: "#462100",
  5: "#562800",
  6: "#66350c",
  7: "#7e451d",
  8: "#a35829",
  9: "#f76b15",
  10: "#ff801f",
  11: "#ffa057",
  12: "#ffe0c2",
};

const green = {
  1: "#0e1512",
  2: "#121b17",
  3: "#132d21",
  4: "#113b29",
  5: "#174933",
  6: "#20573e",
  7: "#28684a",
  8: "#2f7c57",
  9: "#30a46c",
  10: "#33b074",
  11: "#3dd68c",
  12: "#b1f1cb",
};

const red = {
  1: "#191111",
  2: "#201314",
  3: "#3b1219",
  4: "#500f1c",
  5: "#611623",
  6: "#72232d",
  7: "#8c333a",
  8: "#b54548",
  9: "#e5484d",
  10: "#ec5d5e",
  11: "#ff9592",
  12: "#ffd1d9",
};

export const darkTheme: Theme = {
  "background-page": neutral[1],
  "background-page-subtle": neutral[2],
  "background-surface": neutral[3],
  "background-surface-hover": neutral[4],
  "border-default": neutral[4],
  "border-default-hover": neutral[6],
  "text-body": neutral[11],
  "text-strong": colors.white,
  "text-subtle": neutral[10],
  "input-background": neutral[6],
  green,
  red,
  orange,
  neutral,
};
