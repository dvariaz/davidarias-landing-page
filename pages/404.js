import { useEffect } from "react";
import Head from "next/head";

//Hooks
import useWindowSize from "../hooks/useWindowSize";
import ErrorMessage from "../contents/errors/ErrorMessage";

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
                <ErrorMessage statusCode="404" />
            </main>
        </>
    );
}
