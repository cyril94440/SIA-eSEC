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
  onDropdownToggle?: (expanded: boolean) => void;
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
        renderControl={(toggle, expanded) => {
          return (
            <div css={styles.input} onClick={toggle}>
              <div css={styles.inputText}>{props.title}</div>
              <div css={[styles.inputIcon, expanded && styles.inputIconExpanded]}>
                <Icons.ChevronRight />
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
                    useCloseIcon={false}
                    onChange={(selected) => handleChange(item, selected)}
                  />
                ))}
              </div>
            </div>
          );
        }}
        onToggle={props.onDropdownToggle}
      />
      {selectedItems.length > 0 && (
        <div css={[styles.itemList, { position: "relative", zIndex: 2 }]}>
          {selectedItems.map((item) => (
            <Item
              key={props.itemId(item)}
              item={item}
              itemContent={props.itemContent}
              selected={true}
              useCloseIcon={true}
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
  useCloseIcon: boolean;
  onChange: (selected: boolean) => void;
}

const Item = <TItem,>(props: ItemProps<TItem>) => {
  const Icon = props.selected ? (props.useCloseIcon ? Icons.Close : Icons.CheckboxChecked) : Icons.CheckboxUnchecked;
  return (
    <div css={styles.item} onClick={() => props.onChange(!props.selected)}>
      <div
        css={[styles.itemIcon, props.selected && styles.itemIconChecked, props.useCloseIcon && styles.itemIconClose]}
        className={Icon !== Icons.CheckboxChecked ? styles.itemHoverColor : undefined}
      >
        <Icon />
      </div>
      <div css={[styles.itemContent, props.selected && styles.itemContentSelected]} className={styles.itemHoverColor}>
        {props.itemContent(props.item, props.selected)}
      </div>
    </div>
  );
};
