import { HistoryActionTypes } from './history-types'

const generateId = () => {
    return Math.random().toString(16).slice(2, 10)
}

const initialState = {
    data: [
    ]
}

export const historyStackReducer = (state = initialState, action) => {
    switch (action.type) {
        case HistoryActionTypes.HISTORY_UPDATE_REQUEST:
            return { ...state, loading: true }
        case HistoryActionTypes.HISTORY_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [
                    ...state.data,
                    {
                        ...action.payload,
                        location: {
                            ...action.payload.location,
                            languages: [...action.payload.location.languages]
                        },
                        id: generateId()
                    }
                ]

            }
        case HistoryActionTypes.HISTORY_UPDATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
