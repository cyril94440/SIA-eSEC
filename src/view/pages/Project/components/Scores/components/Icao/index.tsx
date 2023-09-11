import { FC } from "react";
import * as styles from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Icons } from "@@view/components";
import { FeatureItem } from "./FeatureItem";

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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div css={styles.missingFeatures} onClick={props.onMissingFeaturesClick}>
            Missing features
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay css={styles.DialogOverlay} />
          <Dialog.Content css={styles.DialogContent}>
            <Dialog.Title css={styles.DialogTitle}>
              ICAO: <span css={styles.red}>Not complete</span>
            </Dialog.Title>
            <Dialog.Description css={styles.DialogDescription}>
              Here’s a list of all the missing features you need to complete your ICAO.
              <div css={[styles.red]}>
                Total of missing features: {fakeData.reduce((acc, item) => acc + item.features.length, 0)}
              </div>
            </Dialog.Description>
            {fakeData.map((item, index) => (
              <FeatureItem key={index} category={item.category} features={item.features} />
            ))}
            <Dialog.Close asChild>
              <button aria-label="Close" css={styles.IconButton}>
                <Icons.Close />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
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
