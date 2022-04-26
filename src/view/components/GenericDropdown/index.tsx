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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  const expand = useCallback(() => {
    setExpanded(true);
  }, []);

  const collapse = useCallback(() => {
    setCollapsing(true);
    setTimeout(() => {
      setExpanded(false);
      setCollapsing(false);
    }, 100);
  }, []);

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
    document.addEventListener("wheel", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("wheel", listener);
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
        ]}
      >
        {expanded && props.renderContent(collapse)}
        <div ref={scrollRef}></div>
      </div>
    </div>
  );
};
