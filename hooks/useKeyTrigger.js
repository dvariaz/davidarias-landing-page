/** Custom Hook for triggering a callback when the user press a specfic key */
import { useEffect } from "react";

const useKeyTrigger = (callback, keysArray) => {
    function keyHandler({ key }) {
        if (keysArray.includes(key)) {
            callback();
        }
    }

    //Para manejar acciones del usuario al cerrar modales
    useEffect(() => {
        window.addEventListener("keyup", keyHandler);

        return () => {
            window.removeEventListener("keyup", keyHandler);
        };
    }, []);
};

export default useKeyTrigger;
