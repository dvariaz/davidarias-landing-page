import { useEffect } from "react";
import Head from "next/head";

//Hooks
import useWindowSize from "../hooks/useWindowSize";
import ErrorMessage from "../contents/errors/ErrorMessage";

function Error({ statusCode }) {
    const size = useWindowSize();

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [size]);

    return (
        <>
            <Head>
                <title>David Arias | 500</title>
            </Head>
            <main>
                <ErrorMessage statusCode={statusCode} />
            </main>
        </>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    console.log("Mirando error");
    return { statusCode };
};

export default Error;
