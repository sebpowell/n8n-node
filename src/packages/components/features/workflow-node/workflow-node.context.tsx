import { WorkflowNodeProps } from "@/packages/types/workflow-node.type";
import { createContext } from "@/packages/utils/create-context.util";

type WorkflowNodeContextProps = {
  node: WorkflowNodeProps;
};

export const [WorkflowNodeContext, useWorkflowNodeContext] =
  createContext<WorkflowNodeContextProps>();

type WorkflowNodeContextProviderProps = {
  node: WorkflowNodeProps;
  children: React.ReactNode;
};

export function WorkflowNodeContextProvider(
  props: WorkflowNodeContextProviderProps
) {
  const { node, children } = props;

  const ctx: WorkflowNodeContextProps = {
    node,
  };

  return <WorkflowNodeContext value={ctx}>{children}</WorkflowNodeContext>;
}
