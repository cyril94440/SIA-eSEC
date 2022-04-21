import { FC } from "react";
import * as rpc from "@@rpc/shared";
import {
  DocumentScoreDistributionRadar,
  DocumentScoreLevelsCoverageRadar,
  DocumentScoreOverallRadar,
  DocumentScoreThreatsProtectionRadar,
} from "@@view/components";
import { DownloadReport, Header, Icao, Overall, Panel, PanelGroup } from "./components";
import * as styles from "./styles";

export interface ScoresProps {
  documentScore: rpc.TNScore | null;
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
          <Overall value={props.documentScore.totalScore} />
        </Panel>
        <Panel>
          <Icao onMissingFeaturesClick={props.onIcaoMissingFeaturesClick} />
        </Panel>
        <Panel square={true} title="Overall Security">
          <DocumentScoreOverallRadar
            value={{
              design: 80,
              distribution: 75,
              levelsCoverage: 75,
              threatsProtection: 50,
            }}
            targetValue={{
              design: 75,
              distribution: 70,
              levelsCoverage: 75,
              threatsProtection: 75,
            }}
          />
        </Panel>
        <Panel square={true} title="Distribution of features">
          <DocumentScoreDistributionRadar
            value={{
              body: 80,
              design: 85,
              personalization: 60,
            }}
            targetValue={{
              body: 40,
              design: 60,
              personalization: 80,
            }}
          />
        </Panel>
        <Panel square={true} title="Protection against threats">
          <DocumentScoreThreatsProtectionRadar
            value={{
              alteration: 60,
              counterfeit: 70,
              imposter: 35,
              recycling: 65,
              stealing: 0,
            }}
            targetValue={{
              alteration: 80,
              counterfeit: 60,
              imposter: 20,
              recycling: 15,
              stealing: 15,
            }}
          />
        </Panel>
        <Panel square={true} title="Security level coverage">
          <DocumentScoreLevelsCoverageRadar
            value={{
              level1: 60,
              level2: 70,
              level3: 70,
              madsv: 80,
            }}
            targetValue={{
              level1: 85,
              level2: 70,
              level3: 60,
              madsv: 20,
            }}
          />
        </Panel>
      </PanelGroup>
      <DownloadReport onClick={props.onDownloadReportClick} />
    </div>
  );
};
