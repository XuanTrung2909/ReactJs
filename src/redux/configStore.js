import {combineReducers} from 'redux';
import {BTGHProductDetailReducer} from './reducers/BTGHProductDetailReducer';
import {BTGHCart} from './reducers/BTGHCartReducer';

import {BTDatVeReducer} from './reducers/BTDatVeReducer'
import QuanLySinhVienReducer from './reducers/QuanLySinhVienReducer';



export const rootReducer = combineReducers({

    BTGHProductDetailReducer,
    BTGHCart,
    
    BTDatVeReducer,

    QuanLySinhVienReducer

});