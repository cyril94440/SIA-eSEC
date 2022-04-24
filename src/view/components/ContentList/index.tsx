import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface ContentListProps {
  items: ContentListItem[];
  activeItemKey: string;
}

export interface ContentListItem {
  key: string;
  value: () => ReactNode;
}

export const ContentList: FC<ContentListProps> = (props) => {
  const activeItemIndex = props.items.findIndex((item) => item.key === props.activeItemKey);
  return (
    <div css={styles.root} style={{ transform: `translate(${activeItemIndex * -100}%)` }}>
      {props.items.map((item, itemIndex) => {
        return (
          <div
            key={item.key}
            css={[styles.item, item.key === props.activeItemKey && styles.itemActive]}
            style={{ left: `${itemIndex * 100}%` }}
          >
            {item.value()}
          </div>
        );
      })}
    </div>
  );
};
