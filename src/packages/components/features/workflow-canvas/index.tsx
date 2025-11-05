"use client";
import { Node } from "@/packages/components/features/workflow-node/index";
import { Box } from "@/packages/components/ui/box";
import { DotGrid } from "@/packages/components/ui/dot-grid";
import { ThemeToggle } from "@/packages/components/ui/theme-toggle";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";

import { useState } from "react";

export function WorkflowCanvas() {
  const [node, setNode] = useState({
    id: "1",
    title: "Create resource",
    action: "create:row",
    status: WorkflowNodeStatus.NEUTRAL,
    description: "Creates a new record in base `Data`, table `Collections`.",
    app: {
      domain: "airtable.com",
    },
  });

  return (
    <Box className="border border-border-default max-w-4xl w-full rounded-xl relative overflow-hidden flex flex-col">
      <Box className="p-4 border-b bg-background-page-subtle border-border-default flex items-center justify-between">
        <Box
          as="select"
          className="capitalize text-sm h-8 px-2 rounded-md"
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

        <ThemeToggle />
      </Box>

      <Box className="flex items-center justify-center flex-1 relative min-h-[500px]">
        <DotGrid />
        <Node node={node} setNode={setNode} />
      </Box>
    </Box>
  );
}
