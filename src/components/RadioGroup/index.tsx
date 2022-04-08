import { ReactNode, VFC } from "react";
import { Icons } from "../Icons";
import * as styles from "./styles";

export interface RadioGroupProps<TValue> {
  value: TValue;
  items: RadioGroupItemProps<TValue>[];
  onChange: (value: TValue) => void;
}

export interface RadioGroupItemProps<TValue> {
  value: TValue;
  content: ReactNode;
  activeColor?: string;
  activeBackgroundColor?: string;
}

export const RadioGroup = <TValue,>(props: RadioGroupProps<TValue>) => {
  return (
    <div css={styles.root}>
      {props.items.map((item) => {
        const active = item.value === props.value;
        const Icon = item.value === props.value ? Icons.RadioActive : Icons.RadioInactive;
        return (
          <div
            key={String(item.value)}
            css={[styles.item, active && styles.itemActive]}
            style={{
              color: active ? item.activeColor : undefined,
              backgroundColor: active ? item.activeBackgroundColor : undefined,
            }}
            onClick={!active ? () => props.onChange(item.value) : undefined}
          >
            <div css={styles.itemIcon}>
              <Icon color="currentColor" />
            </div>
            <div css={styles.itemContent}>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};
