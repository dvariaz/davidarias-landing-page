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
                <meta name="language" content="es" />
                <meta
                    name="description"
                    content="Desarrollador Front-end y Diseñador UI. Construyo experiencias de alta calidad y atractivas para tus usuarios. ¿Quieres darle un look fantástico a tus ideas? Entra aquí"
                />
                <meta
                    name="keywords"
                    content="Desarrollo Front-end,Desarrollo Frontend,Desarrollador frontend,Desarrollador front-end,Desarrollador React,Desarrollador React.js,React.js,Frontend,Front-end,Diseño web,Diseño de sitios web,Diseño de paginas web,UI,UX,Motion Graphics,Animacion,Colombia,Desarrollador Colombia,Desarrollo experiencias interactivas"
                />
                <meta property="og:title" content="David Arias - Creative Coder" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Desarrollador Front-end y UI Designer, apasionado por el arte y la forma en que se aplica al mundo de la tecnología."
                />
                <meta
                    property="og:image"
                    content={`${process.env.APP_URL}/assets/cards/davidarias_card_web.png`}
                />
                <meta name="twitter:title" content="David Arias - Creative Coder" />
                <meta
                    name="twitter:card"
                    content="Desarrollador Front-end y Diseñador UI. Construyo experiencias de alta calidad y atractivas para tus usuarios."
                />
                <meta name="twitter:site" content="@dvariaz" />
                <meta name="twitter:creator" content="@dvariaz" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:image:src"
                    content={`${process.env.APP_URL}/assets/cards/davidarias_card_web.png`}
                />
                <meta name="robots" content="INDEX,FOLLOW,ARCHIVE" />
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
    const url = `https://${process.env.VERCEL_URL}` || "http://localhost:3000";
    console.log(`Fetching ${url}`);

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
