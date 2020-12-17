import { SearchActionTypes } from "./search-types";
import { getIpLookup } from '../../module-location/api/ipstack-api'
import { updateHistory } from '../history/history-actions'

export const getSearchIp = (ip) => async (dispatch, getState) => {

    dispatch({ type: SearchActionTypes.SEARCH_IP_REQUEST })

    await getIpLookup(ip)
        .then((response) => {
            dispatch({
                type: SearchActionTypes.SEARCH_IP_SUCCESS,
                payload: response.data
            })
            dispatch(updateHistory(response.data))
        })
        .catch(error => {
            dispatch({
                type: SearchActionTypes.SEARCH_IP_FAIL,
                payload: error
            })
        })

}