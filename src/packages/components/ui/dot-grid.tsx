import { Box } from "@/packages/components/ui/box";

export function DotGrid() {
  return (
    <Box className="absolute inset-0 h-full w-full bg-[radial-gradient(hsl(var(--twc-text-body))_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
  );
}
