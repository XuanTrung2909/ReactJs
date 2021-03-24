import { bindActionCreators } from "redux";


const stateDefault = {
    gioHang: []
}







export const gioHangReducer = (state = stateDefault, action) => {

    switch(action.type){
        case 'THEM_GIO_HANG':{
            //xu ly thay doi state

            let gioHangCapNhat = [...state.gioHang];
            // kiem tra gio hang

            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong += 1;
            }else{
                gioHangCapNhat.push(action.spGioHang);
            }

            //cap nhat lai state

            state.gioHang = gioHangCapNhat;

            return {...state}
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];


            // tim sp dduocwj click xoa

            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSPGHClick);
            if(index !== -1){
                gioHangCapNhat.splice(index,1);
            }
            //cap nhat lai state

            state.gioHang = gioHangCapNhat;

            // console.log(gioHangCapNhat);

            return {...state};
        }
        case 'TANG_GIAM_SL': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSPGHClick);
            // if(action.tangGiam === true){
            //     gioHangCapNhat[index].soLuong += 1;
            // }else if(gioHangCapNhat[index].soLuong > 1){
            //     gioHangCapNhat[index].soLuong -= 1;
            // }

            gioHangCapNhat[index].soLuong += action.tangGiam;

            if(gioHangCapNhat[index].soLuong < 1){
                gioHangCapNhat[index].soLuong -= action.tangGiam;
                return {...state};
            }

            state.gioHang = gioHangCapNhat;
            return {...state};
            
        }
    }
    return state;
}