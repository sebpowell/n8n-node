export enum WorkflowNodeStatus {
  SUCCESS = "success",
  ERROR = "error",
  NEUTRAL = "neutral",
  PENDING = "pending",
  DISABLED = "disabled"
}

export type WorkflowNodeProps = {
  id: string;
  title: string;
  action: string;
  description: string;
  status: WorkflowNodeStatus;
  app: {
    domain: string;
  };
};
