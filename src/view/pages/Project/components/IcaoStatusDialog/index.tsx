import { css } from "@emotion/react";
import React, { FC, Fragment } from "react";
import { DocumentIcaoStatus, DocumentIcaoStatusCategory } from "@@core/project";
import { Dialog } from "@@view/components";
import * as styles from "@@view/styles";

export interface IcaoStatusDialogProps {
  open: boolean;
  status: DocumentIcaoStatus;
  onOpenChange: (value: boolean) => void;
}

export const IcaoStatusDialog: FC<IcaoStatusDialogProps> = (props) => {
  return (
    <Dialog open={props.open} fullWidth={true} background={"white"} onOpenChange={props.onOpenChange}>
      <Dialog.Title>
        ICAO:{" "}
        <span css={props.status.completed ? Css.colorComplete : Css.colorNotComplete}>
          {props.status.completed ? "Complete" : "Not complete"}
        </span>
      </Dialog.Title>
      <Dialog.Description>Here’s a list of all the missing features you need to complete your ICAO.</Dialog.Description>
      <Dialog.Body>
        {props.open && (
          <div css={Css.tableList}>
            <Table categories={props.status.basic.categories} typeTitle={"Basic features"} />
            <Table categories={props.status.additional.categories} typeTitle={"Additional features"} />
          </div>
        )}
      </Dialog.Body>
    </Dialog>
  );
};

const Table: FC<{ categories: DocumentIcaoStatusCategory[]; typeTitle: string }> = (props) => {
  return (
    <table css={Css.table}>
      <tbody>
        {props.categories.map((c) => {
          return (
            <Fragment key={c.item.code}>
              <tr>
                <td css={[Css.cellHeader, Css.cellCategory]}>
                  {c.item.title}
                  <br />
                  {`(${c.item.code})`}
                </td>
                <td css={[Css.cellHeader, Css.cellFeatureCode]}>ICAO code by SIA</td>
                <td css={[Css.cellHeader]}>{props.typeTitle}</td>
                <td css={[Css.cellHeader]}>eSEC features</td>
              </tr>
              {c.subcategories.map((sc) => {
                return sc.features.map((f, fi) => {
                  return (
                    <tr key={f.item.code}>
                      {fi === 0 && (
                        <td css={[Css.cellContent, Css.cellCategory]} rowSpan={sc.features.length}>
                          {sc.item.title}
                          <br />
                          {`(${sc.item.code})`}
                        </td>
                      )}
                      <td css={[Css.cellContent, Css.cellFeatureCode]}>{f.item.code}</td>
                      <td css={[Css.cellContent, f.completed && Css.colorComplete]}>{f.item.title}</td>
                      <td css={[Css.cellContent, Css.cellRelatedFeatures]}>
                        {f.relatedFeatures.map((rf) => {
                          return (
                            <div css={[rf.completed && Css.colorComplete]} key={rf.item.id}>
                              {`- ${rf.item.title}`}
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  );
                });
              })}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

namespace Css {
  export const colorComplete = css`
    color: ${styles.COLOR_SUCCESS_40};
  `;

  export const colorNotComplete = css`
    color: ${styles.COLOR_CRITICAL_50};
  `;

  export const tableList = css`
    & table:not(:last-child) {
      margin-bottom: ${styles.getSize(8)};
    }
  `;

  export const table = css`
    ${styles.fontRegular14};
    width: 100%;
    border: 1px solid ${styles.COLOR_BLACK};
    border-spacing: 0;
    td {
      padding: ${styles.getSize(1)};
      &:not(:last-child) {
        border-right: 1px solid ${styles.COLOR_BLACK};
      }
    }
  `;

  export const cellHeader = css`
    font-weight: bold;
    border-top: 1px solid ${styles.COLOR_BLACK};
    border-bottom: 2px solid black;
  `;

  export const cellContent = css`
    border-bottom: 1px solid ${styles.COLOR_BLACK};
  `;

  export const cellCategory = css`
    width: 0;
    text-align: center;
  `;

  export const cellFeatureCode = css`
    width: 0;
    text-align: center;
  `;

  export const cellRelatedFeatures = css`
    & div:not(:last-child) {
      margin-bottom: 10px;
    }
  `;
}
