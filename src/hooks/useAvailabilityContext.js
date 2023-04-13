import { AvailabilityContext } from '../context/AvailabilityContext'
import { useContext } from "react";

export const useAvailabilityContext = () => {
    const context = useContext(AvailabilityContext);

    if (!context) {
        throw Error('useAvailabilityContext hook must only be used inside an AvailabilityContextProvider')
    }
    return context
};
