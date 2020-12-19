import { SearchActionTypes } from "./search-types";
import { getIpLookup } from '../../api/ipstack-api'
import { updateHistory } from '../history/history-actions'

export const getSearchIp = (ip) => async (dispatch, getState) => {

    dispatch({ type: SearchActionTypes.SEARCH_IP_REQUEST })

    await getIpLookup(ip)
        .then((response) => {

            if (response.data.success === false) {
                dispatch({
                    type: SearchActionTypes.SEARCH_IP_FAIL,
                    payload: response.data.error
                })
            } else {
                dispatch({
                    type: SearchActionTypes.SEARCH_IP_SUCCESS,
                    payload: response.data
                })
                dispatch(updateHistory(response.data))
            }

        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: SearchActionTypes.SEARCH_IP_FAIL,
                payload: {
                    "code": 400,
                    "type": "other_type_error",
                    "info": `Something went wrong. Try again later.`
                }
            })
        })

}
