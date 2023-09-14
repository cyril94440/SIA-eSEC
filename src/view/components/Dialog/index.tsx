import React, { FC, ReactNode, ReactElement } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as styles from "./styles";
import { Icons } from "../Icons";

interface Props {
  children: ReactNode;
}

type DialogChild = ReactElement<Props & { children?: ReactNode }>;

type DialogComponents = {
  Trigger: FC<{ children: ReactNode }>;
  Title: FC<{ children: ReactNode }>;
  Description: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
};

const Dialog: FC<Props> & DialogComponents = ({ children }) => {
  let trigger = null;
  let title = null;
  let description = null;
  let body = null;

  React.Children.forEach(children, (child) => {
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
    <RadixDialog.Root>
      {trigger}
      <RadixDialog.Portal>
        <RadixDialog.Overlay css={styles.DialogOverlay} />
        <RadixDialog.Content css={styles.DialogContent}>
          {title}
          {description}
          {body}
          <RadixDialog.Close asChild>
            <button aria-label="Close" css={styles.IconButton}>
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
  return <RadixDialog.Title css={styles.DialogTitle}>{children}</RadixDialog.Title>;
};
Dialog.Title.displayName = "Dialog.Title";

// Description
Dialog.Description = function ({ children }) {
  return <RadixDialog.Description css={styles.DialogDescription}>{children}</RadixDialog.Description>;
};
Dialog.Description.displayName = "Dialog.Description";

// Body
Dialog.Body = function ({ children }) {
  return <div>{children}</div>;
};
Dialog.Body.displayName = "Dialog.Body";

export default Dialog;
