import { useRef, useContext } from "react";
import { useTranslation } from "next-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import styles from "./Skills.module.scss";

//Components
import Card from "../../../components/Card";

//Context
import { ViewportContext } from "../../../context/ViewportContext";

const Skills = () => {
  const { t } = useTranslation("skills");
  const ref = useRef();
  const { centerViewport } = useContext(ViewportContext);

  return (
    <section className={styles.body} ref={ref}>
      <h1 className={styles.title}>Skills</h1>
      <ScrollContainer
        onStartScroll={() => centerViewport(ref.current.offsetTop)}
        hideScrollbars={false}
        className={styles.content}
      >
        <div className={styles.grid}>
          <div className={styles.column}>
            <Card
              type="skill"
              flex
              subtitle="Luis David Arias Manjarrez"
              profile={{
                large: "/assets/photos/square_photo_large.jpg",
                medium: "/assets/photos/square_photo_medium.jpg",
              }}
              items={[
                { name: t("personal.english"), value: "B2" },
                {
                  name: t("personal.observation"),
                  value: "90%",
                },
                {
                  name: t("personal.communication"),
                  value: "70%",
                },
                {
                  name: t("personal.creativity"),
                  value: "90%",
                },
                {
                  name: t("personal.leadership"),
                  value: "75%",
                },
              ]}
            />
          </div>
          <div className={styles.column}>
            <Card
              type="skill"
              flex
              title="Front-end Skills"
              items={[
                {
                  prefix: "/assets/icons/vue_icon.svg",
                  name: "Vue",
                },
                {
                  prefix: "/assets/icons/nuxt_icon.svg",
                  name: "Nuxt",
                },
                {
                  prefix: "/assets/icons/react_icon.svg",
                  name: "React",
                },
                {
                  prefix: "/assets/icons/next_icon.svg",
                  name: "Next",
                },
                {
                  prefix: "/assets/icons/html_icon.svg",
                  name: "HTML",
                },
                {
                  prefix: "/assets/icons/css_icon.svg",
                  name: "CSS",
                },
                {
                  prefix: "/assets/icons/sass_icon.svg",
                  name: "Sass",
                },
                {
                  prefix: "/assets/icons/tailwind_css_icon.svg",
                  name: "Tailwind",
                },
                {
                  prefix: "/assets/icons/javascript_icon.svg",
                  name: "Javascript",
                },
                {
                  prefix: "/assets/icons/typescript_icon.svg",
                  name: "Typescript",
                },
              ]}
            />
            <Card
              type="skill"
              title="Back-end Skills"
              items={[
                {
                  prefix: "/assets/icons/nodejs_icon.svg",
                  name: "Node.js",
                },
              ]}
            />
          </div>
          <div className={styles.column}>
            <Card
              type="skill"
              flex
              title="Design Skills"
              items={[
                {
                  prefix: "/assets/icons/photoshop_icon.svg",
                  name: "Photoshop",
                },
                {
                  prefix: "/assets/icons/aftereffects_icon.svg",
                  name: "After Effects",
                },
                {
                  prefix: "/assets/icons/illustrator_icon.svg",
                  name: "Illustrator",
                },
                {
                  prefix: "/assets/icons/adobexd_icon.svg",
                  name: "XD",
                },
                {
                  prefix: "/assets/icons/figma_icon.svg",
                  name: "Figma",
                },
              ]}
            />
            <Card
              type="skill"
              flex
              title="Testing Skills"
              items={[
                {
                  prefix: "/assets/icons/jest_icon.svg",
                  name: "Jest",
                },
                {
                  prefix: "/assets/icons/testing_library_icon.svg",
                  name: "Testing Library",
                },
                {
                  prefix: "/assets/icons/selenium_icon.svg",
                  name: "Selenium",
                },
              ]}
            />
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
};

export default Skills;
