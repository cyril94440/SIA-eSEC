import { MutableRefObject, ReactNode, useCallback, useRef } from "react";
import { GenericDropdown, GenericDropdownRenderContent, GenericDropdownRenderControl } from "../GenericDropdown";
import { Icons } from "../Icons";
import * as styles from "./styles";

export interface SelectProps<TItem> {
  items: TItem[];
  itemId: (item: TItem) => string;
  itemText: (item: TItem) => string;
  itemContent?: (item: TItem) => ReactNode;
  itemSelected: (item: TItem) => boolean;
  onItemSelect: (item: TItem) => void;
}

export const Select = <TItem,>(props: SelectProps<TItem>) => {
  const { items, itemId, itemText, itemContent, itemSelected, onItemSelect } = props;
  const selectedItem = items.find((item) => item && itemSelected(item));
  const selectedItemText = selectedItem ? itemText(selectedItem) : "";

  const hideRef = useRef<() => void>();
  const handleItemClick = useHandleItemClick(hideRef, onItemSelect);
  const dropdownRenderControl = useDropdownRenderControl(selectedItemText);
  const dropdownRenderContent = useDropdownRenderContent(
    items,
    itemId,
    itemText,
    itemContent,
    itemSelected,
    hideRef,
    handleItemClick
  );

  return (
    <GenericDropdown fullWidth={true} renderControl={dropdownRenderControl} renderContent={dropdownRenderContent} />
  );
};

function useHandleItemClick<TItem>(
  hideRef: MutableRefObject<(() => void) | undefined>,
  onItemSelect: (item: TItem) => void
) {
  return useCallback<(item: TItem) => void>(
    (item) => {
      if (hideRef.current) {
        hideRef.current();
        hideRef.current = undefined;
      }

      onItemSelect(item);
    },
    [hideRef, onItemSelect]
  );
}

function useDropdownRenderControl(text: string) {
  return useCallback<GenericDropdownRenderControl>(
    (toggle) => {
      return (
        <div css={styles.control} onClick={toggle}>
          <div css={styles.controlText}>{text}</div>
          <div css={styles.controlIcon}>
            <Icons.ChevronDown color="currentColor" />
          </div>
        </div>
      );
    },
    [text]
  );
}

function useDropdownRenderContent<TItem>(
  items: Array<TItem>,
  itemId: (item: TItem) => string,
  itemText: (item: TItem) => string,
  itemContent: ((item: TItem) => ReactNode) | undefined,
  itemSelected: (item: TItem) => boolean,
  hideRef: MutableRefObject<(() => void) | undefined>,
  handleItemClick: (item: TItem) => void
) {
  return useCallback<GenericDropdownRenderContent>(
    (hide) => {
      hideRef.current = hide;
      return (
        <div css={styles.contentList}>
          {items.map((item) => (
            <div key={itemId(item)} css={styles.contentListItem} onClick={() => handleItemClick(item)}>
              {itemContent ? (
                itemContent(item)
              ) : (
                <div css={[styles.defaultItemContent, itemSelected(item) && styles.defaultItemContentSelected]}>
                  {itemText(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    },
    [hideRef, items, itemId, itemContent, itemText]
  );
}
