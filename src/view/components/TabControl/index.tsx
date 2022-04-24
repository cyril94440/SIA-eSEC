import { FC, ReactNode, useRef, useState } from "react";
import { useScrollClient } from "../ScrollController";
import { StickedContainer } from "../StickedContainer";
import * as styles from "./styles";

export interface TabControlProps {
  items: TabControlItem[];
  activeItem: string;
  stickedTabs?: boolean;
  tabsXPadding?: string;
  onChangeActiveItem: (value: string) => void;
}

export interface TabControlItem {
  key: string;
  title: string;
  content: () => ReactNode;
}

export const TabControl: FC<TabControlProps> = (props) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [stickedTabs, setStickedTabs] = useState(false);

  useScrollClient((container) => {
    const stickedTabs =
      !!props.stickedTabs && (!!tabsRef.current ? container.scrollTop > tabsRef.current.offsetTop : false);
    setStickedTabs(stickedTabs);
  });

  const activeContent = props.items.find((item) => item.key === props.activeItem)?.content() ?? null;
  return (
    <div css={styles.root}>
      <div ref={tabsRef}>
        <Tabs
          items={props.items}
          activeItem={props.activeItem}
          tabsXPadding={props.tabsXPadding}
          onChangeActiveItem={props.onChangeActiveItem}
        />
      </div>
      <div css={styles.content}>{activeContent}</div>
      {stickedTabs && (
        <StickedContainer>
          <Tabs
            items={props.items}
            activeItem={props.activeItem}
            tabsXPadding={props.tabsXPadding}
            onChangeActiveItem={(value) => {
              props.onChangeActiveItem(value);
              tabsRef.current?.scrollIntoView();
            }}
          />
        </StickedContainer>
      )}
    </div>
  );
};

interface TabsProps {
  items: TabControlItem[];
  activeItem: string;
  tabsXPadding: string | undefined;
  onChangeActiveItem: (value: string) => void;
}

const Tabs: FC<TabsProps> = (props) => {
  return (
    <div
      css={styles.tabs}
      style={{
        paddingLeft: props.tabsXPadding,
        paddingRight: props.tabsXPadding,
      }}
    >
      {props.items.map((item) => {
        const active = item.key === props.activeItem;
        return (
          <div
            key={item.key}
            css={[styles.tab, active && styles.tabActive]}
            onClick={!active ? () => props.onChangeActiveItem(item.key) : undefined}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
