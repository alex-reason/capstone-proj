import { createContext, useEffect, useReducer } from 'react';
import { availabilityReducer } from './AvailabilityReducer';
import { fetchAPI } from '../dateApi.js';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        availabilityReducer, {
        availableDates: ['', 'Sun Apr 30 2023', 'Wed May 10 2023'],
        availableTimes: ['', ...fetchAPI(new Date())],
        chosenTime: null,
        chosenDate: null,
    });

    const updateChosenTime = (time) => {
        dispatch({
            type: 'UPDATE_CHOSEN_TIME',
            payload: time
        })
    }

    const updateChosenDate = (date) => {
        dispatch({
            type: 'UPDATE_CHOSEN_DATE',
            payload: date
        })
    }

    const resetData = () => {
        dispatch({
            type: 'RESET'
        })
    }

    useEffect(() => {
        const updatedTimes = state.availableTimes.filter(time => {
            return time !== state.chosenTime
        })
        dispatch({
            type: 'REMOVE_AVAILABILITY',
            payload: updatedTimes
        })
    }, [state.chosenTime])

    return (
        <AvailabilityContext.Provider value={{ ...state, updateChosenTime, resetData, updateChosenDate }}>
            {children}
        </AvailabilityContext.Provider>
    )
}