import { combineReducers } from 'redux'
import { ipStackReducer } from './location/location-reducer';
import { ipSearchReducer } from './search/search-reducer'
import { historyStackReducer } from './history/history-reducer'


// combine multiple reducers
export default combineReducers({

    userLocation: ipStackReducer,
    searchLocation: ipSearchReducer,
    history: historyStackReducer

    // other reducers
    // ...
})
