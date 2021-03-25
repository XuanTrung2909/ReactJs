import {combineReducers} from 'redux';
import {BTGHProductDetailReducer} from './reducers/BTGHProductDetailReducer';
import {BTGHCart} from './reducers/BTGHCartReducer';

import {BTDatVeReducer} from './reducers/BTDatVeReducer'



export const rootReducer = combineReducers({

    BTGHProductDetailReducer: BTGHProductDetailReducer,
    BTGHCart: BTGHCart,
    
    BTDatVeReducer: BTDatVeReducer

});