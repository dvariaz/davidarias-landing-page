import App from "next/app";
import Router from "next/router";
import * as gtag from "../lib/gtag";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { appWithTranslation } from "next-i18next";

import "../styles/global.scss";
import "../styles/settings.scss";

const queryCache = new QueryCache();

Router.events.on(
    "routeChangeComplete",
    (url) => typeof window === "undefined" && gtag.pageview(url)
);

function MyApp({ Component, pageProps }) {
    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <Component {...pageProps} />
        </ReactQueryCacheProvider>
    );
}

export default appWithTranslation(MyApp);
