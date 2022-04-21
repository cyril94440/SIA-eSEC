import Link, { LinkProps } from "next/link";
import { FC } from "react";
import { Icon } from "@@view/components";
import * as styles from "./styles";

export interface SidenavItemProps {
  Icon: Icon;
  title: string;
  minimized: boolean;
  link?: LinkProps;
  active?: boolean;
  onClick?: () => void;
}

export const SidenavItem: FC<SidenavItemProps> = (props) => {
  const rootCss = [styles.root, props.active && styles.rootActive];

  const inner = (
    <>
      <div css={styles.icon}>
        <props.Icon />
      </div>
      <div css={[styles.title, props.minimized && styles.titleHidden]}>{props.title}</div>
    </>
  );

  if (props.link) {
    return (
      <Link {...props.link}>
        <a css={rootCss}>{inner}</a>
      </Link>
    );
  } else {
    return (
      <div css={rootCss} onClick={!props.active ? props.onClick : undefined}>
        {inner}
      </div>
    );
  }
};
