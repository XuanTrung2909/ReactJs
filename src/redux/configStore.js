import {combineReducers} from 'redux';
import {BTGHProductDetailReducer} from './reducers/BTGHProductDetailReducer';
import {BTGHCart} from './reducers/BTGHCartReducer'


export const rootReducer = combineReducers({

    BTGHProductDetailReducer: BTGHProductDetailReducer,
    BTGHCart: BTGHCart

});