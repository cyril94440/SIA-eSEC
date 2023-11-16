import React, { useCallback, useEffect, useState, FC, useRef } from "react";
import * as styles from "./styles";

export interface GenericDropdownProps {
  fullWidth?: boolean;
  renderControl: GenericDropdownRenderControl;
  renderContent: GenericDropdownRenderContent;
  onToggle?: (expanded: boolean) => void;
}

export interface GenericDropdownRenderControl {
  (toggle: () => void, expanded: boolean): React.ReactNode;
}

export interface GenericDropdownRenderContent {
  (collapse: () => void): React.ReactNode;
}

export const GenericDropdown: FC<GenericDropdownProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  const expand = useCallback(() => {
    setExpanded(true);
    props.onToggle?.(true);
  }, [props.onToggle]);

  const collapse = useCallback(() => {
    setCollapsing(true);
    setTimeout(() => {
      setExpanded(false);
      setCollapsing(false);
      props.onToggle?.(false);
    }, 100);
  }, [props.onToggle]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const listener: EventListenerOrEventListenerObject = (event) => {
      const rootNode = rootRef.current!;
      const targetNode = event.target as Node;
      if (document.contains(targetNode) && !rootNode.contains(targetNode)) {
        collapse();
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [expanded, collapse]);

  useEffect(() => {
    expanded && scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [expanded]);

  return (
    <div ref={rootRef} css={styles.root}>
      {props.renderControl(expanded ? collapse : expand, expanded)}
      <div
        css={[
          styles.contentContainer,
          expanded && styles.contentContainerExpanded,
          collapsing && styles.contentContainerCollapsing,
          props.fullWidth && styles.contentContainerFullWidth,
          expanded && { position: "relative", zIndex: 4 },
        ]}
      >
        {expanded && <div style={{ position: "relative", zIndex: 3 }}>{props.renderContent(collapse)}</div>}
        <div style={{ position: "relative", zIndex: -10, marginTop: 60 }} ref={scrollRef}></div>
      </div>
    </div>
  );
};
