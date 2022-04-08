import React, { useCallback, useState, VFC } from "react";
import { useTimeout } from "@@hooks";
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

const HIDE_CONTENT_TIMEOUT = 333;

export const GenericDropdown: VFC<GenericDropdownProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const hideTimeout = useTimeout();

  const handleMouseLeave = useCallback(() => {
    if (visible) {
      hideTimeout.start(() => setVisible(false), HIDE_CONTENT_TIMEOUT);
    }
  }, [hideTimeout, visible]);

  const handleMouseOver = useCallback(() => hideTimeout.cancel(), [hideTimeout]);
  const handleHide = useCallback(() => setVisible(false), [setVisible]);
  const handleToggle = useCallback(() => setVisible((x) => !x), [setVisible]);

  return (
    <div css={styles.root} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
      {props.renderControl(handleToggle, visible)}
      {visible && (
        <div css={[styles.contentContainer, props.fullWidth && styles.contentContainerStretch]}>
          {props.renderContent(handleHide)}
        </div>
      )}
    </div>
  );
};
