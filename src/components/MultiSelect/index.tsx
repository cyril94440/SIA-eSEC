import { ReactNode } from "react";
import * as consts from "@@consts";
import { GenericDropdown } from "../GenericDropdown";
import { Icons } from "../Icons";
import * as styles from "./styles";

export interface MultiSelectProps<TItem> {
  title: string;
  value: TItem[];
  items: TItem[];
  itemId: (item: TItem) => string;
  itemContent: (item: TItem, selected: boolean) => ReactNode;
  onChange: (value: TItem[]) => void;
}

export const MultiSelect = <TItem,>(props: MultiSelectProps<TItem>) => {
  const valueSet = new Set(props.value);
  const selectedItems = props.items.filter((item) => valueSet.has(item));
  const notSelectedItems = props.items.filter((item) => !valueSet.has(item));
  return (
    <GenericDropdown
      fullWidth={true}
      renderControl={(toggle) => {
        return (
          <div css={styles.control}>
            <div css={styles.input} onClick={toggle}>
              <div css={styles.inputText}>{props.title}</div>
              <div css={styles.inputIcon}>
                <Icons.ChevronDown color="currentColor" />
              </div>
            </div>
            <div css={styles.itemList}>
              {selectedItems.map((item) => (
                <div
                  key={props.itemId(item)}
                  css={styles.item}
                  onClick={() => {
                    const newValue = props.value.filter((i) => i !== item);
                    props.onChange(newValue);
                  }}
                >
                  <div css={styles.itemIcon}>
                    <Icons.CheckboxChecked color={consts.COLOR_PRIMARY_60} />
                  </div>
                  <div css={[styles.itemContent, styles.itemContentSelected]}>{props.itemContent(item, true)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
      renderContent={() => {
        return (
          <div css={[styles.content, selectedItems.length > 0 && styles.contentWithTopMargin]}>
            <div css={styles.itemList}>
              {notSelectedItems.map((item) => (
                <div
                  key={props.itemId(item)}
                  css={styles.item}
                  onClick={() => {
                    const newValue = [...props.value, item];
                    props.onChange(newValue);
                  }}
                >
                  <div css={styles.itemIcon}>
                    <Icons.CheckboxUnchecked color={consts.COLOR_NEUTRAL_80} />
                  </div>
                  <div css={styles.itemContent}>{props.itemContent(item, false)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};
