import { FC } from "react";
import { Icons } from "@@view/components";
import * as styles from "./styles";

export interface AccordionHeaderProps {
  title: string;
  expanded: boolean;
  onClick: () => void;
}

export const AccordionHeader: FC<AccordionHeaderProps> = (props) => {
  const Icon = props.expanded ? Icons.ChevronDown : Icons.ChevronRight;
  return (
    <div css={[styles.root, props.expanded && styles.rootExpanded]} onClick={props.onClick}>
      <div css={styles.icon}>
        <Icon />
      </div>
      <div css={styles.title}>{props.title}</div>
    </div>
  );
};
