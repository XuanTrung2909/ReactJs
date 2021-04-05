import {bindActionCreators} from 'redux'


const initialState = {

    mangSinhVien: [
    ],
    sinhVienSua: {
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'THEM_SINH_VIEN': {
            let index = state.mangSinhVien.findIndex(sv => sv.maSinhVien.trim() === action.sv.maSinhVien.trim());
            if(index === -1){
                state.mangSinhVien = [...state.mangSinhVien, action.sv];
            }
            
            return {...state};
        }
        case 'XOA_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.mangSinhVien.filter(sv => sv.maSinhVien !== action.maSinhVien)];
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state}
        }
        case 'SUA_SINH_VIEN': {
            state.sinhVienSua = action.sv;

            return {...state}
        }

    default: 
        return state   
    }
}
