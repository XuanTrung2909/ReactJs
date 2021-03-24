import {combineReducers, createStore} from 'redux'
import {gioHangReducer} from './reducers/gioHangReducer';




const rooReducer = combineReducers({
    // noi chua toan bo state cua ung dung

    gioHangReducer: gioHangReducer

    
})



export const store = createStore(rooReducer);