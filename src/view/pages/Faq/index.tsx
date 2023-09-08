import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";
import { Collapsible } from "view/components/Collapsible";

export const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("FAQ")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.pageTitle}>Frequently Asked Questions</div>
        <div css={styles.pageDescription}>
          {
            "Explore our FAQ page for clear answers to common questions on a variety of topics. Designed for anyone seeking clarity, our explanations are both accurate and straightforward. Dive in to satisfy your curiosity!"
          }
        </div>
        <Collapsible
          title="What is gravity?"
          answer="Gravity is a natural force that attracts two bodies toward one another. It's the reason objects fall to the ground on Earth and why planets orbit around stars. It's one of the four fundamental forces of nature, playing a crucial role in the structure and behavior of the cosmos."
        />
        <Collapsible
          title="How does photosynthesis work?"
          answer="Photosynthesis is a process used by plants, algae, and certain bacteria to convert light energy, usually from the sun, into chemical energy in the form of glucose or other sugars. This process involves the intake of carbon dioxide and water and produces oxygen as a byproduct."
        />
        <Collapsible
          title="Why do we experience seasons?"
          answer="Seasons are primarily the result of the tilt of Earth's rotational axis relative to its orbital plane. As Earth orbits the sun, different parts of the planet receive varying amounts of sunlight, leading to seasonal changes in temperature and climate. This results in the periodic changes we know as spring, summer, autumn, and winter in most regions of the world."
        />
        <Collapsible
          title="What causes tides in the oceans?"
          answer="Tides are caused by the gravitational pull of the moon and the sun on Earth's oceans. As Earth rotates, the pull of gravity from these celestial bodies causes the water in the oceans to rise and fall, creating high and low tides. The moon, being closer to Earth, has a more significant influence than the sun."
        />
      </AppLayout>
    </>
  );
};
