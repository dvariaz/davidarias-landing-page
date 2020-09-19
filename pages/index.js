import Head from "next/head";

//Views
import Home from "@contents/Home";
import AboutMe from "@contents/AboutMe";
import Projects from "@contents/Projects";
import Skills from "@contents/Skills";
import Studies from "@contents/Studies";
import Contact from "@contents/Contact";

//TODO: Una vez dominado el scroll snapping, aplicarlo a las secciones del index

export default function Index({ projects, stories, studies }) {
    return (
        <>
            <Head>
                <title>David Arias | Creative coder</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
            </Head>
            <main>
                <Home />
                <AboutMe stories={stories} />
                <Projects projects={projects} />
                <Skills />
                <Studies studies={studies} />
                <Contact />
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
        }, // will be passed to the page component as props
    };
}
