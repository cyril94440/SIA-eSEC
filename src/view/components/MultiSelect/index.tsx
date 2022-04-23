import { ReactNode } from "react";
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

  const handleChange = (item: TItem, selected: boolean) => {
    const newValue = selected ? [...props.value, item] : props.value.filter((i) => i !== item);
    props.onChange(newValue);
  };

  return (
    <>
      <GenericDropdown
        fullWidth={true}
        renderControl={(toggle, visible) => {
          return (
            <div css={styles.control}>
              <div css={styles.input} onClick={toggle}>
                <div css={styles.inputText}>{props.title}</div>
                <div css={styles.inputIcon}>{visible ? <Icons.ChevronDown /> : <Icons.ChevronRight />}</div>
              </div>
            </div>
          );
        }}
        renderContent={() => {
          return (
            <div css={styles.content}>
              <div css={styles.itemList}>
                {props.items.map((item) => (
                  <Item
                    key={props.itemId(item)}
                    item={item}
                    itemContent={props.itemContent}
                    selected={valueSet.has(item)}
                    onChange={(selected) => handleChange(item, selected)}
                  />
                ))}
              </div>
            </div>
          );
        }}
      />
      {selectedItems.length > 0 && (
        <div css={styles.itemList}>
          {selectedItems.map((item) => (
            <Item
              key={props.itemId(item)}
              item={item}
              itemContent={props.itemContent}
              selected={true}
              onChange={(selected) => handleChange(item, selected)}
            />
          ))}
        </div>
      )}
    </>
  );
};

interface ItemProps<TItem> {
  item: TItem;
  itemContent: (item: TItem, selected: boolean) => ReactNode;
  selected: boolean;
  onChange: (selected: boolean) => void;
}

const Item = <TItem,>(props: ItemProps<TItem>) => {
  return (
    <div css={styles.item} onClick={() => props.onChange(!props.selected)}>
      <div
        css={[styles.itemIcon, props.selected && styles.itemIconChecked]}
        className={!props.selected ? styles.unsetColorOnHover : undefined}
      >
        {props.selected ? <Icons.CheckboxChecked /> : <Icons.CheckboxUnchecked />}
      </div>
      <div
        css={[styles.itemContent, props.selected && styles.itemContentSelected]}
        className={styles.unsetColorOnHover}
      >
        {props.itemContent(props.item, props.selected)}
      </div>
    </div>
  );
};
