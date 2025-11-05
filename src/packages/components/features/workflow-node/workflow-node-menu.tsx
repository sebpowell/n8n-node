import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/packages/components/ui/context-menu";

enum ShortkutKeys {
  "RETURN" = "RETURN",
  "SPACE" = "SPACE",
  "SHIFT" = "SHIFT",
  "OPTION" = "OPTION",
  "DELETE" = "DELETE",
}

type NodeMenuItemBase = {
  type: "action" | "divider";
};

interface NodeMenuItemAction extends NodeMenuItemBase {
  label: string;
  shortcutKeys: string[];
  onClick: () => void;
}

interface NodeMenuItemDivider extends NodeMenuItemBase {
  type: "divider";
}

type NodeMenuItem = NodeMenuItemAction | NodeMenuItemDivider;

const CONTEXT_MENU_ITEMS: NodeMenuItem[] = [
  {
    type: "action",
    label: "Open",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Open");
    },
  },
  {
    type: "action",
    label: "Execute step",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Execute step");
    },
  },
  {
    type: "action",
    label: "Rename",
    shortcutKeys: ["A"],
    onClick: () => {
      console.log("Rename");
    },
  },
  {
    type: "action",
    label: "Replace",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Replace");
    },
  },
  {
    type: "action",
    label: "Deactivate",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Deactivate");
    },
  },
  {
    type: "action",
    label: "Pin",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Pin");
    },
  },
  {
    type: "action",
    label: "Copy",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Copy");
    },
  },
  {
    type: "action",
    label: "Duplicate",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Duplicate");
    },
  },
  {
    type: "divider",
  },
  {
    type: "action",
    label: "Tidy up workflow",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Tidy up workflow");
    },
  },
  {
    type: "divider",
  },
  {
    type: "action",
    label: "Convert node to sub-workflow",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Convert node to sub-workflow");
    },
  },
  {
    type: "divider",
  },
  {
    type: "action",
    label: "Select all",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Select all");
    },
  },
  {
    type: "action",
    label: "Clear selection",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Clear selection");
    },
  },
  {
    type: "divider",
  },
  {
    type: "action",
    label: "Delete",
    shortcutKeys: [ShortkutKeys.RETURN],
    onClick: () => {
      console.log("Delete");
    },
  },
];

export function WorkflowNodeMenu(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {CONTEXT_MENU_ITEMS.map((item, index) => {
          if (item.type === "divider") {
            return <ContextMenuSeparator key={index} />;
          }

          const { label, shortcutKeys, onClick } = item;

          return (
            <ContextMenuItem key={label} onClick={onClick}>
              {label}
              <ContextMenuShortcut>
                {shortcutKeys.join(" + ")}
              </ContextMenuShortcut>
            </ContextMenuItem>
          );
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
}
