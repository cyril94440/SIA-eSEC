import { FC } from "react";
import { DocumentScore } from "@@types";
import {
  DocumentScoreDistributionRadar,
  DocumentScoreLevelsCoverageRadar,
  DocumentScoreOverallRadar,
  DocumentScoreThreatsProtectionRadar,
} from "@@view/components";
import { DownloadReport, Header, Icao, Overall, Panel, PanelGroup } from "./components";
import * as styles from "./styles";

export interface ScoresProps {
  documentScore: DocumentScore | null;
  onDownloadReportClick: () => void;
  onIcaoMissingFeaturesClick: () => void;
}

export const Scores: FC<ScoresProps> = (props) => {
  if (!props.documentScore) {
    return <div css={styles.root}></div>;
  }

  return (
    <div css={styles.root}>
      <Header />
      <PanelGroup>
        <Panel title="Overall score">
          <Overall value={props.documentScore.value} />
        </Panel>
        <Panel>
          <Icao onMissingFeaturesClick={props.onIcaoMissingFeaturesClick} />
        </Panel>
        <Panel square={true} title="Overall Security">
          <DocumentScoreOverallRadar
            value={props.documentScore.overall}
            targetValue={props.documentScore.overallTarget}
          />
        </Panel>
        <Panel square={true} title="Distribution of features">
          <DocumentScoreDistributionRadar
            value={props.documentScore.distribution}
            targetValue={props.documentScore.distributionTarget}
          />
        </Panel>
        <Panel square={true} title="Protection against threats">
          <DocumentScoreThreatsProtectionRadar
            value={props.documentScore.threatsProtection}
            targetValue={props.documentScore.threatsProtectionTarget}
          />
        </Panel>
        <Panel square={true} title="Security level coverage">
          <DocumentScoreLevelsCoverageRadar
            value={props.documentScore.levelsCoverage}
            targetValue={props.documentScore.levelsCoverageTarget}
          />
        </Panel>
      </PanelGroup>
      <DownloadReport onClick={props.onDownloadReportClick} />
    </div>
  );
};
