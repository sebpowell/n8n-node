"use client";
import { Node } from "@/packages/components/features/workflow-node/index";
import { Box } from "@/packages/components/ui/box";
import { DotGrid } from "@/packages/components/ui/dot-grid";
import { ThemeToggle } from "@/packages/components/ui/theme-toggle";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";

export function WorkflowCanvas() {
  const [node, setNode] = useState({
    id: "1",
    title: "Create resource",
    action: "create:row",
    status: WorkflowNodeStatus.NEUTRAL,
    description: "Creates a new record in the `Airtable` base `Data`, table `Collections`.",
    app: {
      domain: "airtable.com",
    },
  });

  const [transformState, setTransformState] = useState({
    scale: 1,
    positionX: 0,
    positionY: 0,
  });

  return (
    <Box className="h-screen w-full relative overflow-hidden flex flex-col">
      <Box className="p-4 border-b bg-background-page-subtle border-border-default flex items-center justify-between">
        <Box className="flex items-center gap-2">
          <Box className="text-xs text-text-subtle flex items-center">Status</Box>
          <Box
            as="select"
            className="capitalize text-xs h-8 px-2 rounded-md outline-none cursor-pointer"
            value={node.status}
            onChange={(e) =>
              setNode({ ...node, status: e.target.value as WorkflowNodeStatus })
            }
          >
            {Object.values(WorkflowNodeStatus).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Box>
        </Box>

        <ThemeToggle />
      </Box>

      <TransformWrapper
        wheel={{ step: 0.1, smoothStep: 0.02 }}
        limitToBounds={false}
        minScale={0.8}
        maxScale={4}
        doubleClick={{ disabled: true }}
        panning={{ disabled: false }}
        onTransformed={(ref, state) => {
          setTransformState({
            scale: state.scale,
            positionX: state.positionX,
            positionY: state.positionY,
          });
        }}
      >
        <Box className="relative w-full flex-1">
          <DotGrid
            scale={transformState.scale}
            positionX={transformState.positionX}
            positionY={transformState.positionY}
          />
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%", minHeight: "500px" }}
            contentStyle={{ width: "100%", height: "100%" }}
            contentClass="flex items-center justify-center flex-1 relative"
          >
            <Node node={node} setNode={setNode} />
          </TransformComponent>
        </Box>
      </TransformWrapper>
    </Box>
  );
}
