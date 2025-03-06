'use client';
import { useRef } from "react";
import { useTranslations } from "next-intl";
import "./SkillsSection.scss";

//Components
import SkillCard from "@/modules/skills/components/SkillCard";

import { BACKEND_TECHNOLOGIES, DESIGN_SKILLS, FRONTEND_TECHNOLOGIES, TESTING_SKILLS } from "@/config/constants/skills";

const SkillsSection = () => {
  const t = useTranslations("skills");
  const ref = useRef();

  return (
    <section className="section relative flex flex-col justify-center h-screen py-8" ref={ref}>
      <h1 className="main-text text-center mb-8 text-xl">Skills</h1>

      <div className="skills__content flex md:w-full scrollbars-hidden overflow-x-scroll lg:overflow-x-hidden">
        <div className="flex shrink-0 w-auto md:inline-grid md:grid-cols-3 h-full lg:max-w-5xl lg:mx-auto">
          <div className="skills__column w-sm md:w-md lg:w-auto flex flex-col py-0 px-4">
            <SkillCard
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
              className="flex-1"
            />
          </div>

          <div className="skills__column w-sm md:w-md lg:w-auto flex flex-col gap-4 py-0 px-4">
            <SkillCard
              title="Front-end Skills"
              items={FRONTEND_TECHNOLOGIES}
            />
            <SkillCard
              title="Back-end Skills"
              items={BACKEND_TECHNOLOGIES}
            />
          </div>
          <div className="skills__column w-sm md:w-md lg:w-auto flex flex-col gap-4 py-0 px-4">
            <SkillCard
              title="Design Skills"
              items={DESIGN_SKILLS}
            />
            <SkillCard
              title="Testing Skills"
              items={TESTING_SKILLS}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
