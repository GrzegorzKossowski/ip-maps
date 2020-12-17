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

// const plDummyData = {
//   ip: "87.206.166.163",
//   type: "ipv4",
//   continent_code: "EU",
//   continent_name: "Europe",
//   country_code: "PL",
//   country_name: "Poland",
//   region_code: "MZ",
//   region_name: "Mazovia",
//   city: "\u015ar\u00f3dmie\u015bcie",
//   zip: "00-025",
//   latitude: 52.2317008972168,
//   longitude: 21.018339157104492,
//   location: {
//     geoname_id: 758470,
//     capital: "Warsaw",
//     languages: [
//       {
//         code: "pl",
//         name: "Polish",
//         native: "Polski",
//       },
//     ],
//     country_flag: "http://assets.ipstack.com/flags/pl.svg",
//     country_flag_emoji: "\ud83c\uddf5\ud83c\uddf1",
//     country_flag_emoji_unicode: "U+1F1F5 U+1F1F1",
//     calling_code: "48",
//     is_eu: true,
//   },
// };
