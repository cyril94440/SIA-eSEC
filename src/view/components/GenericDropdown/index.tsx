import React, { useCallback, useEffect, useState, FC, useRef } from "react";
import * as styles from "./styles";

export interface GenericDropdownProps {
  fullWidth?: boolean;
  renderControl: GenericDropdownRenderControl;
  renderContent: GenericDropdownRenderContent;
}

export interface GenericDropdownRenderControl {
  (toggle: () => void, expanded: boolean): React.ReactNode;
}

export interface GenericDropdownRenderContent {
  (collapse: () => void): React.ReactNode;
}

export const GenericDropdown: FC<GenericDropdownProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const handleCollapse = useCallback(() => setExpanded(false), [setExpanded]);
  const handleToggle = useCallback(() => setExpanded((x) => !x), [setExpanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const listener: EventListenerOrEventListenerObject = (event) => {
      const rootNode = rootRef.current!;
      const targetNode = event.target as Node;
      if (document.contains(targetNode) && !rootNode.contains(targetNode)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("wheel", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("wheel", listener);
    };
  }, [expanded]);

  return (
    <div ref={rootRef} css={styles.root}>
      {props.renderControl(handleToggle, expanded)}
      <div
        css={[
          styles.contentContainer,
          expanded && styles.contentContainerExpanded,
          props.fullWidth && styles.contentContainerFullWidth,
        ]}
      >
        {expanded && props.renderContent(handleCollapse)}
      </div>
    </div>
  );
};
