import { useRef } from "react";
//Hooks
import useRealViewportSize from "../hooks/useRealViewportSize";

export const ViewportContext = React.createContext();

export const ViewportContextProvider = ({ children }) => {
    const ref = useRef();
    useRealViewportSize();

    const centerViewport = (position) => {
        ref.current.scrollTop = position;
    };

    return (
        <main ref={ref}>
            <ViewportContext.Provider value={{ centerViewport }}>
                {children}
            </ViewportContext.Provider>
        </main>
    );
};
