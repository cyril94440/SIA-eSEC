import { FC } from "react";
import { Icon } from "../Icon";
import * as styles from "./styles";

export interface CardSelectProps {
  value: string;
  items: CardSelectItem[];
  onChange: (value: string) => void;
}

export interface CardSelectItem {
  value: string;
  Icon: Icon;
  label: string;
}

export const CardSelect: FC<CardSelectProps> = (props) => {
  return (
    <div css={styles.root}>
      {props.items.map((item) => {
        const selected = item.value === props.value;
        return (
          <div key={item.value} css={styles.item}>
            <div
              css={[styles.itemIcon, selected && styles.itemIconSelected]}
              onClick={!selected ? () => props.onChange(item.value) : undefined}
            >
              <item.Icon />
            </div>
            <div css={styles.itemLabel}>{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};
