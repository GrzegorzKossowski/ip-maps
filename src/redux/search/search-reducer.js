import { SearchActionTypes } from './search-types'

export const ipSearchReducer = (state = {}, action) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_IP_REQUEST:
            return { loading: true }
        case SearchActionTypes.SEARCH_IP_SUCCESS:
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
        case SearchActionTypes.SEARCH_IP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
