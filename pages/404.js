import { useEffect } from "react";
import Head from "next/head";

//Hooks
import useWindowSize from "../hooks/useWindowSize";
import Error404 from "../contents/errors/Error404/Error404";

export default function Custom404() {
    const size = useWindowSize();

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [size]);

    return (
        <>
            <Head>
                <title>David Arias | 404</title>
            </Head>
            <main>
                <Error404 />
            </main>
        </>
    );
}
