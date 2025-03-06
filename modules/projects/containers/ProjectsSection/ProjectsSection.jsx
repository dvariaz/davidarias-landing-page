import { getLocale, getTranslations } from "next-intl/server";

import "./ProjectsSection.scss";

//Projects
import { ProjectGrid } from "@/modules/projects/components/ProjectGrid";

const getProjects = async (locale) => {
    const response = await fetch(`${process.env.APP_BASE_URL}/api/projects?locale=${locale}`);
    const projects = await response.json();

    return projects;
}

const ProjectsSection = async ({ id }) => {
    const currentLocale = await getLocale();
    const t = await getTranslations("projects");

    const projects = await getProjects(currentLocale);

    return (
        <section
            id={id}
            className="section relative w-full h-screen pt-8 lg:pt-5 px-5 lg:px-0 pb-0 flex flex-col lg:justify-center">
            <h1 className="main-text text-center mb-4 text-2xl">{t("title")}</h1>

            <ProjectGrid
                projects={projects}
                className="w-full xl:pl-40 overflow-y-scroll scrollbars-hidden lg:overflow-x-scroll" />
        </section>
    );
};

export default ProjectsSection;
