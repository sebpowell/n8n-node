"use client";
import { Box, BoxProps } from "@/packages/components/ui/box";
import { Switch } from "@/packages/components/ui/switch";
import { WorkflowNodeContextProvider } from "@/packages/components/features/workflow-node/workflow-node.context";
import { NodeIcon } from "@/packages/components/features/workflow-node/workflow-node-icon";
import {
  WorkflowNodeProps,
  WorkflowNodeStatus,
} from "@/packages/types/workflow-node.type";
import { WorkflowNodeActions } from "@/packages/components/features/workflow-node/workflow-node-actions";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { WorkflowNodeMenu } from "@/packages/components/features/workflow-node/workflow-node-menu";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { useTimeoutFn } from "react-use";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/packages/utils/cn.util";
import { Markdown } from "@/packages/components/ui/markdown";
import { WorkflowNodeStatusBadge } from "@/packages/components/features/workflow-node/workflow-node-status-badge";

function NodeTitle(props: BoxProps<"span">) {
  return <Box as="span" className="leading-none" {...props} />;
}

function NodeAddNode() {
  return (
    <Box className="flex items-center absolute left-[calc(100%-6px)] bottom-0 top-1/2 -translate-y-1/2 z-10">
      <Box className="size-3 bg-input-background rounded-full border border-background-page hover:scale-150 transition-transform hover:bg-text-subtle" />
      <Box className="w-10 h-0.5 bg-border-default" />
      <Box className="size-6 border group hover:scale-110 text-text-subtle hover:text-text-strong hover:border-border-default-hover transition-transform rounded-md border-border-default bg-background-surface flex items-center justify-center">
        <FaPlus className="size-2.5 transition-transform" />
      </Box>
    </Box>
  );
}

function NodeHeader(props: BoxProps<"header">) {
  return (
    <Box
      as="header"
      className="flex items-center p-3 gap-1.5 relative"
      {...props}
    />
  );
}

export const nodeBorderGradientStyles = cva("", {
  variants: {
    status: {
      [WorkflowNodeStatus.SUCCESS]:
        "border-transparent [background:linear-gradient(_hsl(var(--twc-green-3)),_hsl(var(--twc-green-3)))_padding-box,conic-gradient(from_var(--border-angle),color-mix(in_oklch,_hsl(var(--twc-green-8))_100%,transparent)_75%,__hsl(var(--twc-green-12))_82%,__hsl(var(--twc-green-12))_90%,__hsl(var(--twc-green-12))_92%,__hsl(var(--twc-green-11))_95%,_color-mix(in_oklch,_hsl(var(--twc-green-8))_100%,transparent))_border-box]",
      [WorkflowNodeStatus.ERROR]:
        "border-transparent [background:linear-gradient(_hsl(var(--twc-red-3)),_hsl(var(--twc-red-3)))_padding-box,conic-gradient(from_var(--border-angle),color-mix(in_oklch,_hsl(var(--twc-red-6))_100%,transparent)_80%,__hsl(var(--twc-red-10))_86%,__hsl(var(--twc-red-12))_90%,__hsl(var(--twc-red-10))_94%,_color-mix(in_oklch,_hsl(var(--twc-red-6))_100%,transparent))_border-box]",
      [WorkflowNodeStatus.PENDING]:
        "border-transparent [background:linear-gradient(_hsl(var(--twc-orange-3)),_hsl(var(--twc-orange-3)))_padding-box,conic-gradient(from_var(--border-angle),color-mix(in_oklch,_hsl(var(--twc-orange-6))_100%,transparent)_80%,__hsl(var(--twc-orange-10))_86%,__hsl(var(--twc-orange-12))_90%,__hsl(var(--twc-orange-10))_94%,_color-mix(in_oklch,_hsl(var(--twc-orange-6))_100%,transparent))_border-box]",
      [WorkflowNodeStatus.DISABLED]: "",
      [WorkflowNodeStatus.NEUTRAL]: "",
    },
  },
});

function NodeContainer(props: BoxProps<"div">) {
  const { ...restProps } = props;

  return <Box className="relative text-left w-[300px]" {...restProps} />;
}

function NodeContent(
  props: BoxProps<"div"> & {
    contentRef?: React.RefObject<HTMLDivElement | null>;
  }
) {
  const { className, onMouseEnter, onMouseLeave, children, contentRef } = props;

  return (
    <motion.div
      ref={contentRef}
      className={cn(
        "border w-[300px] border-border-default flex flex-col rounded-lg ring-0 transition-all cursor-pointer relative",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave as React.MouseEventHandler<HTMLDivElement>}
    >
      {children}
    </motion.div>
  );
}

export type NodeProps = {
  node: WorkflowNodeProps;
  setNode: (node: WorkflowNodeProps) => void;
};

export function Node(props: NodeProps) {
  const { node, setNode } = props;

  const { action, title, description, status } = node;

  const [isHovered, setIsHovered] = useState(false);

  const [, , resetTimeout] = useTimeoutFn(() => {
    const randomStatus =
      Math.random() < 0.5
        ? WorkflowNodeStatus.SUCCESS
        : WorkflowNodeStatus.ERROR;

    setNode({ ...node, status: randomStatus });
  }, 2000);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleStatus = (enabled: boolean) => {
    setNode({
      ...node,
      status: enabled
        ? WorkflowNodeStatus.NEUTRAL
        : WorkflowNodeStatus.DISABLED,
    });
  };

  const handlePlay = () => {
    setNode({ ...node, status: WorkflowNodeStatus.PENDING });
    resetTimeout();
  };

  return (
    <WorkflowNodeContextProvider node={node}>
      <NodeContainer>
        <Box className="flex items-center justify-between relative h-5">
          <motion.div
            className="absolute left-0 -mb-2"
            initial={false}
            animate={{
              y: status === WorkflowNodeStatus.NEUTRAL ? 12 : 0,
              opacity: status === WorkflowNodeStatus.NEUTRAL ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 30,
              mass: 0.6,
            }}
          >
            <WorkflowNodeStatusBadge status={status} />
          </motion.div>
        </Box>
        <NodeContent
          className={cn(
            nodeBorderGradientStyles({ status }),
            "border animate-border group relative"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {status !== WorkflowNodeStatus.PENDING &&
              status !== WorkflowNodeStatus.DISABLED && (
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={
                    isHovered ? { opacity: 1, x: -32 } : { opacity: 0, x: 0 }
                  }
                  exit={{ opacity: 0, x: -32 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute left-0 top-4"
                  style={{
                    width: "32px",
                  }}
                >
                  <WorkflowNodeActions handlePlay={handlePlay} />
                </motion.div>
              )}
          </AnimatePresence>
          <WorkflowNodeMenu>
            <Box
              tabIndex={0}
              className="group shadow-sm bg-background-surface hover:bg-background-surface-hover rounded-[7px] transition-colors z-0"
            >
              <NodeHeader>
                <NodeIcon />
                <Box className="flex flex-col flex-1 text-left space-y-1">
                  <NodeTitle className="text-xs font-medium text-text-strong leading-none">
                    {title}
                  </NodeTitle>
                  <Box className="leading-none border inline-flex items-center text-[10px] h-[14px] pb-px font-medium text-text-subtle rounded-[4px] gap-2 px-0.5 w-fit">
                    {action}
                  </Box>
                </Box>
                <Box className="flex items-center gap-2">
                  <Switch
                    checked={status !== WorkflowNodeStatus.DISABLED}
                    onCheckedChange={handleToggleStatus}
                  />
                  <FaEllipsisVertical className="size-3 text-text-subtle transition-colors hover:text-text-strong" />
                </Box>
              </NodeHeader>
              <Box className="px-3">
                <Box as="hr" className="border-border-default" />
              </Box>
              <Box as="main" className="p-3 pt-2.5 text-xs">
                <Markdown>{description}</Markdown>
              </Box>
            </Box>
          </WorkflowNodeMenu>
          <NodeAddNode />
        </NodeContent>
      </NodeContainer>
    </WorkflowNodeContextProvider>
  );
}
