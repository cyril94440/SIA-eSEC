import { ReactNode, useRef } from "react";
import { GenericDropdown } from "../GenericDropdown";
import { Icons } from "../Icons";
import * as styles from "./styles";

export interface SelectProps<TItem> {
  value: TItem | null;
  items: TItem[];
  itemId: (item: TItem) => string;
  itemText: (item: TItem) => string;
  itemContent?: (item: TItem, selected: boolean) => ReactNode;
  onChange: (value: TItem) => void;
}

export const Select = <TItem,>(props: SelectProps<TItem>) => {
  const hideRef = useRef<() => void>();
  const valueText = props.value ? props.itemText(props.value) : "";
  return (
    <GenericDropdown
      fullWidth={true}
      renderControl={(toggle) => {
        return (
          <div css={styles.control} onClick={toggle}>
            <div css={styles.controlText}>{valueText}</div>
            <div css={styles.controlIcon}>
              <Icons.ChevronDown />
            </div>
          </div>
        );
      }}
      renderContent={(hide) => {
        hideRef.current = hide;
        return (
          <div css={styles.content}>
            {props.items.map((item) => {
              const selected = item === props.value;
              return (
                <div
                  key={props.itemId(item)}
                  css={styles.item}
                  onClick={() => {
                    if (hideRef.current) {
                      hideRef.current();
                      hideRef.current = undefined;
                    }
                    props.onChange(item);
                  }}
                >
                  {props.itemContent?.(item, selected) ?? (
                    <div css={[styles.defaultItemContent, item === props.value && styles.defaultItemContentSelected]}>
                      {props.itemText(item)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
};
