import { FC } from "react";
import { ret } from "@@core/base";
import {
  formatDocumentSecurityFeatureLocationString,
  formatDocumentSecurityFeatureScoreCategoryString,
} from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { DownloadReport, Header, Icao, Overall, Panel, PanelGroup } from "./components";
import * as styles from "./styles";
import { CheckpointBar } from "view/components/CheckpointBar";

export interface ScoresProps {
  value: Rpc.TNScore | null;
  collapsed: boolean;
  onDownloadReportClick: () => void;
}

export const allLocations = [
  { value: Rpc.SFLocation.SFDocumentBody },
  { value: Rpc.SFLocation.InksBackground },
  { value: Rpc.SFLocation.InksTechPersonalization },
  { value: Rpc.SFLocation.SecurityDesign },
  { value: Rpc.SFLocation.SFPersonalization },
];

export const allScoreCategories = [
  { value: Rpc.SFScoreCategory.ABC },
  { value: Rpc.SFScoreCategory.Alteration },
  { value: Rpc.SFScoreCategory.Counterfeit },
  { value: Rpc.SFScoreCategory.Impostor },
  { value: Rpc.SFScoreCategory.Level1 },
  { value: Rpc.SFScoreCategory.Level2 },
  { value: Rpc.SFScoreCategory.Level3 },
  { value: Rpc.SFScoreCategory.Recycling },
  { value: Rpc.SFScoreCategory.Stealing },
];

export const Scores: FC<ScoresProps> = (props) => {
  if (!props.value || props.collapsed) {
    return <div css={styles.root}></div>;
  }
  return (
    <div css={styles.root}>
      <Header />
      <PanelGroup>
        <Panel title="Overall score">
          <Overall value={props.value.totalScore} />
        </Panel>
        <Panel>
          <Icao />
        </Panel>
        <Panel title="Overall Security">
          <div css={styles.barContainer}>
            <div css={styles.barTitle}>Location</div>
            <CheckpointBar progression={props.value.securityFeaturesScore!.locationScore!.score * 10} />
          </div>
          <div css={styles.barContainer}>
            <div css={styles.barTitle}>Protection</div>
            <CheckpointBar progression={props.value.securityFeaturesScore!.protectionScore!.score * 10} />
          </div>
          <div css={styles.barContainer}>
            <div css={styles.barTitle}>Level</div>
            <CheckpointBar progression={props.value.securityFeaturesScore!.levelScore!.score * 10} />
          </div>
        </Panel>
        <Panel title="Distribution of features">
          {ret(() => {
            const items = allLocations
              .map((l) => ({
                value: l.value,
                score: props.value!.securityFeaturesScore!.locationScore!.scorePerLoc[l.value] ?? null,
              }))
              .filter(({ score }) => score !== null);

            return items.map(({ value, score }) => {
              return (
                <div key={value} css={styles.barContainer}>
                  <div css={styles.barTitle}>{formatDocumentSecurityFeatureLocationString(value)}</div>
                  <CheckpointBar progression={score * 10} />
                </div>
              );
            });
          })}
        </Panel>
        <Panel title="Protection against threats">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                score: props.value!.securityFeaturesScore!.protectionScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return items.map(({ category, score }) => {
              return (
                <div key={category} css={styles.barContainer}>
                  <div css={styles.barTitle}>{formatDocumentSecurityFeatureScoreCategoryString(category)}</div>
                  <CheckpointBar progression={score * 10} />
                </div>
              );
            });
          })}
        </Panel>
        <Panel title="Security level coverage">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                score: props.value!.securityFeaturesScore!.levelScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return items.map(({ category, score }) => {
              return (
                <div key={category} css={styles.barContainer}>
                  <div css={styles.barTitle}>{formatDocumentSecurityFeatureScoreCategoryString(category)}</div>
                  <CheckpointBar progression={score * 10} />
                </div>
              );
            });
          })}
        </Panel>
      </PanelGroup>
      <DownloadReport onClick={props.onDownloadReportClick} />
    </div>
  );
};
