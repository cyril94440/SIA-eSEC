import { FC, ReactNode } from "react";

export interface GenericAccordionProps {
  items: GenericAccordionItemProps[];
  onItemClick: (key: string) => void;
}

export interface GenericAccordionItemProps {
  key: string;
  expanded: boolean;
  header: (expanded: boolean, click: () => void) => ReactNode;
  content: () => ReactNode;
}

export const GenericAccordion: FC<GenericAccordionProps> = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div key={item.key}>
            <div>{item.header(item.expanded, () => props.onItemClick(item.key))}</div>
            {item.expanded && <div>{item.content()}</div>}
          </div>
        );
      })}
    </div>
  );
};
