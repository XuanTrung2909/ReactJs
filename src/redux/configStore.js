import {combineReducers, createStore} from 'redux'


const stateDefault = {
    gioHang: [
        { 
            maSP: 1, 
            tenSP: "iphone X", 
            gia: 1000,
            soLuong: 1,
            hinhAnh: "./img-20210304/img/vsphone.jpg"
        }
    ]
}


const rooReducer = combineReducers({
    // noi chua toan bo state cua ung dung

    gioHangReducer: (state = stateDefault ) => {


        return state;
    }
})



export const store = createStore(rooReducer);