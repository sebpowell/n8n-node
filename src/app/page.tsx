import { WorkflowCanvas } from "@/packages/components/features/workflow-canvas";
import { Box } from "@/packages/components/ui/box";

export default function Page() {
  return (
    <Box className="h-screen overflow-hidden flex items-center justify-center">
      <WorkflowCanvas />
    </Box>
  );
}
