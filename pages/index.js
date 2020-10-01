import { useEffect, useRef } from "react";
import { mergeArrayOfObjects } from "../utils/index.js";
import Head from "next/head";

//Views
import Home from "../contents/index/Home";
import AboutMe from "../contents/index/AboutMe";
import Projects from "../contents/index/Projects";
import Skills from "../contents/index/Skills";
import Studies from "../contents/index/Studies";
import Contact from "../contents/index/Contact";

//Context
import { ViewportContextProvider } from "../context/ViewportContext";

export default function Index({ projects, stories, studies }) {
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
            <ViewportContextProvider>
                <Home id="index" />
                <AboutMe id="about-me" stories={stories} />
                <Projects id="projects" projects={projects} />
                <Skills />
                <Studies id="education" studies={studies} />
                <Contact id="contact" />
            </ViewportContextProvider>
        </>
    );
}
//TODO: El deploy en desarrollo no reconoce la url,
export async function getServerSideProps(context) {
    const url =
        process.env.NODE_ENV === "production"
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000";

    const responses = await Promise.all([
        fetch(`${url}/api/projects`),
        fetch(`${url}/api/stories`),
        fetch(`${url}/api/studies`),
    ]);

    try {
        const jsonArray = await Promise.all(
            responses.map((res) => {
                return res.json();
            })
        );

        return {
            props: mergeArrayOfObjects(jsonArray),
        };
    } catch (err) {
        console.log(err);

        return {
            props: {
                projects: [],
                stories: [],
                studies: [],
            },
        };
    }
}
