import { useWorkflowNodeContext } from "@/packages/components/features/workflow-node/workflow-node.context";
import { Box, BoxProps } from "@/packages/components/ui/box";
import { WorkflowNodeStatus } from "@/packages/types/workflow-node.type";
import { cn } from "@/packages/utils/cn.util";

export function NodeIcon(props: BoxProps<"span">) {
  const { node } = useWorkflowNodeContext();

  const { className, ...rest } = props;

  const { status } = node;

  return (
    <Box
      className={cn(
        "size-8 rounded-md overflow-hidden relative border flex items-center justify-center border-border-default bg-background-page",
        className,
        {
          "grayscale": status === WorkflowNodeStatus.DISABLED,
        }
      )}
      {...rest}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.16241 1.6124L1.32146 4.0293C0.996643 4.16373 1.00001 4.6251 1.32686 4.75465L7.19226 7.08062C7.70764 7.285 8.28155 7.285 8.79685 7.08062L14.6623 4.75465C14.9891 4.6251 14.9925 4.16373 14.6676 4.0293L8.82679 1.6124C8.29386 1.3919 7.69524 1.3919 7.16241 1.6124Z"
          fill="#FFBF00"
        />
        <path
          d="M8.51489 8.35073V14.1613C8.51489 14.4377 8.79356 14.6269 9.05046 14.5251L15.5863 11.9882C15.7355 11.929 15.8334 11.7849 15.8334 11.6244V5.81383C15.8334 5.53745 15.5547 5.34821 15.2978 5.45005L8.76194 7.98695C8.61283 8.0461 8.51489 8.19026 8.51489 8.35073Z"
          fill="#26B5F8"
        />
        <path
          d="M6.98872 8.65057L5.04904 9.58712L4.85209 9.6823L0.75752 11.6442C0.497969 11.7694 0.166687 11.5803 0.166687 11.292V5.83825C0.166687 5.73393 0.220174 5.64388 0.291902 5.57605C0.321834 5.54603 0.35575 5.52132 0.390995 5.50175C0.488847 5.44303 0.628409 5.42737 0.74707 5.4743L6.95614 7.93442C7.27174 8.05963 7.29654 8.50188 6.98872 8.65057Z"
          fill="#ED3049"
        />
        <path
          d="M6.98875 8.65057L5.04905 9.5871L0.291931 5.57605C0.321863 5.54603 0.355779 5.52132 0.391024 5.50175C0.488876 5.44303 0.628438 5.42737 0.747101 5.4743L6.95617 7.93442C7.27177 8.05963 7.29657 8.50188 6.98875 8.65057Z"
          fill="black"
          fillOpacity="0.25"
        />
      </svg>
    </Box>
  );
}
