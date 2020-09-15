import Head from "next/head";

//Components
import Navbar from "../components/Navbar";
//Views
import Home from "@contents/Home";
import AboutMe from "@contents/AboutMe";
import Projects from "@contents/Projects";
import Skills from "@contents/Skills";
import Studies from "@contents/Studies";
import Contact from "@contents/Contact";

//TODO: Una vez dominado el scroll snapping, aplicarlo a las secciones del index

export default function Index({ projects, stories }) {
    return (
        <div>
            <Head>
                <title>David Arias | Creative coder</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
            </Head>
            <main>
                <Navbar
                    sections={[
                        { id: "index", name: "Inicio" },
                        { id: "about-me", name: "Quien soy" },
                        { id: "projects", name: "Mis proyectos" },
                        { id: "education", name: "Educación" },
                    ]}
                />
                <Home />
                <AboutMe stories={stories} />
                <Projects projects={projects} />
                <Skills />
                <Studies />
                <Contact />
            </main>
        </div>
    );
}

export async function getStaticProps(context) {
    const projectsResponse = await fetch("http://localhost:3000/api/projects");
    const projectsData = await projectsResponse.json();

    const storiesResponse = await fetch("http://localhost:3000/api/stories");
    const storiesData = await storiesResponse.json();

    return {
        props: { projects: projectsData.projects, stories: storiesData.stories }, // will be passed to the page component as props
    };
}
