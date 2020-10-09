import "../styles/global.scss";
import "../styles/settings.scss";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <Component {...pageProps} />
        </ReactQueryCacheProvider>
    );
}

export default MyApp;
