import React, { FC, ReactNode, ReactElement } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as styles from "./styles";
import { Icons } from "../Icons";

interface Props {
  children: ReactNode;
  open?: boolean;
  fullWidth?: boolean;
  fitToContent?: boolean;
  background?: "default" | "white";
  onOpenChange?: (value: boolean) => void;
}

type DialogChild = ReactElement<Props & { children?: ReactNode }>;

type DialogComponents = {
  Trigger: FC<{ children: ReactNode }>;
  Title: FC<{ children: ReactNode }>;
  Description: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
};

export const Dialog: FC<Props> & DialogComponents = (props) => {
  const { fitToContent = true } = props;
  let trigger = null;
  let title = null;
  let description = null;
  let body = null;

  React.Children.forEach(props.children, (child) => {
    if (React.isValidElement<DialogChild>(child) && typeof child.type !== "string") {
      const component = child.type as React.ComponentType & { displayName?: string };

      switch (component.displayName) {
        case "Dialog.Trigger":
          trigger = child;
          break;
        case "Dialog.Title":
          title = child;
          break;
        case "Dialog.Description":
          description = child;
          break;
        case "Dialog.Body":
          body = child;
          break;
        default:
          break;
      }
    }
  });

  return (
    <RadixDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      {trigger}
      <RadixDialog.Portal>
        <RadixDialog.Overlay css={styles.dialogOverlay} />
        <RadixDialog.Content
          css={[
            styles.dialogContent,
            !fitToContent && "height: 90vh",
            props.fullWidth && styles.dialogContentFullWidth,
            props.background === "white" && styles.dialogContentBackgroundWhite,
          ]}
        >
          {title}
          {description}
          {body}
          <RadixDialog.Close asChild>
            <button aria-label="Close" css={styles.iconButton}>
              <Icons.Close />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.displayName = "Dialog";

// Trigger
Dialog.Trigger = function ({ children }) {
  return <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>;
};

Dialog.Trigger.displayName = "Dialog.Trigger";

// Title
Dialog.Title = function ({ children }) {
  return <RadixDialog.Title css={styles.dialogTitle}>{children}</RadixDialog.Title>;
};

Dialog.Title.displayName = "Dialog.Title";

// Description
Dialog.Description = function ({ children }) {
  return <RadixDialog.Description css={styles.dialogDescription}>{children}</RadixDialog.Description>;
};

Dialog.Description.displayName = "Dialog.Description";

// Body
Dialog.Body = function ({ children }) {
  return <div>{children}</div>;
};

Dialog.Body.displayName = "Dialog.Body";
