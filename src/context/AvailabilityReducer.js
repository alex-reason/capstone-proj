export const availabilityReducer = (state, action) => {
    let availability
    switch (action.type) {
        case 'REMOVE_AVAILABILITY':
            availability = [...state.availableTimes].filter(time => {
                return time !== action.payload;
            })
            return { ...state, availableTimes: availability}
        default:
            return state;
    }
}

