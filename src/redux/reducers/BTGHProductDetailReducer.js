import {bindActionCreators} from 'redux'


const stateProductDetail = {

    productDetail: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img-20210304/img/vsphone.jpg",
    }
}

export const BTGHProductDetailReducer = (state = stateProductDetail, action) => {


    switch(action.type){
        case 'VIEW_PRODUCT_DETAIL': {
            // console.log(action.product);
            state.productDetail = action.product;
            return {...state};
        }
    }
    return state;
};
