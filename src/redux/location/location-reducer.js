import { LocationActionTypes } from './location-types'

export const ipStackReducer = (state = {}, action) => {
    switch (action.type) {
        case LocationActionTypes.LOCATION_IP_REQUEST:
            return { loading: true }
        case LocationActionTypes.LOCATION_IP_SUCCESS:
            return {
                loading: false,
                data: {
                    ...action.payload,
                    location: {
                        ...action.payload.location,
                        languages: [...action.payload.location.languages]
                    },
                },

            }
        case LocationActionTypes.LOCATION_IP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
