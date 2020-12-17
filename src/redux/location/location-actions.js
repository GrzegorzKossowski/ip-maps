import { LocationActionTypes } from './location-types'
// import { getIpLookup } from '../../api/ipstack-api'
// import { getIpLookup } from '../../module-location/api/dummy-api'
import { getIpLookup } from '../../module-location/api/ipstack-api'

export const getUserIp = (ip = 'check') => async (dispatch, getState) => {

    dispatch({ type: LocationActionTypes.LOCATION_IP_REQUEST })

    await getIpLookup(ip)
        .then((response) => dispatch({
            type: LocationActionTypes.LOCATION_IP_SUCCESS,
            payload: response.data
        }))
        .catch(error => dispatch({
            type: LocationActionTypes.LOCATION_IP_FAIL,
            payload: error
        }))
}


        // flatten object for redux
/*
const filtered = Object.keys(data)
.filter(key => key !== 'location')
.reduce((obj, key) => {
        obj[key] = data[key]
        return obj
    }, {})
    const location = data.location
    const flattened = Object.assign({}, { ...filtered }, { ...location })
    */