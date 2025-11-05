"use client";
import { toggleVariants } from "@/packages/components/ui/toggle";
import { cn } from "@/packages/utils/cn.util";
import { createContext } from "@/packages/utils/create-context.util";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const [ToggleGroupContext, useToggleGroup] =
  createContext<VariantProps<typeof toggleVariants>>();

const toggleGroupVariants = cva(
  ["bg-input-background border border-border-default flex items-center justify-center gap-1 p-[2px]"],
  {
    variants: {
      shape: {
        default: "rounded-lg",
        capsule: "rounded-full",
      },
      size: {
        default: "",
      },
    },
  }
);

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupVariants>
>(
  (
    { className, size = "default", shape = "default", children, ...props },
    ref
  ) => {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn(toggleGroupVariants({ size, shape }), className)}
        {...props}
      >
        <ToggleGroupContext value={{ size }}>{children}</ToggleGroupContext>
      </ToggleGroupPrimitive.Root>
    );
  }
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, size = "default", ...props }, ref) => {
  const context = useToggleGroup();

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
