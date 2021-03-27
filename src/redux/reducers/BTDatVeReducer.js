import {bindActionCreators} from 'redux';


const stateDefault = {
    danhSachGheDangDat: []
}



export const BTDatVeReducer = (state = stateDefault, action) => {

    switch(action.type){
        case 'CHON_GHE': {
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];
            danhSachGheDangDatCapNhat.push(action.ghe);
            state.danhSachGheDangDat = danhSachGheDangDatCapNhat;

            return {...state};
        }
        case 'XOA_GHE_CHON': {
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatCapNhat.findIndex((ghe => ghe.soghe === action.soGhe));

            danhSachGheDangDatCapNhat.splice(index,1);
            state.danhSachGheDangDat = danhSachGheDangDatCapNhat;

            return {...state};
        }
    }

    return {...state};
}