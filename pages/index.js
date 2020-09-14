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

export default function Index({ projects }) {
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
                <AboutMe />
                <Projects projects={projects} />
                <Skills />
                <Studies />
                <Contact />
            </main>
        </div>
    );
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json();

    return {
        props: { projects: data.projects }, // will be passed to the page component as props
    };
}
