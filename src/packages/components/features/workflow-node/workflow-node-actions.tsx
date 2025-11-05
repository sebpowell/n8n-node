import { FaPlay } from "react-icons/fa6";
import { cn } from "@/packages/utils/cn.util";
import { Box, BoxProps } from "@/packages/components/ui/box";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";
import { Loader } from "@/packages/components/ui/loader";
import { useWorkflowNodeContext } from "@/packages/components/features/workflow-node/workflow-node.context";

export function WorkflowNodeActions(
  props: BoxProps<"button"> & {
    handlePlay: () => void;
  }
) {
  const { node } = useWorkflowNodeContext();

  const { status } = node;

  const { className, handlePlay, ...rest } = props;

  return (
    <Box
      className={cn(
        "border opacity-0 left-0 group-hover:-left-[33px] border-r-0 hover:bg-background-page-subtle group-hover:opacity-100 transition-all absolute rounded-md top-3 flex items-center justify-center bg-background-page border-border-default text-text-subtle size-8 hover:text-green-10 rounded-r-none ",
        className
      )}
      disabled={status === WorkflowNodeStatus.PENDING}
      onClick={handlePlay}
      {...rest}
    >
      {status === WorkflowNodeStatus.PENDING ? (
        <Loader />
      ) : (
        <FaPlay className="size-3" />
      )}
    </Box>
  );
}
