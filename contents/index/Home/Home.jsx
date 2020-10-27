import { useRef } from "react";
import styles from "./Home.module.scss";

//Components
import Navbar from "../../../components/Navbar";
import Portrait from "./components/Portrait";
import Shape from "./components/Shape";
import LanguageToggler from "../../../components/LanguageToggler";

//TODO: Probar con useTranslation
//TODO: Al ingresar con una url, el navegador no viaja hasta el id
const Home = ({ id, t }) => {
    const ref = useRef();

    return (
        <section id={id} className={styles.body} ref={ref}>
            <Navbar
                sections={[
                    { id: "index", name: t("start") },
                    { id: "projects", name: t("my-projects") },
                    { id: "about-me", name: t("about-me") },
                    { id: "education", name: t("education") },
                    { id: "contact", name: t("contact") },
                ]}
            />
            <LanguageToggler />
            <Portrait sectionRef={ref} />
            <Shape color="#b70128" />
        </section>
    );
};

export default Home;
