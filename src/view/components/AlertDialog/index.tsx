import React, { FC, ReactNode, ReactElement } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import * as styles from "./styles";

interface Props {
  children: ReactNode;
}

type AlertDialogChild = ReactElement<Props & { children?: ReactNode }>;

type AlertDialogComponents = {
  Trigger: FC<{ children: ReactNode }>;
  Title: FC<{ children: ReactNode }>;
  Description: FC<{ children: ReactNode }>;
  Action: FC<{ children: ReactNode }>;
};

const AlertDialog: FC<Props> & AlertDialogComponents = ({ children }) => {
  let trigger = null;
  let title = null;
  let description = null;
  let action = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<AlertDialogChild>(child) && typeof child.type !== "string") {
      const component = child.type as React.ComponentType & { displayName?: string };

      switch (component.displayName) {
        case "AlertDialog.Trigger":
          trigger = child;
          break;
        case "AlertDialog.Title":
          title = child;
          break;
        case "AlertDialog.Description":
          description = child;
          break;
        case "AlertDialog.Action":
          action = child;
          break;
        default:
          break;
      }
    }
  });

  return (
    <RadixAlertDialog.Root>
      {trigger}
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay css={styles.AlertDialogOverlay} />
        <RadixAlertDialog.Content css={styles.AlertDialogContent}>
          {title}
          {description}
          <div css={styles.buttonsContainer}>
            <RadixAlertDialog.Cancel asChild>
              <div css={styles.cancel}>Cancel</div>
            </RadixAlertDialog.Cancel>
            {action}
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};
AlertDialog.displayName = "Dialog";

// Trigger
AlertDialog.Trigger = function ({ children }) {
  return <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>;
};
AlertDialog.Trigger.displayName = "AlertDialog.Trigger";

// Title
AlertDialog.Title = function ({ children }) {
  return <RadixAlertDialog.Title css={styles.AlertDialogTitle}>{children}</RadixAlertDialog.Title>;
};
AlertDialog.Title.displayName = "AlertDialog.Title";

// Description
AlertDialog.Description = function ({ children }) {
  return <RadixAlertDialog.Description css={styles.AlertDialogDescription}>{children}</RadixAlertDialog.Description>;
};
AlertDialog.Description.displayName = "AlertDialog.Description";

// Action
AlertDialog.Action = function ({ children }) {
  return <RadixAlertDialog.Action asChild>{children}</RadixAlertDialog.Action>;
};
AlertDialog.Action.displayName = "AlertDialog.Action";

export default AlertDialog;
