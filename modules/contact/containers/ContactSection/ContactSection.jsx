'use client';
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import Button from "@/modules/shared/components/Button";

const ContactSection = ({ id }) => {
    const t = useTranslations("contact");

    return (
        <section id={id} className="flex flex-col section w-full h-screen overflow-hidden relative sm:px-8 py-16">
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                <h2 className="main-text text-center text-2xl mb-8 max-w-md">{t("title")}</h2>
                <Button
                    type="solid"
                    href="mailto:davidarias.contact@gmail.com"
                    className="p-2 min-w-50">
                    {t("contact-button")}
                </Button>
            </div>

            <div className="text-white description-text w-full">
                <div className="my-4 mx-0 justify-self-center">
                    <p className="mb-4">{t("social")}</p>
                    <div className="flex justify-around max-w-md">
                        <a
                            href="https://www.linkedin.com/in/dvariaz/"
                            target="_blank"
                            className="w-6 h-6 transition-transform hover:scale-120"
                        >
                            <img
                                src={"/assets/icons/linkedin_icon.svg"}
                                className="contact__icon"
                                alt="Github"
                            />
                        </a>
                        <a href="https://www.behance.net/dvariaz" target="_blank"
                        className="w-6 h-6 transition-transform hover:scale-120">
                            <img
                                src={"/assets/icons/behance_icon.svg"}
                                className="contact__icon"
                                alt="Behance"
                            />
                        </a>
                        <a href="https://github.com/dvariaz" target="_blank"
                        className="w-6 h-6 transition-transform hover:scale-120">
                            <img
                                src={"/assets/icons/github_icon.svg"}
                                className="contact__icon"
                                alt="Github"
                            />
                        </a>
                    </div>
                </div>

                <footer className="justify-self-center">
                    {t("made-in")} - 2020
                </footer>
            </div>


            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around md:text-[14rem] md:text-center pointer-events-none">
                <motion.h2
                    animate={{ opacity: [0, 1, 0], x: "-30%" }}
                    transition={{ type: "tween", repeat: Infinity, duration: 5 }}
                    className="text-white/10 outline-text m-0"
                >
                    Contact
                </motion.h2>

                <motion.h2
                    animate={{ opacity: [0, 1, 0], x: "30%" }}
                    transition={{ type: "tween", repeat: Infinity, duration: 5 }}
                    className="text-white/10 outline-text m-0"
                >
                    Me
                </motion.h2>
            </div>
        </section>
    );
};

export default ContactSection;
