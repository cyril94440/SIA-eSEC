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
  documentScore: rpc.TNScore | null;
  onDownloadReportClick: () => void;
  onIcaoMissingFeaturesClick: () => void;
}

const allLocations = [
  { value: rpc.SFLocation.DocumentBody, target: 40 },
  { value: rpc.SFLocation.InksBackground, target: 70 },
  { value: rpc.SFLocation.InksTechPersonalization, target: 50 },
  { value: rpc.SFLocation.SecurityDesign, target: 60 },
  { value: rpc.SFLocation.SFPersonalization, target: 80 },
];

const allScoreCategories = [
  { value: rpc.SFScoreCategory.ABC, target: 50 },
  { value: rpc.SFScoreCategory.Alteration, target: 60 },
  { value: rpc.SFScoreCategory.Counterfeit, target: 70 },
  { value: rpc.SFScoreCategory.Impostor, target: 80 },
  { value: rpc.SFScoreCategory.Level1, target: 85 },
  { value: rpc.SFScoreCategory.Level2, target: 70 },
  { value: rpc.SFScoreCategory.Level3, target: 60 },
  { value: rpc.SFScoreCategory.Recycling, target: 30 },
  { value: rpc.SFScoreCategory.Stealing, target: 40 },
];

export const Scores: FC<ScoresProps> = (props) => {
  if (!props.documentScore) {
    return <div css={styles.root}></div>;
  }

  return (
    <div css={styles.root}>
      <Header />
      <PanelGroup>
        <Panel title="Overall score">
          <Overall value={props.documentScore.totalScore * 10} />
        </Panel>
        <Panel>
          <Icao onMissingFeaturesClick={props.onIcaoMissingFeaturesClick} />
        </Panel>
        <Panel square={true} title="Overall Security">
          <ScoreRadar
            labels={["Location", "Protection", "Level"]}
            values={[
              props.documentScore.securityFeaturesScore!.locationScore!.score * 10,
              props.documentScore.securityFeaturesScore!.protectionScore!.score * 10,
              props.documentScore.securityFeaturesScore!.levelScore!.score * 10,
            ]}
            targetValues={[70, 75, 75]}
          />
        </Panel>
        <Panel square={true} title="Distribution of features">
          {ret(() => {
            const items = allLocations
              .map((l) => ({
                value: l.value,
                target: l.target,
                score: props.documentScore!.securityFeaturesScore!.locationScore!.scorePerLoc[l.value] ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ value }) => formatDocumentSecurityFeatureLocationString(value))}
                values={items.map(({ score }) => score * 10)}
                targetValues={items.map(({ target }) => target)}
              />
            );
          })}
        </Panel>
        <Panel square={true} title="Protection against threats">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                target: c.target,
                score:
                  props.documentScore!.securityFeaturesScore!.protectionScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ category }) => formatDocumentSecurityFeatureScoreCategoryString(category))}
                values={items.map(({ score }) => score * 10)}
                targetValues={items.map(({ target }) => target)}
              />
            );
          })}
        </Panel>
        <Panel square={true} title="Security level coverage">
          {ret(() => {
            const items = allScoreCategories
              .map((c) => ({
                category: c.value,
                target: c.target,
                score: props.documentScore!.securityFeaturesScore!.levelScore!.categoryScores[c.value]?.score ?? null,
              }))
              .filter(({ score }) => score !== null);

            return (
              <ScoreRadar
                labels={items.map(({ category }) => formatDocumentSecurityFeatureScoreCategoryString(category))}
                values={items.map(({ score }) => score * 10)}
                targetValues={items.map(({ target }) => target)}
              />
            );
          })}
        </Panel>
      </PanelGroup>
      <DownloadReport onClick={props.onDownloadReportClick} />
    </div>
  );
};
