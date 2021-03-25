import {bindActionCreators} from 'redux';


let stateGioHang = {
    giohang: []
}

export const BTGHCart = (state = stateGioHang, action) => {

    switch(action.type){
        case 'THEM_GIO_HANG': {

            // console.log(action.product);

            let productCart = {...action.product, soLuong: 1};
            let gioHangCapNhat = [...state.giohang];
            let index = gioHangCapNhat.findIndex(sp => sp.maSP === productCart.maSP);
            // console.log(index);
            if(index !== -1){
                gioHangCapNhat[index].soLuong += 1;
            }else{
                gioHangCapNhat.push(productCart);
            }

            state.giohang = gioHangCapNhat;

            return {...state};
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.giohang];

            let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSP);

            gioHangCapNhat.splice(index,1);

            state.giohang = gioHangCapNhat;
            return {...state};
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.giohang];

            let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSP);

            gioHangCapNhat[index].soLuong += action.tangGiam;

            if(gioHangCapNhat[index].soLuong < 1){
                gioHangCapNhat[index].soLuong += 1;
                return {...state};
            }

            state.giohang = gioHangCapNhat;
            return{...state};
        }
    }

    return {...state};
}

