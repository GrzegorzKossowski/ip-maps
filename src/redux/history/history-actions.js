import { HistoryActionTypes } from './history-types'

export const updateHistory = (searchLocation) => async (dispatch, getState) => {

    dispatch({ type: HistoryActionTypes.HISTORY_UPDATE_REQUEST })

    dispatch({
        type: HistoryActionTypes.HISTORY_UPDATE_SUCCESS,
        payload: searchLocation
    })


}