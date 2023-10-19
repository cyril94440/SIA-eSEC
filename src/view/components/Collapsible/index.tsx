import { FC } from "react";
import * as styles from "./styles";
import React from "react";
import { Icons } from "../Icons";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export const Collapsible: FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  const toggleIsOpen = React.useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div>
      <div css={styles.titleContainer} onClick={toggleIsOpen}>
        <span css={styles.titleContent}>{title}</span>
        <div
          css={styles.titleIcon}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms",
          }}
        >
          <Icons.ChevronDown />
        </div>
      </div>
      <div ref={contentRef} css={styles.collapseContainer} style={{ height: isOpen ? `${height}px` : "0px" }}>
        <div css={styles.collapseContent}>{children}</div>
      </div>
      <div css={styles.divider} />
    </div>
  );
};
