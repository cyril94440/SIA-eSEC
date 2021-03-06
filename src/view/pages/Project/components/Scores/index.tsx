import { FC } from "react";
import {
  formatDocumentSecurityFeatureLocationString,
  formatDocumentSecurityFeatureScoreCategoryString,
  ret,
} from "@@core";
import * as rpc from "@@rpc/shared";
import { ScoreRadar } from "@@view/components";
import { DownloadReport, Header, Icao, Overall, Panel, PanelGroup } from "./components";
import * as styles from "./styles";

export interface ScoresProps {
  collapsed: boolean;
  documentScore: rpc.TNScore | null;
  onDownloadReportClick: () => void;
  onIcaoMissingFeaturesClick: () => void;
}

const allLocations = [
  { value: rpc.SFLocation.DocumentBody },
  { value: rpc.SFLocation.InksBackground },
  { value: rpc.SFLocation.InksTechPersonalization },
  { value: rpc.SFLocation.SecurityDesign },
  { value: rpc.SFLocation.SFPersonalization },
];

const allScoreCategories = [
  { value: rpc.SFScoreCategory.ABC },
  { value: rpc.SFScoreCategory.Alteration },
  { value: rpc.SFScoreCategory.Counterfeit },
  { value: rpc.SFScoreCategory.Impostor },
  { value: rpc.SFScoreCategory.Level1 },
  { value: rpc.SFScoreCategory.Level2 },
  { value: rpc.SFScoreCategory.Level3 },
  { value: rpc.SFScoreCategory.Recycling },
  { value: rpc.SFScoreCategory.Stealing },
];

export const Scores: FC<ScoresProps> = (props) => {
  if (!props.documentScore || props.collapsed) {
    return <div css={styles.root}></div>;
  }

  return (
    <div css={styles.root}>
      <Header />
      <PanelGroup>
        <Panel title="Overall score">
          <Overall value={props.documentScore.totalScore} />
        </Panel>
        <Panel>
          <Icao onMissingFeaturesClick={props.onIcaoMissingFeaturesClick} />
        </Panel>
        <Panel square={true} title="Overall Security">
          <ScoreRadar
            labels={["Location", "Protection", "Level"]}
            values={[
              props.documentScore.securityFeaturesScore!.locationScore!.score,
              props.documentScore.securityFeaturesScore!.protectionScore!.score,
              props.documentScore.securityFeaturesScore!.levelScore!.score,
            ]}
          />
        </Panel>
        <Panel square={true} title="Distribution of features">
          {ret(() => {
            const items = allLocations
              .map((l) => ({
                value: l.value,
                score: props.documentScore!.securityFeaturesScore!.locationScore!.scorePerLoc[l.value] ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ value }) => formatDocumentSecurityFeatureLocationString(value))}
                values={items.map(({ score }) => score)}
              />
            );
          })}
        </Panel>
        <Panel square={true} title="Protection against threats">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                score:
                  props.documentScore!.securityFeaturesScore!.protectionScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ category }) => formatDocumentSecurityFeatureScoreCategoryString(category))}
                values={items.map(({ score }) => score)}
              />
            );
          })}
        </Panel>
        <Panel square={true} title="Security level coverage">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                score: props.documentScore!.securityFeaturesScore!.levelScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ category }) => formatDocumentSecurityFeatureScoreCategoryString(category))}
                values={items.map(({ score }) => score)}
              />
            );
          })}
        </Panel>
      </PanelGroup>
      <DownloadReport onClick={props.onDownloadReportClick} />
    </div>
  );
};
