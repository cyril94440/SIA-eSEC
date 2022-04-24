import { FC, ReactNode, useRef, useState } from "react";
import { ContentList } from "../ContentList";
import { useScrollClient } from "../ScrollController";
import { StickedContainer } from "../StickedContainer";
import * as styles from "./styles";

export interface TabControlProps {
  items: TabControlItem[];
  activeItemKey: string;
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

  return (
    <>
      <div ref={tabsRef}>
        <Tabs
          items={props.items}
          activeItemKey={props.activeItemKey}
          tabsXPadding={props.tabsXPadding}
          onChangeActiveItem={props.onChangeActiveItem}
        />
      </div>
      <ContentList
        items={props.items.map((i) => ({ key: i.key, value: i.content }))}
        activeItemKey={props.activeItemKey}
      />
      {stickedTabs && (
        <StickedContainer>
          <Tabs
            items={props.items}
            activeItemKey={props.activeItemKey}
            tabsXPadding={props.tabsXPadding}
            onChangeActiveItem={(value) => {
              props.onChangeActiveItem(value);
              tabsRef.current?.scrollIntoView();
            }}
          />
        </StickedContainer>
      )}
    </>
  );
};

interface TabsProps {
  items: TabControlItem[];
  activeItemKey: string;
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
        const active = item.key === props.activeItemKey;
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
