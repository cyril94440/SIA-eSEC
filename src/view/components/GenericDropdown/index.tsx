import React, { useCallback, useEffect, useState, FC, useRef } from "react";
import * as styles from "./styles";

export interface GenericDropdownProps {
  fullWidth?: boolean;
  renderControl: GenericDropdownRenderControl;
  renderContent: GenericDropdownRenderContent;
}

export interface GenericDropdownRenderControl {
  (toggle: () => void, visible: boolean): React.ReactNode;
}

export interface GenericDropdownRenderContent {
  (hide: () => void): React.ReactNode;
}

export const GenericDropdown: FC<GenericDropdownProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const handleHide = useCallback(() => setVisible(false), [setVisible]);
  const handleToggle = useCallback(() => setVisible((x) => !x), [setVisible]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const listener: EventListenerOrEventListenerObject = (event) => {
      const rootNode = rootRef.current!;
      const targetNode = event.target as Node;
      if (document.contains(targetNode) && !rootNode.contains(targetNode)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [visible]);

  return (
    <div ref={rootRef} css={styles.root}>
      {props.renderControl(handleToggle, visible)}
      {visible && (
        <div css={[styles.contentContainer, props.fullWidth && styles.contentContainerStretch]}>
          {props.renderContent(handleHide)}
        </div>
      )}
    </div>
  );
};
