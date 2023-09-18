import { css } from "@emotion/react";
import { InputHTMLAttributes } from "react";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import * as styles from "@@view/styles";

export interface InputProps<TFields extends FieldValues> extends UseControllerProps<TFields> {
  type?: InputHTMLAttributes<any>["type"] | "password-like";
  placeholder?: InputHTMLAttributes<any>["placeholder"];
  autoComplete?: InputHTMLAttributes<any>["autoComplete"];
}

export const Input = <TFields extends FieldValues>(props: InputProps<TFields>) => {
  const { field } = useController(props);
  return (
    <input //
      css={[Css.root, props.type === "password-like" && Css.rootPasswordLike]}
      type={props.type === "password-like" ? "text" : props.type}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      {...field}
    />
  );
};

namespace Css {
  export const root = css`
    padding: 0 ${styles.getSize(2)};
    background-color: ${styles.COLOR_NEUTRAL_95};
    border: none;
    border-radius: ${styles.getSize(1 / 2)};
    width: ${styles.getSize(36)};
    height: ${styles.getSize(5)};
    font-size: ${styles.FONT_MEDIUM_14_SIZE};

    &::placeholder {
      color: ${styles.COLOR_NEUTRAL_80};
      font-size: ${styles.getSize(1.5)};
      font-weight: ${styles.FONT_MEDIUM_14_SIZE};
    }
  `;

  export const rootPasswordLike = css`
    text-security: disc;
    -webkit-text-security: disc;
    -mox-text-security: disc;
  `;
}
