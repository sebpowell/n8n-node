import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export type BoxProps<E extends React.ElementType> = {
  as?: E;
  ref?: (element: HTMLElement | null) => void
} & React.ComponentPropsWithoutRef<E>;

export const Box = <T extends React.ElementType = "div">({
  as,
  asChild,
  className,
  ...rest
}: BoxProps<T>) => {
  const Element = asChild ? Slot : as || "div";

  return <Element className={className} {...rest} />;
};
