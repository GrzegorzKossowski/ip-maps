import { LocationActionTypes } from './location-types'
// import { getIpLookup } from '../../api/dummy-api'
import { getIpLookup } from '../../api/ipstack-api'

export const getUserIp = (ip = 'check') => async (dispatch, getState) => {

    dispatch({ type: LocationActionTypes.LOCATION_IP_REQUEST })

    await getIpLookup(ip)
        .then((response) => {

            if (response.data.success === false) {
                console.log(response.data.error);
                dispatch({
                    type: LocationActionTypes.LOCATION_IP_FAIL,
                    payload: response.data.error
                })
            } else {
                dispatch({
                    type: LocationActionTypes.LOCATION_IP_SUCCESS,
                    payload: response.data
                })
            }

        })
        .catch(error => dispatch({
            type: LocationActionTypes.LOCATION_IP_FAIL,
            payload: {
                "success": false,
                "error": {
                    "code": 400,
                    "type": "other_type_error",
                    "info": `Something went wrong. Try again later.`
                }
            }
        }))
}