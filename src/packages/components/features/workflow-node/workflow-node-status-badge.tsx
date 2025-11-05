import { Box, BoxProps } from "@/packages/components/ui/box";
import { Loader } from "@/packages/components/ui/loader";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";
import { cn } from "@/packages/utils/cn.util";
import { cva } from "class-variance-authority";
import { cloneElement, JSX } from "react";
import {
  FaBan,
  FaCircleCheck,
  FaSpinner,
  FaTriangleExclamation,
} from "react-icons/fa6";

const nodeStatusStyles = cva(["border"], {
  variants: {
    status: {
      [WorkflowNodeStatus.SUCCESS]: "border-green-6 bg-green-3 text-green-10",
      [WorkflowNodeStatus.ERROR]: "border-red-6 bg-red-3 text-red-10",
      [WorkflowNodeStatus.DISABLED]:
        "border-border-default bg-neutral-3/50 text-neutral-10",
      [WorkflowNodeStatus.PENDING]:
        "border-orange-6 bg-orange-3 text-orange-10",
      [WorkflowNodeStatus.NEUTRAL]: "",
    },
  },
});

const nodeStatusIcons: { [key in WorkflowNodeStatus]: JSX.Element } = {
  [WorkflowNodeStatus.SUCCESS]: <FaCircleCheck />,
  [WorkflowNodeStatus.ERROR]: <FaTriangleExclamation />,
  [WorkflowNodeStatus.NEUTRAL]: <FaSpinner />,
  [WorkflowNodeStatus.PENDING]: <Loader />,
  [WorkflowNodeStatus.DISABLED]: <FaBan />,
};

const nodeStatusLabels: { [key in WorkflowNodeStatus]: string } = {
  [WorkflowNodeStatus.SUCCESS]: "Success",
  [WorkflowNodeStatus.ERROR]: "Error",
  [WorkflowNodeStatus.NEUTRAL]: "",
  [WorkflowNodeStatus.PENDING]: "Pending",
  [WorkflowNodeStatus.DISABLED]: "Disabled",
};

export function WorkflowNodeStatusBadge(
  props: BoxProps<"div"> & { status: WorkflowNodeStatus }
) {
  const { status, className, ...restProps } = props;

  const icon = nodeStatusIcons[status];
  const label = nodeStatusLabels[status];
  const styles = nodeStatusStyles({ status: status });

  return (
    <Box
      className={cn(
        "inline-flex items-center pb-2.5 border border-b-0 justify-center rounded-lg gap-x-1 pt-[3px] rounded-b-none px-1.5",
        className,
        styles
      )}
      {...restProps}
    >
      {cloneElement(icon, {
        className: "size-2.5",
      })}

      <Box as="span" className="text-[10px] font-semibold">
        {label}
      </Box>
    </Box>
  );
}
