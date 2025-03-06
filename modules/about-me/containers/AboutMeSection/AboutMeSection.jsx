'use client';
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

//Components
import Divider from "@/modules/shared/components/Divider";
import Button from "@/modules/shared/components/Button";

const AboutMeSection = () => {
    const t = useTranslations("about-me");

    return (
        <section className="bg-background-500 section relative flex flex-col justify-center items-center lg:py-10 px-8 w-full min-h-screen">
            <Divider className="absolute z-10" top />
            <div className="text-white relative z-10 text-center p-5 w-full max-w-[800px]">
                <h3 className="description-text !text-xl !font-normal mb-10">{t("greeting")}</h3>
                <img
                    src="/assets/logos/davidarias_logo.svg"
                    className="w-[75px] md:w-[125px] mt-2 mx-auto"
                />
                <div className="description-text my-4 p-4">
                    <p className="mb-6">{t("description")}</p>
                    <p className="mb-6">
                        {t("current-job")}
                    </p>
                    <p>Vue Lover 💚</p>
                </div>
                <Button
                    type="solid"
                    href={t("cv-link")}
                    target="_blank"
                    className="text-lg p-2 min-w-50">
                    {t("cv-link-button")}
                </Button>
            </div>
            <div className={clsx('absolute top-0 left-0 w-full h-full flex flex-col justify-around text-[10rem] pointer-events-none md:text-[14rem] text-center overflow-hidden')}>
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "-30%" }}
                    transition={{ type: "tween", repeat: Infinity, duration: 10 }}
                    className="outline-text m-0 text-white/5"
                >
                    David
                </motion.h1>
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "30%" }}
                    transition={{ type: "tween", repeat: Infinity, duration: 10 }}
                    className="outline-text m-0 text-white/5"
                >
                    Arias
                </motion.h1>
            </div>
            <Divider className="absolute z-10" />
        </section>
    );
};

export default AboutMeSection;
