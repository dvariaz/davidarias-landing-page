import { useEffect, useRef } from "react";
import Head from "next/head";

//Views
import Home from "../contents/Home";
import AboutMe from "../contents/AboutMe";
import Projects from "../contents/Projects";
import Skills from "../contents/Skills";
import Studies from "../contents/Studies";
import Contact from "../contents/Contact";

//Hooks
import useWindowSize from "../hooks/useWindowSize";

export default function Index({ projects, stories, studies }) {
    const ref = useRef();
    const size = useWindowSize();

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [size]);

    const centerViewport = (position) => {
        ref.current.scrollTop = position;
    };

    return (
        <>
            <Head>
                <title>David Arias | Creative coder</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
            </Head>
            <main ref={ref}>
                <Home id="index" />
                <AboutMe id="about-me" stories={stories} />
                <Projects id="projects" projects={projects} centerViewport={centerViewport} />
                <Skills />
                <Studies id="education" studies={studies} />
                <Contact id="contact" />
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const url = process.env.APP_URL || "http://localhost:3000";

    const projectsResponse = await fetch(`${url}/api/projects`);
    const projectsData = await projectsResponse.json();

    const storiesResponse = await fetch(`${url}/api/stories`);
    const storiesData = await storiesResponse.json();

    const studiesResponse = await fetch(`${url}/api/studies`);
    const studiesData = await studiesResponse.json();

    return {
        props: {
            projects: projectsData.projects,
            stories: storiesData.stories,
            studies: studiesData.studies,
        },
    };
}
