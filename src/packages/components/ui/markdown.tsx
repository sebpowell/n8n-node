import { Box, BoxProps } from "@/packages/components/ui/box";
import ReactMarkdown, { Options } from "react-markdown";
import { cn } from "@/packages/utils/cn.util";

export const Markdown = (
  props: Omit<BoxProps<"div">, "children"> & {
    children: React.ReactNode | string;
  }
) => {
  const { children, className, ...rest } = props;

  return (
    <Box className={cn("markdown", className)} {...rest}>
      {typeof children === "string" ? (
        <ReactMarkdown>{children}</ReactMarkdown>
      ) : (
        children
      )}
    </Box>
  );
};
