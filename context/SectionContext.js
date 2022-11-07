import React, { useRef } from "react";

export const SectionContext = React.createContext();

export const SectionContextProvider = React.forwardRef(
    ({ id, className, children }, ref) => {
        return (
            <SectionContext.Provider value={{ ref }}>
                <section id={id} className={className} ref={ref}>
                    {children}
                </section>
            </SectionContext.Provider>
        );
    }
);
