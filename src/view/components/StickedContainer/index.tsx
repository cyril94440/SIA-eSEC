import { FC, ReactNode, useRef } from "react";
import { useScrollClient } from "@@view/components";
import * as styles from "./styles";

export interface StickedContainerProps {
  children?: ReactNode;
}

export const StickedContainer: FC<StickedContainerProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  useScrollClient((container) => {
    ref.current && (ref.current.style.top = container.scrollTop + "px");
  });

  return (
    <div css={styles.root} ref={ref}>
      {props.children}
    </div>
  );
};
