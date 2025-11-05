import { FaPlay, FaRecycle, FaRotateRight } from "react-icons/fa6";
import { cn } from "@/packages/utils/cn.util";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";
import { Loader } from "@/packages/components/ui/loader";
import { useWorkflowNodeContext } from "@/packages/components/features/workflow-node/workflow-node.context";
import { motion } from "motion/react";

export function WorkflowNodeActions(props: {
  handlePlay: () => void;
  className?: string;
}) {
  const { node } = useWorkflowNodeContext();

  const { status } = node;

  const { className, handlePlay } = props;

  return (
    <motion.button
      className={cn(
        "pl-px border-r-0 hover:bg-green-4 transition-all rounded-md flex items-center justify-center bg-input-background text-text-subtle size-6 hover:text-green-10",
        className
      )}
      disabled={status === WorkflowNodeStatus.PENDING}
      onClick={handlePlay}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {status === WorkflowNodeStatus.PENDING ? (
        <Loader className="size-2.5" />
      ) : status === WorkflowNodeStatus.NEUTRAL ? (
        <FaPlay className="size-2.5" />
      ) : (
        <FaRotateRight className="size-2.5" />
      )}
    </motion.button>
  );
}
