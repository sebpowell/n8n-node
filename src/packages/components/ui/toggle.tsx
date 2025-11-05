"use client";
import { cn } from "@/packages/utils/cn.util";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const toggleVariants = cva(
  [
    "cursor-pointer inline-flex flex-1 items-center justify-center rounded-md gap-2 data-[state=on]:bg-white data-[state=on]:shadow-md data-[state=on]:text-black data-[state=off]:text-text-subtle",
  ],
  {
    variants: {
      size: {
        default: "size-5",
      },
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, size = "default", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
