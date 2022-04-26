import { Icons } from "../Icons";
import { GenericDropdown } from "../GenericDropdown";
import { RadioGroup, RadioGroupItemProps } from "../RadioGroup";
import * as styles from "./styles";

export interface RadioSelectProps<TValue> {
  title: string;
  value: TValue | null;
  items: RadioGroupItemProps<TValue>[];
  onChange: (value: TValue) => void;
  onDropdownToggle?: (expanded: boolean) => void;
}

export const RadioSelect = <TValue,>(props: RadioSelectProps<TValue>) => {
  const selectedItem = props.items.find((i) => i.value === props.value);
  return (
    <div css={styles.root}>
      <GenericDropdown
        fullWidth={true}
        renderControl={(toggle, expanded) => {
          return (
            <div css={styles.input} onClick={toggle}>
              <div css={styles.inputTitle}>{props.title}</div>
              <div css={[styles.inputIcon, expanded && styles.inputIconExpanded]}>
                <Icons.ChevronRight />
              </div>
            </div>
          );
        }}
        renderContent={(collapse) => {
          return (
            <div css={styles.content}>
              <RadioGroup
                value={props.value}
                items={props.items}
                onChange={(value) => {
                  collapse();
                  props.onChange(value);
                }}
              />
            </div>
          );
        }}
        onToggle={props.onDropdownToggle}
      />
      {selectedItem && <RadioGroup value={props.value} items={[selectedItem]} onChange={() => {}} />}
    </div>
  );
};
