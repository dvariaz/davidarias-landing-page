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

export async function getStaticProps(context) {
    const projectsResponse = await fetch("http://localhost:3000/api/projects");
    const projectsData = await projectsResponse.json();

    const storiesResponse = await fetch("http://localhost:3000/api/stories");
    const storiesData = await storiesResponse.json();

    const studiesResponse = await fetch("http://localhost:3000/api/studies");
    const studiesData = await studiesResponse.json();

    return {
        props: {
            projects: projectsData.projects,
            stories: storiesData.stories,
            studies: studiesData.studies,
        }, // will be passed to the page component as props
    };
}
