import { useLocale, useTranslations } from "next-intl";

//Components
import Navbar from "@/modules/shared/components/Navbar";
import LanguageToggler from "@/modules/shared/components/LanguageToggler";
import Portrait from "@/modules/home/components/Portrait";
import Shape from "@/modules/home/components/Shape";

const HomeSection = ({ id }) => {
    const currentLocale = useLocale();
    const t = useTranslations("home");

    return (
        <section id={id} className="bg-background-500 section relative flex flex-col justify-center items-center w-full h-screen">
            <Navbar
                sections={[
                    { id: "index", name: t("start") },
                    { id: "projects", name: t("my-projects") },
                    { id: "about-me", name: t("about-me") },
                    { id: "education", name: t("education") },
                    { id: "contact", name: t("contact") },
                ]}
                className="absolute top-0 z-100 w-full"
            />
            <LanguageToggler currentLocale={currentLocale} />
            <Portrait />
            <Shape color="#b70128" className="absolute top-0 left-0 w-full h-full overflow-hidden"/>
        </section>
    );
};

export default HomeSection;
