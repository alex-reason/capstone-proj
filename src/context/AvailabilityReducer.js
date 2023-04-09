export const availabilityReducer = (state, action) => {
    switch (action.type) {
        // remove availability
        case 'REMOVE_AVAILABILITY':
            return { ...state, availableTimes: action.payload }
        case 'UPDATE_CHOSEN_TIME':
            return { ...state, chosenTime: action.payload }
        case 'UPDATE_CHOSEN_DATE':
            return { ...state, chosenDate: action.payload }
        case 'RESET':
            return { ...state, chosenTime: null, chosenDate: null }
        default:
            return state;
    }
}

