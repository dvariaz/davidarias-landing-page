import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styles from "./Skills.module.scss";

import Card from "../../../components/Card";
import Divider from "../../../components/Divider";

const Skills = ({ centerViewport }) => {
    const ref = useRef();
    return (
        <section className={styles.body} ref={ref}>
            <Divider top />
            <h1 className={styles.title}>Skills</h1>
            <ScrollContainer
                onStartScroll={() => centerViewport(ref.current.offsetTop)}
                className={styles.content}
            >
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Card
                            type="skill"
                            subtitle="Luis David Arias Manjarrez"
                            profile={{
                                large: "/assets/photos/square_photo_large.jpg",
                                medium: "/assets/photos/square_photo_medium.jpg",
                            }}
                            items={[
                                { name: "Inglés", value: "B1" },
                                { name: "Observación", value: "85%" },
                                { name: "Comunicación", value: "60%" },
                                { name: "Creatividad", value: "85%" },
                                { name: "Liderazgo", value: "60%" },
                            ]}
                        />
                    </div>
                    <div className={styles.column}>
                        <Card
                            type="skill"
                            title="Front-end Skills"
                            items={[
                                { prefix: "/assets/icons/react_icon.svg", name: "React" },
                                { prefix: "/assets/icons/html_icon.svg", name: "HTML" },
                                { prefix: "/assets/icons/css_icon.svg", name: "CSS" },
                                { prefix: "/assets/icons/javascript_icon.svg", name: "Javascript" },
                                { prefix: "/assets/icons/sass_icon.svg", name: "Sass" },
                                { prefix: "/assets/icons/unity_icon.svg", name: "Unity" },
                            ]}
                        />
                        <Card
                            type="skill"
                            title="Back-end Skills"
                            items={[
                                { prefix: "/assets/icons/nodejs_icon.svg", name: "Node.js" },
                                { prefix: "/assets/icons/laravel_icon.svg", name: "Laravel" },
                            ]}
                        />
                    </div>
                    <div className={styles.column}>
                        <Card
                            type="skill"
                            title="Design Skills"
                            items={[
                                { prefix: "/assets/icons/photoshop_icon.svg", name: "Photoshop" },
                                {
                                    prefix: "/assets/icons/aftereffects_icon.svg",
                                    name: "After Effects",
                                },
                                {
                                    prefix: "/assets/icons/illustrator_icon.svg",
                                    name: "Illustrator",
                                },
                                { prefix: "/assets/icons/adobexd_icon.svg", name: "XD" },
                                { prefix: "/assets/icons/premiere_icon.svg", name: "Premiere Pro" },
                            ]}
                        />
                        <Card
                            type="skill"
                            title="3D Skills"
                            items={[
                                { prefix: "/assets/icons/nodejs_icon.svg", name: "Autodesk Maya" },
                                { prefix: "/assets/icons/blender_icon.svg", name: "Blender" },
                                {
                                    prefix: "/assets/icons/substancepainter_icon.svg",
                                    name: "Substance Painter",
                                },
                            ]}
                        />
                    </div>
                </div>
            </ScrollContainer>
            <Divider />
        </section>
    );
};

export default Skills;
