export const availabilityReducer = (state, action) => {
    switch (action.type) {
        // remove availability
        case 'UPDATE_AVAILABILITY':
            return { ...state, availableTimes: action.payload }
        case 'UPDATE_DATA':
            return {...state, user: action.payload.user, chosenTime: action.payload.chosenTime, chosenDate: action.payload.chosenDate }
        case 'RESET':
            return { ...state, chosenTime: null, chosenDate: null, user: null, cancelCode: null }
        default:
            return state;
    }
}

