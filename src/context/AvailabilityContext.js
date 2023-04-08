import { createContext, useReducer} from 'react';
import { availabilityReducer } from './AvailabilityReducer';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        availabilityReducer, {
            availableTimes: ['11:00AM', '12:00PM', '01:00PM', '02:00PM', '5:00PM', '6:00PM'],
            availableDates: ['04-30-2023', '05-10-2023']
        }
    );

    const removeAvailability  = (time) => {
        dispatch({
            type: 'REMOVE_AVAILABILTIY',
            payload: time
        })
    };
    
    return (
        <AvailabilityContext.Provider value={{...state, removeAvailability}}>
            {children}
        </AvailabilityContext.Provider>
    )
}