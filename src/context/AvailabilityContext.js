import { createContext, useReducer, useEffect } from 'react';
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
        user: null,
        cancelCode: null
    });

    const updateCancelCode = (code) => {
        dispatch({
            type: 'UPDATE_CANCEL_CODE',
            payload: code
        })
    }

    const updateData = (data) => {
        dispatch({
            type: 'UPDATE_DATA',
            payload: data
        })
    };

    const resetData = () => {
        dispatch({
            type: 'RESET'
        })
    };

    useEffect(() => {
        const updatedTimes = state.availableTimes.filter(time => {
            return time !== state.chosenTime
        })
        dispatch({
            type: 'UPDATE_AVAILABILITY',
            payload: updatedTimes
        })
    }, [state.chosenTime])

    return (
        <AvailabilityContext.Provider value={{ ...state,  resetData, updateData, updateCancelCode }}>
            {children}
        </AvailabilityContext.Provider>
    )
}