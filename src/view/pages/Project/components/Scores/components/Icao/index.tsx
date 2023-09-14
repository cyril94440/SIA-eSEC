import { FC } from "react";
import * as styles from "./styles";
import { FeatureItem } from "./FeatureItem";
import Dialog from "view/components/Dialog";

export interface IcaoProps {
  onMissingFeaturesClick: () => void;
}

const fakeData = [
  {
    category: "Security",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
  {
    category: "Authenticity",
    features: ["Lorem ipsum dolor sit amet consectetur adipiscing elit"],
  },
  {
    category: "Location",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
  {
    category: "Security",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
  {
    category: "Authenticity",
    features: ["Lorem ipsum dolor sit amet consectetur adipiscing elit"],
  },
  {
    category: "Location",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
  {
    category: "Security",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
  {
    category: "Authenticity",
    features: ["Lorem ipsum dolor sit amet consectetur adipiscing elit"],
  },
  {
    category: "Location",
    features: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ],
  },
];

export const Icao: FC<IcaoProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.status}>
        ICAO: <span css={styles.statusValue}>Not complete</span>
      </div>
      <Dialog>
        <Dialog.Trigger>
          <div css={styles.missingFeatures} onClick={props.onMissingFeaturesClick}>
            Missing features
          </div>
        </Dialog.Trigger>
        <Dialog.Title>
          ICAO: <span css={styles.red}>Not complete</span>
        </Dialog.Title>
        <Dialog.Description>
          Here’s a list of all the missing features you need to complete your ICAO.
          <span css={[styles.red]}>
            Total of missing features: {fakeData.reduce((acc, item) => acc + item.features.length, 0)}
          </span>
        </Dialog.Description>
        <Dialog.Body>
          {fakeData.map((item, index) => (
            <FeatureItem key={index} category={item.category} features={item.features} />
          ))}
        </Dialog.Body>
      </Dialog>
    </div>
  );
};

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
